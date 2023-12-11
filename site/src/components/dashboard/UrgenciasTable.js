import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';


const UrgenciasTable = (props) => {
  const { columns, data, propsUrg, } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <h3 className="card-header-per text-center light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1">Urgencias</h3>
          <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        actions={[
                            {
                                icon: 'assignment',
                                tooltip: 'Visualizar Mantención',
                                onClick: (event, rowData) => {
                                  
                                  propsUrg.history.push({
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

export default UrgenciasTable
