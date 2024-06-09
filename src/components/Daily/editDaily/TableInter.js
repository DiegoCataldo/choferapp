import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';

function TableInter() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Área de trabajo', field: 'area' ,lookup: { 1: 'area1', 2: 'area2', 3:'area3' }  },
    { title: 'Categoria', field: 'Categoria' ,lookup: { 1: 'Seguridad', 2: 'Equipos', 3:'Ingeniería' }},
    { title: 'Subcategoría', field: 'Subcategoria' ,lookup: { 1: 'Accidente', 2: 'Incidente', 3:'Condición Insegura' } },
    { title: 'Responsable', field: 'Responsable' ,lookup: { 1: 'Empresa Contratista', 2: 'Codelco', 3:'Otro' }  },
    { title: 'Hora Inicio',field: 'hora_inicio'},
    { title: 'Hora Fin',field: 'hora_fin' },
    { title: 'Duración en Horas', field: 'duracion', type: 'numeric' },
    { title: 'Cantidad Personal Involucrado', field: 'cant_personal', type: 'numeric' },
    { title: 'HH Totales', field: 'hh_totales', type: 'numeric' },
    { title: 'HM Totales', field: 'hm_totales', type: 'numeric' },

  ]);

  const [data, setData] = useState([
    { area: 1, Categoria: 1, Subcategoria: 1, Responsable: 2, hora_inicio: '10:00 AM' , hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 },
    { area: 2, Categoria: 2, Subcategoria: 1, Responsable: 2, hora_inicio: '10:00 AM', hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 },
    { area: 2, Categoria: 3, Subcategoria: 2 , Responsable: 1, hora_inicio: '10:00 AM', hora_fin: '04:00 PM', duracion: 6, cant_personal: 8, hh_totales: 48, hm_totales: 0 },



  ]);

  return (
    <MaterialTable
      title="Interferencias"
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

export default TableInter
