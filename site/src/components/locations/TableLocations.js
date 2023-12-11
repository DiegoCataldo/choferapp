import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';
import { deleteUbicacion } from '../../store/actions/projectActions'



const TableLocations = (props) => {
  const { columns, data, propsLocations, } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <h3 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1">Ubicaciones</h3>
          <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        actions={[
                          {
                              icon: 'delete',
                              tooltip: 'Eliminar Ubicación',
                              onClick: (event, rowData) => {
                                  var txt;
                                  var r = window.confirm("¿Estás seguro que deseas eliminar esta ubicación?");
                                  if (r == true) {
                                    propsLocations.deleteUbicacion(rowData);
                                  /*  propsLocations.history.push({
                                          pathname: '/gestionLocations'
                                      }); */
                                  } 
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


export default TableLocations
