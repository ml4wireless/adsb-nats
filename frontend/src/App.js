import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from '!mapbox-gl';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiemppYW5nMzMwIiwiYSI6ImNsOXhhdzhiMDA4eG8zb21qbHkwbXdrdTcifQ.LGmuZP4-Pekk3ht0JuU6oQ';
// look aa past 30 seconds
const PAST_TIME = 30 * 1000;
const TIME_LIMIT = 120 * 1000;
const Modes = {
	REAL_TIME: "real_time",
	CHOOSE_TIME: "choose_time",
}

const App = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);
  const [colorMap, setColorMap] = useState(new Map());
  const [dates, setDates] = useState([null, null])
  const [mode, setMode] = useState(Modes.REAL_TIME);
  const [markers, setMarkers] = useState([]);

  const handleSubmit = () => {
    const [startDate, endDate] = dates;

    if (endDate.getTime() - startDate.getTime() >= TIME_LIMIT) {
      alert("Please select time frame less than 2 minutes");
      return
    }

    markers.forEach(marker => marker.remove());
    setMarkers([]);
    setMode(Modes.CHOOSE_TIME);
    getFlightDataWithArgs();
  }

  const handleReset = () => {
    markers.forEach(marker => marker.remove());
    setMarkers([]);
    setDates([null, null]);
    setMode(Modes.REAL_TIME);
    getFlightData();
  }

  const getTimeParam = (timeDate) => {
    const [date, timeInfo] = timeDate.toISOString().split("T");
    const time = timeInfo.split(".")[0];
    const param = date + "%20" + time;
    return param;
  }

  const getFlightRequest = (url) => {
    axios.get(url)
    .then(res => {
      let data = res.data.filter((dataItem) => ("lon" in dataItem && "lat" in dataItem));
      const markersTemp = [];
      // Render custom marker components
      data.forEach((dataItem) => {
        // determine color
        var color;
        const icao = dataItem["ICAO"].toUpperCase();
        if (colorMap.has(icao)){
          color = colorMap.get(icao);
        } else {
          var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
          colorMap.set(icao, randomColor);
          setColorMap(colorMap);
          color = colorMap.get(icao);
        }
        
        // create a parent class
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = color;

        const time = new Date(dataItem.time);
        const dateString = time.toLocaleDateString();
        const timeString = time.toLocaleTimeString();

        // Create a Mapbox Marker at our new DOM node
        const marker = new mapboxgl.Marker(el)
          .setPopup(
            new mapboxgl.Popup({ offset: 10 }) // add popups
            .setHTML(
              `
              <div>
                <p>ICAO: ${icao}</p>
                <p>time: ${dateString + ' ' + timeString}</p>
              </div>
              `
            )
          )
          .setLngLat([dataItem["lon"], dataItem["lat"]])
          .addTo(map.current);
          markersTemp.push(marker);
      });
      setMarkers(markersTemp);
      // Clean up on unmount
      return () => map.current.remove(); 
    })    
  }

  const getFlightData = () => {
    const now = Date.now();
    const startTime = getTimeParam(new Date(now - PAST_TIME));
    const endTime = getTimeParam(new Date(now));
    const url = `https://ec2-35-80-21-70.us-west-2.compute.amazonaws.com/getJsonStream?start_date=${startTime}&&end_date=${endTime}`;
    getFlightRequest(url);
  }

  const getFlightDataWithArgs = () => {
    const [startDate, endDate] = dates;

    const startTime = getTimeParam(startDate);
    const endTime = getTimeParam(endDate);
    const url = `https://ec2-35-80-21-70.us-west-2.compute.amazonaws.com/getJsonStream?start_date=${startTime}&&end_date=${endTime}`;
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
    getFlightData();
  }


  useEffect(() => {
    if (map.current) return;

    var longitude = -122.3;
    var latitude = 37.8;
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        renderMap(longitude, latitude);
      });
    } else {
      console.log("Geolocation not supported by the browser");
      renderMap(longitude, latitude);
    }
  }, [])

  useEffect(() => {
    if (mode == Modes.REAL_TIME) {
      const interval = setInterval(() => {
        markers.forEach(marker => marker.remove());
        setMarkers([]);
        getFlightData();
      }, PAST_TIME);
      return () => clearInterval(interval);
    }
  }, [mode, markers]);

  return (
    <div className="container">
      <div className="form">
          {mode === Modes.REAL_TIME? (
            <div>
              data update every {PAST_TIME / 1000} seconds
            </div>
          ): (
            <div>
              no data update in this mode
            </div>
          )}
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
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
    );
};

export default App;
