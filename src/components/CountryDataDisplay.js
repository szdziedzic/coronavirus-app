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
	];

	const renderPlots = () => {
		if (!plot) {
			return;
		}
		plot.formatData(startDate, endDate);
		return (
			<div>
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
			</div>
		);
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: 20 }}>{country.name}</h1>
			<h6 style={{ padding: 20 }}>{'Continent: ' + country.continent}</h6>
			<h6 style={{ padding: 20 }}>{'Population: ' + country.population}</h6>
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
