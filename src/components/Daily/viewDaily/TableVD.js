import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';
import { deleteUbicacion } from '../../../store/actions/projectActions'



const TableVD = (props) => {
  const { columns, data, propsLocations, } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
        <h4 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1 h4-v1">Daily Reports</h4>

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
                                      pathname: "editDaily",
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


export default TableVD
