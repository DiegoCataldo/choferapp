import React, { useState } from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';
import { deleteUbicacion } from '../../../store/actions/projectActions'




function TablePesonalED(props) {
  const { columns, data, propsLocations, handleSubmit, handleChange } = props;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const showHideClassName = showModal ? "modal2 display-block" : "modal2 display-none";

  const divStyle = {
    display: 'block',
    zIndex: '100'
  };


  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value
    handleChange(event); // Call the parent's function
  };

  const onSubmit = (event) => {


    handleSubmit(event);
    // closeModal();
  }

  return (

    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">

          <div>
            {showModal && (
              <div className={showHideClassName}>
                <div className="modal2-main">
                  <header class="modal-container-header">
                    <h6 class="modal-container-title">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" />
                      </svg>
                      Ingresar Personal
                    </h6>
                    <button class="icon-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                  </header>
                  <div className="modal2-body">
                    <div className="container">
                      <form className="white" onSubmit={onSubmit}>
                        <div className="input-field">
                          <input type="text" id='RUT' name="RUT" onChange={onChange} />
                          <label htmlFor="title">RUT</label>
                        </div>
                        <div className="input-field">
                          <textarea id='Nombre' name="Nombre" className="materialize-textarea" onChange={onChange}></textarea>
                          <label htmlFor="content">Nombre</label>
                        </div>

                        <div className="input-field">
                          <div className='label-custom'>Género</div>
                          <select id="Genero" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="M" >M</option>
                            <option value="F" >F</option>
                          </select>
                        </div>
                        <div className="input-field">
                          <div className='label-custom'>Cargo</div>
                          <select id="Cargo" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="Administrador de Contrato" >Administrador de Contrato</option>
                            <option value="Alarife" >Alarife</option>
                            <option value="Capataz Mecanico " >Capataz Mecanico </option>
                            <option value="Electromecanico" >Electromecanico</option>
                            <option value="Jefe de Calidad" >Jefe de Calidad</option>
                            <option value="Jefe Topografía" >Jefe Topografía</option>
                            <option value="Rigger" >Rigger</option>
                            <option value="Operador Excavadora" >Operador Excavadora</option>
                            <option value="Profesional Oficina Técnica" >Profesional Oficina Técnica</option>
                            <option value="Supervisor Equipos y Maquinarias " >Supervisor Equipos y Maquinarias </option>
                          </select>
                        </div>
                        <div className="input-field">
                          <div className='label-custom'>Categoría</div>
                          <select id="Categoria" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="Directo" >Directo</option>
                            <option value="Indirecto" >Indirecto</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <div className='label-custom'>Jornada</div>
                          <select id="Jornada" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="7x7" >7x7</option>
                            <option value="5x2" >5x2</option>
                            <option value="4x3" >4x3</option>
                            <option value="14x14" >14x14</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <div className='label-custom'>Turno personal</div>
                          <select id="Turno_personal" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="Diurno" >Diurno</option>
                            <option value="Nocturno" >Nocturno</option>
                          </select>
                        </div>

                        <div className="input-field">
                          <div className='label-custom'>Estado Personal</div>
                          <select id="Estado_personal" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="Trabajando" >Trabajando</option>
                            <option value="Licencia" >Licencia</option>
                            <option value="Teletrabajo" >Teletrabajo</option>
                            <option value="Vacaciones" >Vacaciones</option>
                            <option value="Por Acreditar" >Por Acreditar</option>

                          </select>
                        </div>

                        <div className="input-field">
                          <div className='label-custom'>Área de trabajo</div>
                          <select id="Area_trabajo" class="browser-default custom-select" onChange={onChange} >
                            <option selected disabled></option>
                            <option value="Trabajando" >Muro Oeste</option>
                            <option value="DREN 1" >DREN 1</option>
                            <option value="DREN 2" >DREN 2</option>
                            <option value="Túnel" >Túnel</option>
                            <option value="Instalación de faena" >Instalación de faena</option>

                          </select>
                        </div>

                     
                        <div className="input-field">
                          <input type="number" id='Horas_trabajadas' name="Horas_trabajadas" className="materialize-textarea" onChange={onChange}></input>
                          <label htmlFor="content">Horas trabajadas</label>
                        </div>


                        <div className="row">
                          <div class="col s12 m6">
                            <button className="btn btn-per pink lighten-1" onSubmit={onSubmit} >Agregar</button>
                          </div>
                          <div class="col s12 m6">
                            <button className="btn btn-per lighten-1" onClick={closeModal}>Cerrar</button>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>

                </div>
              </div>
            )}

            <button className="btn btn-per lighten-1 marginbottom-1" onClick={openModal}>Agregar Personal</button>


          </div>

          <MaterialTable
            title=""
            columns={columns}
            data={data}
            actions={[
              {
                icon: 'assignment',
                tooltip: 'Visualizar Mantención',
                onClick: (event, rowData) => {

                  propsLocations.history.push({
                    pathname: "",
                    state: {
                      datos: rowData
                    }
                  });
                }
              }
            ]}

            options={{
              headerStyle: {
                backgroundColor: '#000',
                color: '#FFF',
                text: 'center',
                paddingLeft: '2rem'
              },
              filtering: true
            }}
          />
        </div>
      </div>
    </div>
  )
}


export default TablePesonalED
