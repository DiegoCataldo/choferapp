import React from 'react'
import moment from 'moment'
import MaterialTable from 'material-table';

import "./DailyEnviado.css";


function DailyEnviado() {
  
  return (
<html>
  <head>
  </head>

    <body className="bodyD" >
      <div className="cardD">
      <div style={{borderRadius: '200px', height:'200px', width:'200px', background: '#F8FAF5', margin:'0 auto'}}>
        <i className="checkmark iD">✓</i>
      </div>
        <h1 className="h1D"  style={{ marginBottom: '50px'}}>Completado</h1> 
        <p  className="pD">El Daily Report ha sido enviado Correctamente</p>
        <p className="pD" style={{color: '#959595', fontSize: '17px' }}>CODELCO procederá a revisar la información</p>

      </div>
    </body>
</html>
  )
}

export default DailyEnviado
