import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ReactDOM } from "react-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { makeAdmin } from "../../store/actions/authActions";

class MakeAdmin extends Component {
    state = {
      email: ""
    };
  
  
    handleChange = e => {
      this.setState({
        [e.target.id]: e.target.value
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.makeAdmin(this.state);
    };
    render() {
      const { auth, authError, authMensaje } = this.props;
      if (!auth.uid) return <Redirect to="/" />;
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Agregar Usuario</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="User email" id="admin-email" required />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 btn-per">Sign Up</button>
              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
                {authMensaje ? <p>{authMensaje}</p> : null}
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError,
      authMensaje: state.auth.authMensaje
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      makeAdmin: creds => dispatch(makeAdmin(creds))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MakeAdmin);
  