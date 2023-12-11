import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import TableLocations from "./TableLocations"
import moment from "moment";
import { deleteUbicacion } from '../../store/actions/projectActions'

class GestionLocations extends Component {
  state = {
    title: '',
    content: ''
  }
  state = {

    columns: [
      { title: 'Nombre', field: 'nombre' },
      { title: 'latitud', field: 'lat' },
      { title: 'longitud', field: 'lng' },
      { title: 'Fecha Ingreso', field: 'fechacreacion' }


      

  
    ],
    dataUbicaciones: [

    ]
  }


  static getDerivedStateFromProps(nextProps, state) {
    
    var {ubicaciones } = nextProps;
    console.log(JSON.stringify(ubicaciones));

    var newArrayUbicaciones;

    if (ubicaciones) {

      newArrayUbicaciones = ubicaciones.map(ubicacion => {
        var newArrayUbicaciones = Object.assign({}, ubicacion, { test: ubicaciones.nombre });
        newArrayUbicaciones = Object.assign({}, newArrayUbicaciones, { fechacreacion: moment(ubicacion.createdAt.toDate()).format('DD/MM/YYYY') });

        return newArrayUbicaciones;
      });
    }

    return {
      dataUbicaciones: ubicaciones ? newArrayUbicaciones : [],
  }
}


  render() {
    const {  auth, actividades } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

  
    
    return (
      <div className="dashboard container center-div">
        <div className="row">
        <Link to='/createLocation'>  <button  className="btn btn-per pink lighten-1 button-add-locations">Agregar Nueva Ubicación</button> </Link>
        </div>
      <div className="row">
      <div className="col-12 col-md-12 ">
           <TableLocations  columns={this.state.columns} data={this.state.dataUbicaciones} propsLocations={this.props}  />
          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    ubicaciones: state.firestore.ordered.ubicaciones

  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUbicacion: (project) => dispatch(deleteUbicacion(project))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'ubicaciones', orderBy: ['createdAt', 'desc']}

  ])
)(GestionLocations)