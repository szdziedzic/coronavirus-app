import React from 'react';
import MaterialTable from 'material-table';

const CountryDataDisplay = ({ country }) => {
	const columns = [
		{ title: 'Date', field: 'dateString' },
		{ title: 'Total Cases', field: 'totalCases' },
		{ title: 'New Cases', field: 'newCases' },
	];

	return (
		<div>
			<h1 style={{ textAlign: 'center', padding: 20 }}>{country.name}</h1>
			<h6 style={{ padding: 5 }}>{'Continent: ' + country.continent}</h6>
			<h6 style={{ padding: 5 }}>
				{'Population: ' + Math.floor(country.population)}
			</h6>
			{console.log(country.data)}
			<div style={{ padding: 20 }}>
				<MaterialTable
					columns={columns}
					data={country.data}
					title={country.name + "'s coronavirus stats"}
				/>
			</div>
		</div>
	);
};

export default CountryDataDisplay;
