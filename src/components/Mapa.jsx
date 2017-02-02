import React from 'react';
import {
  GoogleMapLoader,
  GoogleMap
} from "react-google-maps";

export default function Mapa (props) {
  return (
    <GoogleMapLoader
     containerElement={ <div style={{height: '100%'}} /> }
     googleMapElement={
       <GoogleMap defaultZoom={15} defaultCenter={{lat: props.lat, lng: props.lng}} />
     }
     />
  );
}
