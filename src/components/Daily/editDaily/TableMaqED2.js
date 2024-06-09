import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';

function TableMaqED() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Patente', field: 'Patente' },
    { title: 'Tipo de Equipo', field: 'tipo_equipo' ,lookup: { 1: 'Retroexcavadora', 2: 'Camion Tolva', 3:'Camioneta' } },
    { title: 'Marca', field: 'Marca' },
    { title: 'Modelo Equipo', Marca: 'Modelo' },
    { title: 'Turno Equipo',field: 'Turno_equipo',lookup: { 1: 'Diurno', 2: 'Nocturno' } },
    { title: 'Operador Presente',field: 'Operador_presente',lookup: { 1: 'Si', 2: 'No'} },
    { title: 'Horas No Operativas', field: 'hh_no', type: 'numeric' },
    { title: 'Horas Operativas', field: 'hh_o', type: 'numeric' },
    { title: 'Horas Mantenimiento', field: 'hh_m', type: 'numeric' },
    { title: 'Horas Fuera Servicio', field: 'hh_F', type: 'numeric' },

  ]);

  const [data, setData] = useState([
    { Patente: 'JV-S1', tipo_equipo: 1, Marca:'Marca1', Modelo: 'Modelo1', Turno_equipo: 1, Operador_presente: 1, hh_no: 3, hh_o: 8, hh_m: 0, hh_F: 0 },
    { Patente: 'JV-S3', tipo_equipo: 2, Marca:'Marca1', Modelo: 'Modelo1', Turno_equipo: 2, Operador_presente: 2, hh_no: 11, hh_o: 0, hh_m: 0, hh_F: 0 },
    { Patente: 'JV-S4', tipo_equipo: 3, Marca:'Marca1', Modelo: 'Modelo1', Turno_equipo: 1, Operador_presente: 1, hh_no: 0, hh_o: 0, hh_m: 11, hh_F: 0 },



  ]);

  return (
    <MaterialTable
      title="Maquinarias"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
      options={{
        headerStyle: {
            backgroundColor: '#000',
            color: '#FFF',
            text: 'center',
            paddingLeft: '2rem'
        },
        filtering:true
    }}
    />
  )
}

export default TableMaqED
