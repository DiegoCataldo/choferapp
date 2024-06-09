import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';

function TableAvances() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Área de trabajo', field: 'area' ,lookup: { 1: 'area1', 2: 'area2', 3:'area3' }  },
    { title: 'IWP', field: 'IWP' ,},
    { title: 'Hora Inicio',field: 'hora_inicio'},
    { title: 'Hora Fin',field: 'hora_fin' },
    { title: 'Duración en Horas', field: 'duracion', type: 'numeric' },
    { title: 'Cantidad Personal Involucrado', field: 'cant_personal', type: 'numeric' },
    { title: 'HH Totales', field: 'hh_totales', type: 'numeric' },
    { title: 'HM Totales', field: 'hm_totales', type: 'numeric' },
    { title: 'Descripcion', field: 'Descripcion' },

  ]);

  const [data, setData] = useState([
    { area: 1, IWP: 1, Subcategoria: 1, hora_inicio: '10:00 AM' , hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 , Descripcion: 'Trabajos Habilitación de area'},
    { area: 2, IWP: 2, Subcategoria: 1, hora_inicio: '10:00 AM', hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 , Descripcion: 'Trabajos Instalación señaletica'},
    { area: 2, IWP: 3, Subcategoria: 2 , hora_inicio: '10:00 AM', hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 , Descripcion: 'Mejoramiento de caminos'},



  ]);

  return (
    <MaterialTable
      title="Avances y Actividades"
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

export default TableAvances
