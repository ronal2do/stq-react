import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

export default class Mapa extends Component {
  render() {
  return (
    <GoogleMapLoader
     containerElement={ <div style={{height: '100%'}} /> }
     googleMapElement={
       <GoogleMap defaultZoom={15} defaultCenter={{lat: this.props.lat, lng: this.props.lng}} >
          <Marker
            position={{ lat: this.props.lat, lng: this.props.lng }}
          />
       </GoogleMap>
     }
     />
   );
 }
}
