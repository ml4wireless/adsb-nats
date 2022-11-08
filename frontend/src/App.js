import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "./test.json";

mapboxgl.accessToken = 'pk.eyJ1IjoiemppYW5nMzMwIiwiYSI6ImNsOXhhdzhiMDA4eG8zb21qbHkwbXdrdTcifQ.LGmuZP4-Pekk3ht0JuU6oQ';


const Marker = ({ onClick, children, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const App = () => {
  const mapContainerRef = useRef(null);
  const [data, setData] = useState([]);
  const [colorMap, setColorMap] = useState(new Map());

  useEffect(() => {
    axios.get('http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getJsonStream')
      .then(res => {
        let data = res.data.filter((dataItem) => ("lon" in dataItem && "lat" in dataItem));
        // data = data.slice(0, 100);
        setData(data);

        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-122.3, 37.8],
          zoom: 9,
        });
    
        // Render custom marker components
        data.forEach((dataItem) => {
          console.log(dataItem);
          

          // determine color
          var color;
          if (colorMap.has(dataItem["icao"])){
            color = colorMap.get(dataItem["icao"]);
          } else {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            colorMap.set(dataItem["icao"], randomColor);
            setColorMap(colorMap);
            color = colorMap.get(dataItem["icao"]);
          }

          // create a parent class
          const el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundColor = color;

          // Create a Mapbox Marker at our new DOM node
          new mapboxgl.Marker(el)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<h3>${dataItem["icao"]}</h3>`
              )
            )
            .setLngLat([dataItem["lon"], dataItem["lat"]])
            .addTo(map);
        });
    
        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");
    
        // Clean up on unmount
        return () => map.remove(); 
      })
  }, [])

  const markerClicked = (title) => {
    window.alert(title);
  };

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
