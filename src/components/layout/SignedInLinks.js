import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    
      <ul id="side-menu" className="sidenav side-menu cbp-spmenu cbp-spmenu-vertical center-align blue-grey darken-4">
        <li><div className = "" >
          <img src={require('../../img/logoEJ.png')} className="brand-logo logo-nav" alt='logov1' />
        </div>
        </li>
        <li>
         <h3> Bienvenido {props.profile.firstName} </h3>
        </li>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/viewDailys'>Ingresar Daily</NavLink></li>
        <li><NavLink to='/DashCttoProg'>Análisis Programa</NavLink></li>
        <li><NavLink to='/DashCttoTiempos'>Análisis Tiempos</NavLink></li>
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
