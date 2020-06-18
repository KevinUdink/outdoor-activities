import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = ({locations, mapSize}) => {
  const [selected, setSelected] = useState({});
  
  const mapStyles = {        
    height: "100%",
    width: "100%",
  };
  
  console.log("mapSize:", mapSize);
  console.log("Locations:", locations);
  console.log(`lat: ${locations[0].location.lat},`);
  console.log(`lng: ${locations[0].location.lng},`);

  const defaultCenter = {
    // Eagle Island state park - lat: 43.687581, lng: -116.394431
    lat: locations[0].location.lat,
    lng: locations[0].location.lng
  }
  
  const onSelect = (item) => {
    setSelected(item);
  }

  return (
    <div style={{width: mapSize, height: mapSize, margin: "auto", padding: "15px"}}>
      <LoadScript
        googleMapsApiKey='Google_API_Key_goes_here'>
          <GoogleMap
            // place the map on the page
            mapContainerStyle={mapStyles}
            zoom={11}
            center={defaultCenter}
            mapTypeId="hybrid"  // default is road view, you can also use "satellite" and "hybrid"
          >
          {
            // set the marker locations on the map
            locations.map((item) => {
              return (
                <Marker 
                  key={item.name} 
                  position={item.location} 
                  onClick={(_event) => { onSelect(item) }}
                />
              )
            })
          }
          {
            // once a user clicks on a location, we will display an info window for
            //    for the specific marker that is clicked on
            selected.location &&
            (
              <InfoWindow
                position={selected.location}
                clickable={true}
                // reset selected back to an empty object when the info box is closed
                onCloseClick={(_event) => { setSelected({})}}
              >
                <p>{selected.name}</p>
              </InfoWindow>
            )
          }
          </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapContainer;
