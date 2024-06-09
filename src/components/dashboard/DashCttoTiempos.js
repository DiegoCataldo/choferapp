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

    columnsDailys: [
      { title: 'Fecha', field: 'Fecha' },
      { title: 'Estado Actual', field: 'Estado_actual' },
      { title: 'Tiempo EECC', field: 'Tiempo_EECC' },
      { title: 'Tiempo Rev. PyC', field: 'Tiempo_pyc' },
      { title: 'Tiempo Rev. CC', field: 'Tiempo_cc' },
      { title: 'Tiempo Aprobación', field: 'Tiempo_aprobacion' },

    ],
    dataDailys: [
      { Fecha: '20-05-2023' ,Estado_actual: 'Aprobación Pendiente', Tiempo_EECC: '0.5 día(s)',  Tiempo_pyc: '0.6 día(s)', Tiempo_cc: '1 día(s)',  Tiempo_aprobacion: '2 día(s)'},
      { Fecha: '21-05-2023' ,Estado_actual: 'Revisión CC pendiente', Tiempo_EECC: '0.8 día(s)',  Tiempo_pyc: '0.6 día(s)', Tiempo_cc: '1.5 día(s)',  Tiempo_aprobacion: '2 día(s)'},
      { Fecha: '22-05-2023' ,Estado_actual: 'A la espera EECC', Tiempo_EECC: '0.6 día(s)',  Tiempo_pyc: '0 día(s)', Tiempo_cc: '0 día(s)',  Tiempo_aprobacion: '0 día(s)'},

    ],

    columnsUsuarios: [
      { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
      { title: 'Nombre', field: 'Nombre' },
      { title: 'Correo', field: 'Correo' },
      { title: 'Rol', field: 'Rol' },
    ],
    dataUsuarios: [
      { imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,Nombre: 'Juan Perez', Correo: 'juanperez@correo.com',  Rol: 'Revisor PyC'},
      { imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,Nombre: 'Pedro Flores', Correo: 'pedroflores@correo.com',  Rol: 'Aprobador'},
      { imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4' ,Nombre: 'Sergio Diaz', Correo: 'sergiodiaz@correo.com',  Rol: 'EECC'},

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
          fontWeight: 'bold',
        }
      },
      fill:{
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
      },
      colors:['#F44336', '#E91E63', '#9C27B0'],
      
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
        categories: ['EECC', 'Revisores', "Aprobadores"]
      },
     
    },

    seriesColumn: [{
      data: [
        {
          x: 'Category B',
          y: 4,
          fillColor: '#cec701',
          strokeColor: '#C23829'
        }, {
          x: 'Category B',
          y: 3.2,
          fillColor: '#00268f',
          strokeColor: '#C23829'
        }, {
          x: 'Category B',
          y: 1.6,
          fillColor: '#007fb2',
          strokeColor: '#C23829'
        }
      ]  
    }],


    seriesArea: [{
      name: 'EECC',
      data: [3, 4, 2.8, 5, 4, 1, 1.5]
    },
    {
      name: 'Revisores',
      data: [4, 3.2, 4.5, 3, 3.4, 2.5, 1]
    },
    {
      name: 'Aprobadores',
      data: [1, 1.5, 1.5, 3, 2, 4, 4]
    }],


    optionsArea: {
      chart: {
        height: 350,
        type: 'area'
      },
      fill:{
        colors: ['#cec701','#00268f','#007fb2','#07ce6b']
      },
      colors: ['#cec701','#00268f','#007fb2','#07ce6b'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'string',
        categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  

    
    optionsUsuariosC: {
      chart: {
        id: "basic-bar",
        barHeight: '70%'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }},
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '15px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
        }
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
        categories: ['Pedro Flores', 'Juan Perez', "Sergio Diaz"]
      },
     
    },

    seriesUsuariosC: [{
      data: [
        {
          x: 'Category B',
          y: 2,
          fillColor: '#007fb2',
          strokeColor: '#C23829'
        }, {
          x: 'Category B',
          y: 1.5,
          fillColor: '#007fb2',
          strokeColor: '#C23829'
        }, {
          x: 'Category B',
          y: 0.6,
          fillColor: '#007fb2',
          strokeColor: '#C23829'
        }
      ]  
    }],


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
        <h4 className="card-header-per text-center   padding-bottom-1 margin-top-2 h3-v1">Análisis Tiempos Contrato 1</h4>
          <div className="col-12 col-md-12 ">
            <Cards />
          </div>

          <div className="col-12 col-md-12 ">
            <div className="row">
            <h4 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1 h4-v1">Tiempos por Área (días)</h4>
              <div className="col m6 ">
                <ChartRoles optionsColumn={this.state.optionsColumn} seriesColumn={this.state.seriesColumn} />
              </div>
              <div className="col m6">
              <ChartTArea optionsColumn={this.state.optionsArea} seriesColumn={this.state.seriesArea} />
              </div>
             
            </div>
          </div>


          <div className="col-12 col-md-12 ">
          <div className="row">

            <TableTiempos columns={this.state.columnsDailys} data={this.state.dataDailys} propsUrg={this.props} />
          </div>
          <div className="row">
          <h4 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1 h4-v1">Tiempos por Usuario (días)</h4>

          <div className="col m6">
            <TableTiemposUsuarios columns={this.state.columnsUsuarios} data={this.state.dataUsuarios} propsUrg={this.props} />
          </div>
          <div className="col m6 ">
                <ChartUsuarios optionsColumn={this.state.optionsUsuariosC} seriesColumn={this.state.seriesUsuariosC} />
              </div>

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
