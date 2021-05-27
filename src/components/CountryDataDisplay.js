import React, { useState } from 'react';
import MaterialTable from 'material-table';
import DatePicker from 'react-date-picker';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const CountryDataDisplay = ({ country, plot }) => {
	const [startDate, setStartDate] = useState(new Date(2019, 12, 1));
	const [endDate, setEndDate] = useState(new Date());

	const columns = [
		{ title: 'Date', field: 'dateString' },
		{ title: 'Total Cases', field: 'totalCases' },
		{ title: 'New Cases', field: 'newCases' },
		{ title: 'New Deaths', field: 'newDeaths' },
		{ title: 'Total Deaths', field: 'totalDeaths' },
		{ title: 'New tests', field: 'newTests' },
		{ title: 'Total tests', field: 'totalTests' },
		{ title: 'New Vacinations', field: 'newVacinations' },
		{ title: 'People vaccinated', field: 'peopleVaccinated' },
	];

	const renderNewCasesPlot = () => {
		if (plot.newCasesData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.newCasesData.x,
							y: plot.newCasesData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'New Cases' }}
				/>
			);
		}
	};

	const renderTotalCasesPlot = () => {
		if (plot.totalCasesData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.totalCasesData.x,
							y: plot.totalCasesData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'Total Cases' }}
				/>
			);
		}
	};

	const renderNewDeathsPlot = () => {
		if (plot.newDeathsData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.newDeathsData.x,
							y: plot.newDeathsData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'New Deaths' }}
				/>
			);
		}
	};

	const renderTotalDeathsPlot = () => {
		if (plot.totalDeathsData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.totalDeathsData.x,
							y: plot.totalDeathsData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'Total Deaths' }}
				/>
			);
		}
	};

	const renderNewTestsPlot = () => {
		if (plot.newTestsData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.newTestsData.x,
							y: plot.newTestsData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'New tests' }}
				/>
			);
		}
	};

	const renderTotalTestsPlot = () => {
		if (plot.totalTestsData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.totalTestsData.x,
							y: plot.totalTestsData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'Total tests' }}
				/>
			);
		}
	};

	const renderNewVaccinationsPlot = () => {
		if (plot.newVacinationsData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.newVacinationsData.x,
							y: plot.newVacinationsData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'New Vacinations' }}
				/>
			);
		}
	};

	const renderPeopleVaccinatedPlot = () => {
		if (plot.peopleVaccinatedData.y.find((element) => element !== undefined)) {
			return (
				<Plot
					data={[
						{
							x: plot.peopleVaccinatedData.x,
							y: plot.peopleVaccinatedData.y,
							type: 'histogram',
							marker: { color: 'blue' },
						},
					]}
					layout={{ width: '100%', title: 'People vaccinated' }}
				/>
			);
		}
	};

	const renderPlots = () => {
		if (!plot) {
			return;
		}
		plot.formatData(startDate, endDate);
		return (
			<div>
				{renderNewCasesPlot()}
				{renderTotalCasesPlot()}
				{renderNewDeathsPlot()}
				{renderTotalDeathsPlot()}
				{renderNewTestsPlot()}
				{renderTotalTestsPlot()}
				{renderNewVaccinationsPlot()}
				{renderPeopleVaccinatedPlot()}
			</div>
		);
	};

	const renderContinent = () => {
		if (!(country.continent === undefined)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>{'Continent: ' + country.continent}</h6>
				</div>
			);
		}
	};

	const renderPopulation = () => {
		if (!isNaN(country.population)) {
			return (
				<h6 style={{ padding: 5 }}>
					{' '}
					{'Population: ' + Math.floor(country.population)}
				</h6>
			);
		}
	};

	const renderPopulationDensity = () => {
		if (!isNaN(country.population_density)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'Population density: ' +
							Math.floor(country.population_density) +
							'/km^2'}
					</h6>
				</div>
			);
		}
	};

	const renderMedian = () => {
		if (!isNaN(country.median_age)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'Median age: ' + Math.floor(country.median_age)}
					</h6>
				</div>
			);
		}
	};

	const renderAged65 = () => {
		if (!isNaN(country.aged65)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'People aged 65+: ' + Math.floor(country.aged65) + '%'}
					</h6>
				</div>
			);
		}
	};

	const renderAged70 = () => {
		if (!isNaN(country.aged70)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'People aged 70+: ' + Math.floor(country.aged70) + '%'}
					</h6>
				</div>
			);
		}
	};

	const renderLifeExpectancy = () => {
		if (!isNaN(country.life_expectancy)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'Life expectancy: ' + country.life_expectancy}
					</h6>
				</div>
			);
		}
	};

	const renderGDP = () => {
		if (!isNaN(country.gdp_per_capita)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'GDP per capita: $' + Math.floor(country.gdp_per_capita)}
					</h6>
				</div>
			);
		}
	};

	const renderHDI = () => {
		if (!isNaN(country.human_development_index)) {
			return (
				<div>
					<h6 style={{ padding: 5 }}>
						{'HDI: ' + country.human_development_index}
					</h6>
				</div>
			);
		}
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: 20 }}>{country.name}</h1>
			{renderContinent()}
			{renderPopulation()}
			{renderPopulationDensity()}
			{renderMedian()}
			{renderAged65()}
			{renderAged70()}
			{renderLifeExpectancy()}
			{renderGDP()}
			{renderHDI()}

			<div style={{ padding: 20 }}>
				<h6>Start date: </h6>
				<DatePicker
					value={startDate}
					onChange={(value) => {
						setStartDate(value);
					}}
				/>
			</div>
			<div style={{ padding: 20 }}>
				<h6>End date: </h6>
				<DatePicker value={endDate} onChange={(value) => setEndDate(value)} />
			</div>
			<div style={{ padding: 20 }}>
				<MaterialTable
					columns={columns}
					data={country.getDataInGivenTimePeriod(startDate, endDate)}
					title={country.name + "'s coronavirus stats"}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>{renderPlots()}</div>
		</div>
	);
};

export default CountryDataDisplay;
