import React from 'react'
import Chart from "react-apexcharts";

const ChartArea = ({ optionsColumn, seriesColumn }) => {
	return (
		<div className="card z-depth-0">
			<div className="card-content">
				<h3 className="card-header-per text-center text-white light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1">Evolución Tiempo por Área  </h3>
				<div className="app">
					<div className="row m-bottom-0">
						<div className="mixed-chart col-md-12 elemento">
							<div className="col-12 column-chart">
								<Chart
									options={optionsColumn}
									series={seriesColumn}
									type="line"
									width="100%"
								/>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	)
}


export default ChartArea