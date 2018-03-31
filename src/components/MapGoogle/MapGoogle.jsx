import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapGoogle = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.defaultCenter}
  >
    <Marker position={props.position} />
  </GoogleMap>,
))
export default MapGoogle
