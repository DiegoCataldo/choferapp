import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import UrgenciasTable from "./UrgenciasTable"
import moment from "moment";




class Dashboard extends Component {

  state = {

    columnsActividades: [
      { title: 'Patente', field: 'patente' },
      { title: 'Semiremolque', field: 'semiremolque' },
      { title: 'Actividad', field: 'nombreActividad' },
      { title: 'Ubicacion Cercana', field: 'text_ub_cercana'},
      { title: 'Fecha Ingreso', field: 'fechacreacion' },
  
    ],
    dataActividades: [

    ]
  }

  calculateDistance(lattitude1, longittude1,lattitude2,longittude2)
{
    
const toRadian = n => (n * Math.PI) / 180

    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1

    console.log(lat1, lon1+"==="+lat2, lon2)
    let R = 6371  // km
    let x1 = lat2 - lat1
    let dLat = toRadian(x1)
    let x2 = lon2 - lon1
    let dLon = toRadian(x2)
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c
    console.log("distance==?",d)
    return d 
      }

  static getDerivedStateFromProps(nextProps, state) {
    
    var {actividades } = nextProps;

    var newArrayActividades;

    if (actividades) {

      newArrayActividades = actividades.map(actividad => {
        var newArrayActividades = Object.assign({}, actividad, { nombreActividad: actividad.actividad });
        newArrayActividades = Object.assign({}, newArrayActividades, { fechacreacion: moment(actividad.creationDate.toDate()).format('YYYY/MM/DD') });
        var text_ub_cercana = "a " + actividad.distance_ub_cercana.toString().substr(0,4) + "KM de " + actividad.nombre_ub_cercana;
        newArrayActividades = Object.assign({}, newArrayActividades, { text_ub_cercana: text_ub_cercana });


        return newArrayActividades;
      });
    }

    return {
      dataActividades: actividades ? newArrayActividades : [],
  }
}

  render() {
    const { projects, auth, notifications, actividades } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
        <div className="col-12 col-md-12 ">
           <UrgenciasTable  columns={this.state.columnsActividades} data={this.state.dataActividades} propsUrg={this.props}  />
          </div>
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    actividades: state.firestore.ordered.Actividades,
    notifications: state.firestore.ordered.notifications,
    ubicaciones: state.firestore.ordered.ubicaciones

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']},
    { collection: 'Actividades', orderBy: ['creationDate', 'desc']},
    { collection: 'ubicaciones', orderBy: ['createdAt', 'desc']}

  ])
)(Dashboard)
