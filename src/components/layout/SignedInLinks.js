import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    
      <ul id="side-menu" className="sidenav side-menu cbp-spmenu cbp-spmenu-vertical center-align blue-grey darken-4">
        <li><div className = "" >
          <img src={require('../../img/logoRev2.png')} className="brand-logo logo-nav" alt='logov1' />
        </div>
        </li>
        <li>
         <h3> Bienvenido {props.profile.firstName} </h3>
        </li>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/create'>Nueva Mantencion</NavLink></li>
        <li><NavLink to='/gestionLocations'>Gestion Ubicaciones</NavLink></li>
        <li><NavLink to='/signup'>Agregar Usuario</NavLink></li>
        <li><NavLink to='/makeAdmin'>Agregar Admin</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
