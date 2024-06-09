import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ReactDOM } from "react-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    cargo: ""
  };

  componentDidMount() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError, authMensaje } = this.props;
    //if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Agregar Usuario</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">Nombre</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <select id ="cargo" onChange={this.handleChange}>
              <option value="" disabled selected>
                Seleccione Permiso de usuario
              </option>
              <option value="admin">Administrador</option>
              <option value="operador">Operador</option>
              <option value="supervisor">Supervisor</option>
            </select>
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
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
