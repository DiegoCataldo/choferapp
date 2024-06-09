import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';

function TablePersonalED() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'RUT', field: 'RUT' },
    { title: 'Nombre', field: 'Nombre', initialEditValue: 'initial edit value' },
    { title: 'Género', field: 'Genero' ,lookup: { 1: 'M', 2: 'F' } },
    { title: 'Cargo',field: 'Cargo',lookup: { 1: 'Operador Excavadora', 2: 'Electromecanico', 3:'Jefe P&C', 4:'Operador Grua' } },
    { title: 'Categoría',field: 'Categoria',lookup: { 1: 'Directo', 2: 'Indirecto' } },
    { title: 'Jornada',field: 'Jornada',lookup: { 1: '7x7', 2: '14x14', 3:'5x2', 4:'4x3' } },
    { title: 'Turno Personal',field: 'Turno',lookup: { 1: 'Diurno', 2: 'Nocturno' } },
    { title: 'Estado Personal',field: 'Estado',lookup: { 1: 'Trabajando', 2: 'Licencia', 3:'Descanso', 4:'Finiquitado' } },
    { title: 'Área de trabajo',field: 'Area',lookup: { 1: 'Area1', 2: 'Area2', 3:'Area3', 4:'Area4' } },
    { title: 'Horas Trabajadas', field: 'hh', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    { RUT: '19.943.094-2', Nombre: 'Pedro Perez', Genero:1, Cargo: 1, Categoria: 1, Jornada: 1, Turno: 1, Estado: 1, Area: 1, hh: 11 },
    { RUT: '20.943.094-2', Nombre: 'Francisco Nuñez', Genero:1, Cargo: 2, Categoria: 2, Jornada: 2, Turno: 2, Estado: 3, Area: 2, hh: 0 },
    { RUT: '21.943.094-2', Nombre: 'Carlos Valdivia', Genero:1, Cargo: 3, Categoria: 1, Jornada: 1, Turno: 1, Estado: 1, Area: 1, hh: 11 },

  ]);

  return  (
<div>
<div className='relative' ><button className="btn btn-per btn-precarga btn-info btn-rounded"> Precargar </button></div>
    <MaterialTable
      title="Personal"
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

    
</div>
  )
}

export default TablePersonalED
