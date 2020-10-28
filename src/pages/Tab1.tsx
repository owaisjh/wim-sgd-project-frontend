import React, { useEffect, useState } from 'react';
// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import StartDiv from '../components/StartDiv';
// import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
// import { fetcher } from "../utilities/fetcher";
import styles from "../styles/Home.module.css";
// import { map, resize } from 'ionicons/icons';
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");



const Tab1: React.FC = () => {

  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();
  const [Load, setLoaded] = useState("not_loaded");
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const prevHeight = height;
  const prevWidth = width;
  console.log("Height:"+prevHeight);
  console.log("Width:"+prevWidth); 
  const updateWidthAndHeight = () => {
    setWidth(753);
    setHeight(1005);
  };
  const [temp, setTemp] = useState(0);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWRpYWpnMTY5IiwiYSI6ImNrZ204ang1MDBpcnoycm8xc3I5cDlzMnAifQ.CQlynGnQmIdrW68HSoAynQ";




  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
   
      zoom: 13,
      
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [
        72.848784,19.128629
      ],
     
      
    
    });
    
    initializeMap(mapboxgl, map);
    
    setMap(map);
    window.addEventListener("onload", updateWidthAndHeight);
    
    console.log(map);
    
   
    
  }, []);

  
function loaded()
{

  if(Load=="not_loaded")
  {
      setLoaded("loaded");
      console.log("loaded");
      var geolocate = new mapboxgl.GeolocateControl();
      let map = new mapboxgl.Map({
     
          zoom: 13,
          
          container: "map",
          style: "mapbox://styles/mapbox/outdoors-v10",
          center: [
            72.848784,19.128629
          ],
         
          
        
        });
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );
      
  
    }
  
}

  return (
    <div className="container"  >
        
       <main className="main" onFocus={loaded} >
        
        <div id="map" style={{position:"absolute", width: "100%", height:"100%"}}  />
        
  {/* <b className="temp">{temp}</b> */}
      </main >
      
      <StartDiv />
    
</div>


  );
};

export default Tab1;
