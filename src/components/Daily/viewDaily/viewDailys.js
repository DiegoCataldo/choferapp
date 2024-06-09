import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../../store/actions/projectActions'
import { Redirect, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import TableVD from "./TableVD"
import moment from "moment";
import { deleteUbicacion } from '../../../store/actions/projectActions'


class viewDailys extends Component {

  state = {

    columns: [
      { title: 'Fecha', field: 'fecha' },
      { title: 'Estado', field: 'estado' },
      { title: 'A la espera de', field: 'A la espera de' },
      { title: 'Tiempo en la fase actual', field: 'Tiempo en la fase actual' }

  
    ],
    dataDailys: [

    ]
  }



  static getDerivedStateFromProps(nextProps, state) {
    
    //const [myArray, setMyArray] = useState(nextProps);

    var {dailys } = nextProps;
    var {dailysupdate } = nextProps;

   
var newArrayDailys;


    if (dailys ) {
      newArrayDailys = dailys.map(o => {
        var newArrayDailys = Object.assign({}, o, { test: dailys.estado });
         newArrayDailys =  Object.assign({}, newArrayDailys, { fecha: moment(o.fecha.toDate()).format('DD/MM/YYYY') }); 

        return newArrayDailys;
      }); 

      };
    
  
    console.log(JSON.stringify(newArrayDailys));
   
    return {
      dataDailys: dailys ? newArrayDailys : [],
      
  }
}


  render() {
    const {  auth, actividades } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

  
    
    return (
      <div className="dashboard container center-div">
      <div className="row">
      <div className="col-12 col-md-12 "> 
                <TableVD  columns={this.state.columns} data={this.state.dataDailys} propsLocations={this.props}  />

          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    dailys: state.firestore.ordered.Dailys

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
    { collection: 'Dailys', orderBy: ['fecha', 'desc']}

  ])
)(viewDailys)