import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import TableTiempos from "./TableTiempos"
import Cards from "./Cards"
import moment from "moment";
import "./dashboard.css"
import ChartAP from "./ChartAP"
import ChartRP from "./ChartRP"
import ChartEECC from "./ChartEECC"





class Dashboard extends Component {

  state = {

    columnsContratos: [
      { title: 'Proyecto', field: 'Proyecto' },
      { title: 'DEN', field: 'DEN' },
      { title: 'A la espera EECC', field: 'A la espera contratista' },
      { title: 'Revisión Pendiente', field: 'Revision pendiente' },
      { title: 'Aprobación pendiente', field: 'Aprobacion pendiente' },

    ],
    dataContratos: [

    ],

    optionsColumn: {
      chart: {
        id: "basic-bar",
        barHeight: '70%'
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '15px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold'
        }
      },
      fill:{
        colors: ['#0b5e8e'],
      },
      
      responsive: [{
        breakpoint: 480,
        options: {
         
          chart: {
            height: 300
          },
          dataLabels: {
            style: {
              fontSize: '10px'
            }
          },
        
        }
      }],
      xaxis: {
        categories: ['Tove CC-001', 'Carén CC-123', 'Talabre CC-XXX',"Pampa Austral CC-001"]
      },
      colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
    },

    seriesColumn: [
      {
        name: "Tiempo Mes Actual",
        data: [0.5, 2, 1.7,1]
      }
     
    ]
  }

  calculateDistance(lattitude1, longittude1, lattitude2, longittude2) {

    const toRadian = n => (n * Math.PI) / 180

    let lat2 = lattitude2
    let lon2 = longittude2
    let lat1 = lattitude1
    let lon1 = longittude1

    console.log(lat1, lon1 + "===" + lat2, lon2)
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
    console.log("distance==?", d)
    return d
  }

  static getDerivedStateFromProps(nextProps, state) {

    var { contratos } = nextProps;
    console.log(contratos);

    return {
      dataContratos: contratos,
    }
  }

  render() {
    const { projects, auth, notifications, actividades } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
        <h4 className="card-header-per text-center   padding-bottom-1 margin-top-2 h3-v1">Tiempos Daily Reports</h4>
          <div className="col-12 col-md-12 ">
            <Cards />
          </div>



          <div className="col-12 col-md-12 ">
            <div className="row">
            <h4 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1 h4-v1">Tiempos por Contrato</h4>
              <div className="col m4 ">
                <ChartEECC optionsColumn={this.state.optionsColumn} seriesColumn={this.state.seriesColumn} />
              </div>
              <div className="col m4">
                <ChartRP optionsColumn={this.state.optionsColumn} seriesColumn={this.state.seriesColumn} />
              </div>
              <div className="col m4">
                <ChartAP optionsColumn={this.state.optionsColumn} seriesColumn={this.state.seriesColumn} />
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-12 ">
            <TableTiempos columns={this.state.columnsContratos} data={this.state.dataContratos} propsUrg={this.props} />
          </div>
          <div classname="container-fluid">




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
    contratos: state.firestore.ordered.Contratos,
    notifications: state.firestore.ordered.notifications,
    ubicaciones: state.firestore.ordered.ubicaciones

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] },
    { collection: 'Contratos' },
    { collection: 'ubicaciones', orderBy: ['createdAt', 'desc'] }

  ])
)(Dashboard)
