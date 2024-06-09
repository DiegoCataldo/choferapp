import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';


const TableTiemposUsuarios = (props) => {
  const { columns, data, propsUrg, } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
        <h3 className="card-header-per text-center text-white light-blue-text text-darken-4  padding-bottom-1 m-bottom-1 margin-bottom-1">Detalle por Usuario </h3>
          <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                       

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

export default TableTiemposUsuarios
