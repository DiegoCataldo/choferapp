
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLocation } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import MapItem  from './MapItem'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import {  setKey,  setDefaults,  setLanguage,  setRegion,  fromAddress,  fromLatLng,  fromPlaceId,  setLocationType,  geocode, RequestType,} from "react-geocode";
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext
} from '@geoapify/react-geocoder-autocomplete';


setDefaults({
  key: "AIzaSyAw85W2yWPSc8ER-GdXru2RO_IIdaY-3RA", // Your API key .
  language: "en", // Default language for responses.
  region: "es", // Default region for responses.
});



class CreateLocation extends Component {
  state = {
    nombre: '',
    lat:  this.props.location.state ?  this.props.location.state.lat : 0 ,
    lng: this.props.location.state ? this.props.location.state.lng :0,
    address: ""

  }

  
  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value
    })
  
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createLocation(this.state);
    this.props.history.push('/gestionLocations');

  }
  onPlaceSelect = (e) =>{

    console.log(JSON.stringify(e));
    if(e && Object.keys(e).length > 0){
    
      console.log("0");
      this.setState({
        lat: e.properties.lat,
        lng: e.properties.lon,
        address: e.properties.name
      })
    }
    }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    //console.log("dsds" +this.state.lat);
    return (
     
      <div className="container">  



      <div className='mapa'>
      <MapItem lat={this.state.lat} lng ={ this.state.lng}></MapItem>
      </div>
     
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Crear una nueva ubicación</h5>
          <div className="input-field">
            <input type="text" id='nombre' onChange={this.handleChange} />
            <label htmlFor="nombre">Nombre Corto</label>
          </div>

          <GeoapifyContext apiKey="ab229804ee6f4a589d3b6cb979483e10">
  {/* Your Geoapify Geocoder Autocomplete components go here */}

          <GeoapifyGeocoderAutocomplete
    placeholder="Enter address here"
      placeSelect={this.onPlaceSelect}
  />
</GeoapifyContext>
          <div className="input-field">
            <button className="btn btn-per pink lighten-1">Crear</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLocation: (project) => dispatch(createLocation(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLocation)
