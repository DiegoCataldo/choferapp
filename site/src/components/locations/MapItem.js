import React , { CSSProperties, useMemo, useCallback, useState  }   from "react";
import PropTypes from 'prop-types'
import { GoogleMap, useLoadScript, MarkerF ,Marker, StandaloneSearchBox ,OverlayView} from '@react-google-maps/api'

const ExampleSearchBoxPropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object.isRequired,
  }).isRequired,
}



export default function MapItem(props){

  
  const {isLoaded} = useLoadScript ({
    googleMapsApiKey: "AIzaSyAw85W2yWPSc8ER-GdXru2RO_IIdaY-3RA"
  });
  //console.log(JSON.stringify(props.lat))
  //console.log("dds"+lat);
  if(!isLoaded) return <div> Loading...</div>;
  return <Map lat = {props.lat} lng = {props.lng} />
}

function Map(props) {
  const [isShown, setIsShown] = useState(false)

  const changeIsShown = useCallback(() => {
    console.log("entro");
    setIsShown(!isShown)
  }, [isShown])
  
  //console.log(JSON.stringify(props.lat))
  const center = useMemo(() => ({ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }), [{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }]);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">


      <MarkerF position={center} onClick={changeIsShown} />
    </GoogleMap>
  );
}
