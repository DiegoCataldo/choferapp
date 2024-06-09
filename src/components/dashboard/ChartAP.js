import React from 'react'
import Chart from "react-apexcharts";

const ChartColumn = ({ optionsColumn, seriesColumn }) => {
	return (
		<div className="card z-depth-0">
			<div className="card-content">
				<h3 className="card-header-per text-center text-white light-blue-text text-darken-4  padding-bottom-1 margin-bottom-1">Tiempo Promedio Aprobadores </h3>
				<div className="app">
					<div className="row m-bottom-0">
						<div className="mixed-chart col-md-12 elemento">
							<div className="col-12 column-chart">
								<Chart
									options={optionsColumn}
									series={seriesColumn}
									type="bar"
									width="100%"
								/>
							</div>
						</div>
					</div>
					<div class="widget-content">
						<div class="widget-content-outer">
							<div class="widget-content-wrapper">
								<div class="widget-content-left pr-2 fsize-1">
									<div class="widget-numbers mt-0 fsize-12 text-warning">60%</div>
								</div>
								<div class="widget-content-right w-100">
									<div class="progress-bar-xs progress">
										<div class="progress-bar-60  progress-85" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
							<div class="widget-content-left fsize-1">
								<div class="grey-text opacity-6">Eficiencia</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}


export default ChartColumn