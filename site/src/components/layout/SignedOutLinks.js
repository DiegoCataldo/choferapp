import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    
      <ul id="side-menu" className="sidenav side-menu cbp-spmenu cbp-spmenu-vertical center-align blue-grey darken-4">
        <li><div className = "" >
          <img src={require('../../img/LogoCeazamet.png')} className="brand-logo logo-nav" alt='logov1' />
        </div>
        </li>
       
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    
  )
}

export default SignedOutLinks