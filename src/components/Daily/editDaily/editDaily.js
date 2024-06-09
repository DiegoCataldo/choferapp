import React, { Component, useState, PureComponent } from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { createPersonal } from '../../../store/actions/projectActions'
import { Redirect, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import TablePersonalED from "./TablePersonalED2"
import TableMaqED from "./TableMaqED2"
import TableInter from "./TableInter"
import TableAvances from "./TableAvances"
import Test from "./test"


import moment from "moment";
import { deleteUbicacion } from '../../../store/actions/projectActions'
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
import "./editDaily.css";




class editDaily extends PureComponent {

  state = {
    dataDailys: [

    ],
    RUT: '',
    Nombre: '',
    Genero: '',
    Cargo: '',
    Categoria: '',
    Jornada: '',
    Turno_personal: '',
    Estado_personal: '',
    Area_trabajo: '',
    Horas_trabajadas: '',
    currentStep: 1,
    complete: false,
    reloadDerived: true,


  }



  steps = ["Personal", "Maquinarias", "Interferencias", "Avances", "Anexos", "Enviar"];



  static getDerivedStateFromProps(nextProps, prevState) {

    //const [myArray, setMyArray] = useState(nextProps);




    var newReload = prevState.reloadDerived;
    console.log('entroa derived' + newReload);



    if (prevState.reloadDerived) {
      var { dailys } = nextProps;
      var newArrayDailys;
      if (dailys) {
        newArrayDailys = dailys.map(o => {
          var newArrayDailys = Object.assign({}, o, { test: dailys.estado });
          // newArrayDailys = Object.assign({}, newArrayDailys, { fecha: moment(o.fecha.toDate()).format('DD/MM/YYYY') });
          return newArrayDailys;
        });
        newReload = false;
      };

      return {
        dataDailys: dailys ? newArrayDailys : [],
        reloadDerived: newReload
      }
    }
    return null;
  }

  alertDaily () {
    alert("Your file is being uploaded!")

}
  render() {


    const { auth, actividades } = this.props;



    // Función para renderizar el contenido específico de cada paso
    const renderStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 1:
          return <TablePersonalED />;
        case 2:
          return <TableMaqED />;
        case 3:
          return <TableInter />;
        case 4:
          return <TableAvances />;
        case 5:
          return <div>Anexos
            <div ><button className="btn btn-per pink lighten-1 marginbottom-1"> Adjuntar Anexos </button></div>
          </div>;
        case 6:
          return <div>Enviar Daily para su revisión por parte de CODELCO
            
          <div ><button   onClick={() => {
                  alertDaily();
                }} className="btn btn-per green lighten-1 marginbottom-1"> Enviar Daily Report </button></div>
          <script>
      
      </script>
        </div>;
        default:
          return null;
      }
    };


    const  alertDaily = () => {

      //const navigate = useNavigate();

      var r = window.confirm("¿Estás seguro que deseas enviar a aprobación el Daily?");
      if (r == true) {
       // propsLocations.deleteUbicacion(rowData);
      // navigate('/DailyEnviado');
       this.props.history.push('/DailyEnviado');

      } 
  
  }
    const handleChange = e => {
      e.preventDefault();
      debounce(this.setState({
        [e.target.id]: e.target.value,
        reloadDerived: false
      }), 10000);
      console.log(this.state.Genero);
    };

    const setComplete = e => {
      this.setState({
        complete: true
      })
    }

    const setNextPage = e => {

      var newStep = this.state.currentStep + 1;
      this.setState({
        currentStep: newStep
      })
      console.log(this.state.currentStep)
    }

    const setPrevPage = e => {

      var newStep = this.state.currentStep - 1;
      this.setState({
        currentStep: newStep
      })
      console.log(this.state.currentStep)
    }

    const handleSubmit = e => {
      e.preventDefault();
      this.setState({
        reloadDerived: true
      });
      this.props.createPersonal(this.state);
      this.props.history.push('/editDaily');


    };

    function debounce(func, timeout) {
      let timer;

      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }





    if (!auth.uid) return <Redirect to='/signin' />


    return (



      <div className="dashboard container center-div">
        <div className="row">
          <h4 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1 titulo-daily">Daily Report 30-04-2024</h4>

          <>

            {this.state.currentStep > 1 && (
              <button
                className="btn btn-per pink lighten-1 marginbottom-1"
                onClick={() => {
                  setPrevPage((this.state.currentStep));
                }}
              >
                Anterior
              </button>
            )}

            {!this.state.complete && (
              <button
                className="btn btn-per pink lighten-1 marginbottom-1"
                onClick={() => {
                  this.state.currentStep === this.steps.length
                    ? setComplete(true)
                    : setNextPage((this.state.currentStep));
                }}
              >
                {this.state.currentStep === this.steps.length ? "Finish" : "Siguiente"}
              </button>
            )}

          </>

          <div class="col-md-12">


            <>
              <div className=" flex flex-col  items-center justify-center">
                <div className="flex justify-between">
                  {this.steps?.map((step, i) => (
                    <div
                      key={i}
                      className={`step-item ${this.state.currentStep === i + 1 && "active"} ${(i + 1 < this.state.currentStep || this.state.complete) && "complete"
                        } `}
                    >
                      <div className="step">
                        {i + 1 < this.state.currentStep || this.state.complete ? <TiTick size={24} /> : i + 1}
                      </div>
                      <p className="text-gray-500">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {renderStepContent(this.state.currentStep)}



            </>



          </div>

        </div>
        <div className="row">
          <div className="col-12 col-md-12 ">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    dailys: state.firestore.ordered.PersonalDaily

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // deleteUbicacion: (project) => dispatch(deleteUbicacion(project)),
    createPersonal: (project) => dispatch(createPersonal(project))

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'PersonalDaily' }

  ])
)(editDaily)