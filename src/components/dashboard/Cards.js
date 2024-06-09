import React from 'react'
import moment from 'moment'

const Cards = (props) => {

  return (
    <div className="row">

    <div className="col s12 m3">

      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 css-1ffcg8x-MuiGrid-root extra1">
        <div class="MuiBox-root css-rwss59"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1h15ts-MuiPaper-root-MuiCard-root">
          <div class="MuiBox-root css-p6siio">
            <div class="MuiBox-root css-79or14"><span class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wh7jmd-MuiIcon-root" aria-hidden="true">D</span>
            </div>
            <div class="MuiBox-root css-8k5edi">
              <span class="MuiTypography-root MuiTypography-button css-znq6tb-MuiTypography-root">Dailys Totales</span>
              <h4 class="MuiTypography-root MuiTypography-h4 css-1tvc6i6-MuiTypography-root">60</h4>
            </div></div><div class="MuiDivider-root MuiDivider-fullWidth css-17li347-MuiDivider-root">
          </div>
          <div class="MuiBox-root css-bln954">
            <p class="MuiTypography-root  css-3iprzi-MuiTypography-root ">
              <span class="MuiTypography-root MuiTypography-button css-15ti2lr-MuiTypography-root">Presionar aquí</span>&nbsp;Para ver detalle</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="col s12 m3">
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 css-1ffcg8x-MuiGrid-root extra1">
        <div class="MuiBox-root css-rwss59"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1h15ts-MuiPaper-root-MuiCard-root">
          <div class="MuiBox-root css-p6siio">
            <div class="MuiBox-root css-79or14"><span class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wh7jmd-MuiIcon-root" aria-hidden="true">A</span>
            </div>
            <div class="MuiBox-root css-8k5edi">
              <span class="MuiTypography-root MuiTypography-button css-znq6tb-MuiTypography-root">A la espera contratista</span>
              <h4 class="MuiTypography-root MuiTypography-h4 css-1tvc6i6-MuiTypography-root">20</h4>
            </div></div><div class="MuiDivider-root MuiDivider-fullWidth css-17li347-MuiDivider-root">
          </div>
          <div class="MuiBox-root css-bln954">
            <p class="MuiTypography-root css-3iprzi-MuiTypography-root">
              <span class="MuiTypography-root MuiTypography-button css-15ti2lr-MuiTypography-root">+55%</span>&nbsp; Que la semana pasada</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div className="col s12 m3">
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 css-1ffcg8x-MuiGrid-root extra1">
        <div class="MuiBox-root css-rwss59"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1h15ts-MuiPaper-root-MuiCard-root">
          <div class="MuiBox-root css-p6siio">
            <div class="MuiBox-root css-79or14"><span class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wh7jmd-MuiIcon-root" aria-hidden="true">R</span>
            </div>
            <div class="MuiBox-root css-8k5edi">
              <span class="MuiTypography-root MuiTypography-button css-znq6tb-MuiTypography-root">Revisión Pendiente</span>
              <h4 class="MuiTypography-root MuiTypography-h4 css-1tvc6i6-MuiTypography-root">30</h4>
            </div></div><div class="MuiDivider-root MuiDivider-fullWidth css-17li347-MuiDivider-root">
          </div>
          <div class="MuiBox-root css-bln954">
            <p class="MuiTypography-root css-3iprzi-MuiTypography-root">
              <span class="MuiTypography-root MuiTypography-button css-15ti2lr-MuiTypography-root">+15%</span>&nbsp; Que la semana pasada</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div className="col s12 m3">
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-3 css-1ffcg8x-MuiGrid-root extra1">
        <div class="MuiBox-root css-rwss59"><div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1h15ts-MuiPaper-root-MuiCard-root">
          <div class="MuiBox-root css-p6siio">
            <div class="MuiBox-root css-79or14"><span class="material-icons-round notranslate MuiIcon-root MuiIcon-fontSizeMedium css-wh7jmd-MuiIcon-root" aria-hidden="true">P</span>
            </div>
            <div class="MuiBox-root css-8k5edi">
              <span class="MuiTypography-root MuiTypography-button css-znq6tb-MuiTypography-root">APROBACIÓN PENDIENTE</span>
              <h4 class="MuiTypography-root MuiTypography-h4 css-1tvc6i6-MuiTypography-root">10</h4>
            </div></div><div class="MuiDivider-root MuiDivider-fullWidth css-17li347-MuiDivider-root">
          </div>
          <div class="MuiBox-root css-bln954">
            <p class="MuiTypography-root css-3iprzi-MuiTypography-root">
              <span class="MuiTypography-root MuiTypography-button css-15ti2lr-MuiTypography-root">+30%</span>&nbsp; Que la semana pasada</p>
          </div>
        </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Cards