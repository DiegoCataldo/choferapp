import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';
import { deleteUbicacion } from '../../../store/actions/projectActions'





const TableMaqED = (props) => {
  const { columns, data, propsLocations, } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
        <button className="btn btn-per lighten-1 marginbottom-1" >Agregar Maquinaria</button>
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
                            filtering:true
                        }}
                    />
        </div>
      </div>
    </div>
  )
}


export default TableMaqED
