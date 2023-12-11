import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250
    });
  }

  componentDidUpdate() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "right",
      inDuration: 250
    });
  }

  render() {
    const { auth, profile } = this.props;

    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

    const navLinkLogIn = <Link to='/' className="left brand-logo logov3 logged-in"> <img src={require('../../img/Logo.png')} alt='logov1' /> </Link> ;
    const navLinkLogOut = <Link to='/' className="left brand-logo logov1 logged-out"> <img src={require('../../img/jdworkLogov2.png')} alt='logov1' /> </Link>;
    
    const navLink = auth.uid ? (
     navLinkLogIn
    ) : (
      navLinkLogOut
    );
  
    
    return (
      <div>
        <nav className="grey darken-4 z-depth-0">
          <div className="nav-wrapper container">
          {navLink}
          <Link to='/' className="center brand-logo logov2"> <img src={require('../../img/logoEJ.png')} alt='logov1' /> </Link>
            <span className="right  text-darken-1">
              <i className="material-icons sidenav-trigger" data-target="side-menu">
                menu
              </i>
            </span>
          </div>
        </nav>
        {links}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
