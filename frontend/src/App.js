import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from '!mapbox-gl';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiemppYW5nMzMwIiwiYSI6ImNsOXhhdzhiMDA4eG8zb21qbHkwbXdrdTcifQ.LGmuZP4-Pekk3ht0JuU6oQ';

const PAST_TIME = 90 * 1000;
const UPDATE_TIME = 20 * 1000;
const WINDOW_TIME = 30 * 1000;
const TIME_LIMIT = 300 * 1000;
const Modes = {
	REAL_TIME: "real_time",
	CHOOSE_TIME: "choose_time",
}

const colorMap = new Map();
const reportersList = ["All reporters", "anonymous user", "josh-airspy", "josh-rtl-sdr"];

const App = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);
  const markers = useRef([]);
  const [reporters, setReporters] = useState(reportersList);
  const [reporter, setReporter] = useState("All reporters");
  const [dates, setDates] = useState([null, null])
  const [mode, setMode] = useState(Modes.REAL_TIME);

  const handleSubmit = () => {
    markers.current.forEach(marker => marker.remove());
    markers.current = [];
    const [startDate, endDate] = dates;

    if (endDate.getTime() - startDate.getTime() >= TIME_LIMIT) {
      alert("Please select time frame less than 5 minutes");
      return
    }
    setMode(Modes.CHOOSE_TIME);
  }

  const handleReset = () => {
    markers.current.forEach(marker => marker.remove());
    markers.current = [];
    setDates([null, null]);
    setMode(Modes.REAL_TIME);
  }

  const getTimeParam = (timeDate) => {
    const [date, timeInfo] = timeDate.toISOString().split("T");
    const time = timeInfo.split(".")[0];

    const param = date + "T" + time;
    return param;
  }

  const getFlightRequest = (url) => {
    axios.get(url)
    .then(res => {
      let data = res.data.map((dataItem) => {
        if ("_source" in dataItem && "inner_hits" in dataItem)  {
          return {"_source": dataItem["_source"], "inner_hits": dataItem["inner_hits"]};
        }
      });

      data = data.filter((dataItem) => ("lon" in dataItem["_source"] && "lat" in dataItem["_source"]));

      if (mode === Modes.REAL_TIME) {
        data = data.slice(-500);
      }

      const markersTemp = [];
      const reportersSet = new Set(reporters);
      // Render custom marker components
      data.forEach((dataItem) => {
        // determine color
        var color;
        const source = dataItem["_source"];
        const icao = source["ICAO"].toUpperCase();
        if (colorMap.has(icao)){
          color = colorMap.get(icao);
        } else {
          const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
          colorMap.set(icao, randomColor);
          color = colorMap.get(icao);
        }
        
        // create a parent class
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = color;

        const time = new Date(source.time + "Z");
        const dateString = time.toLocaleDateString();
        const timeString = time.toLocaleTimeString();

        const {aircraft, manufacturer, feet} = source;
        let {reporter_uid} = source;
        const airplaneType = manufacturer === "unknown"? "not available" : manufacturer + ' ' + aircraft;
        const numReporters = dataItem["inner_hits"]["latest"]["hits"]["total"]["value"];

        reporter_uid = reporter_uid === undefined? "anonymous user" : reporter_uid;
        if (!reportersSet.has(reporter_uid)) {
          reportersSet.add(reporter_uid);
        }

        // Create a Mapbox Marker at our new DOM node
        const marker = new mapboxgl.Marker(el)
          .setPopup(
            new mapboxgl.Popup({ offset: 10 }) // add popups
            .setHTML(
              `
              <div>
                <div><strong>ICAO:</strong> ${icao}</div>
                <div><strong>Altitude:</strong> ${feet} ft</div>
                <div><strong>Time:</strong> ${dateString + ' ' + timeString}</div>
                <div><strong>Aircraft:</strong> ${airplaneType}</div>
                <div><strong>Number of Reporters:</strong> ${numReporters}</div>
              </div>
              `
            )
          )
          .setLngLat([source["lon"], source["lat"]])
          .addTo(map.current);
        marker.time = time;
        marker.reporter = reporter_uid;
        markersTemp.push(marker);
      });

      if (mode === Modes.REAL_TIME) {
        let newMarkers = [...markers.current, ...markersTemp];
        if (newMarkers.length >= 1200) {
          newMarkers.sort((a, b) => a.time.getTime() - b.time.getTime());
          const tempMarkers = newMarkers.slice(0, newMarkers.length - 500);
          tempMarkers.forEach(marker => marker.remove());
          newMarkers = newMarkers.slice(-500);
        }
        markers.current = newMarkers;
      } else if (mode === Modes.CHOOSE_TIME) {
        markers.current = markersTemp;
      }

      // Clean up on unmount
      return () => map.current.remove(); 
    })    
  }

  const getFlightData = (timeDiff) => {
    const now = Date.now();
    const startTime = getTimeParam(new Date(now - timeDiff));
    const endTime = getTimeParam(new Date(now));
    const url = `https://elastic.spectrumdatapipeline.net/getJsonStreamCompress?start_date=${startTime}&&end_date=${endTime}`;
    getFlightRequest(url);
  }

  const getFlightDataWithArgs = () => {
    const [startDate, endDate] = dates;

    const startTime = getTimeParam(startDate);
    const endTime = getTimeParam(endDate);
    const url = `https://elastic.spectrumdatapipeline.net/getJsonStreamCompress?start_date=${startTime}&&end_date=${endTime}`;
    getFlightRequest(url);
  }

  const renderMap = (longitude, latitude) => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 9,
    });
    map.current.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      language: "en-EN",
    }), "top-right");
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");
  }


  useEffect(() => {
    if (map.current) return;

    var longitude = -122.3;
    var latitude = 37.8;

    if (navigator.permissions) {
      navigator.permissions.query({name:'geolocation'}).then((result) => {
        if (result.state === 'denied') {
          console.log("Geolocation not supported by the browser");
          renderMap(longitude, latitude);        
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition((position) => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            renderMap(longitude, latitude);
          }, (err) => {
            console.log("Geolocation not supported by the browser");
            renderMap(longitude, latitude);
          });
        } else if (result.state === "granted") {
          if (navigator.gelocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              longitude = position.coords.longitude;
              latitude = position.coords.latitude;
              renderMap(longitude, latitude);
            });   
          } else {
            console.log("Geolocation not supported by the browser");
            renderMap(longitude, latitude);  
          } 
        }
      });
    } else {
      console.log("Geolocation not supported by the browser");
      renderMap(longitude, latitude);  
    }
  }, [])

  useEffect(() => {
    if (mode === Modes.REAL_TIME) {
      getFlightData(PAST_TIME);

      const updateInterval = setInterval(() => {
        getFlightData(WINDOW_TIME);
      }, UPDATE_TIME);

      return () => {
        clearInterval(updateInterval);
      };
    } else if (mode === Modes.CHOOSE_TIME) {
      getFlightDataWithArgs();
    }
  }, [mode])

  // filter by reporter
  useEffect(() => {
    if (reporter === "All reporters") {
      markers.current.forEach(marker => marker.getElement().style.opacity = 1);
    } else {
      markers.current.forEach(marker => {
        if (marker.reporter !== reporter) {
          marker.getElement().style.opacity = 0;
        } else {
          marker.getElement().style.opacity = 1;
        }
      })
    }
  }, [reporter, markers])
  
  return (
    <div className="container">
      {window.innerWidth >= 500 && (
        <div className="form">
            {mode === Modes.REAL_TIME? (
              <div>
                Map is automatically updated with live data every {UPDATE_TIME / 1000} seconds
              </div>
            ): (
              <div>
                Displaying data from the selected date/time range:
              </div>
            )}
          <div className='marginTop'>
            <label>Optional: Set customized date/time range:</label>
          </div>
          <DateTimeRangePicker 
            value={dates}
            onChange={setDates}
            locale="en-EN"
            className="bg-w"
          />
          <br />
          <button 
            onClick={handleSubmit} 
            disabled={dates[0] === null || dates[1] === null}
          >
            submit
          </button>
          <button 
            onClick={handleReset} 
            disabled={dates[0] === null || dates[1] === null}
          >
            reset
          </button>
          
          <div className='marginTop dropdown'>
            <label>Select Reporter:</label>
            <Dropdown placeholder="Select an option" 
              options={reporters} 
              value={reporter}
              onChange={e => setReporter(e.value)}
            />
          </div>
        </div>
        )
      }
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default App;
