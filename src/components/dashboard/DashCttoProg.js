import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import TableTiempos from "./TableTiemposCtto"
import TableTiemposUsuarios from "./TableTiemposUsuarios"
import Cards from "./Cards"
import moment from "moment";
import "./dashboard.css"
import ChartRoles from "./ChartTRoles"
import ChartTArea from "./ChartTArea"
import ChartUsuarios from "./ChartUsuarios"







class Dashboard extends Component {

  state = {




  }


  static getDerivedStateFromProps(nextProps, state) {
/*
    var { contratos } = nextProps;
    console.log(contratos);

    return {
      dataContratos: contratos,
    }*/
  }

  render() {
    const { projects, auth, notifications, actividades } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
        <h4 className="card-header-per text-center   padding-bottom-1 margin-top-2 h3-v1">Análisis Dotación y Maquinarias Contrato 1</h4>
         

         <div className="row">
         <div className="col m12">
         <iframe title="Daily Dashboard" width="100%" height="2400px" src="https://app.powerbi.com/reportEmbed?reportId=f96e681e-a23c-4fe6-9f03-662cc2d9b4be&autoAuth=true&ctid=e9bc23bb-772e-4090-abc4-b9fd485041fc" frameborder="0" allowFullScreen="true"></iframe>
          </div>
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
    notifications: state.firestore.ordered.notifications

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },

  ])
)(Dashboard)
