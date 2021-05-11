import DatabaseSingleton from '../classes/Database';
import React, { useState, useEffect } from 'react';

const databaseSingleton = new DatabaseSingleton();

const URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

const App = () => {
	const database = databaseSingleton.getInstance(URL);
	const [countriesData, setCountriesData] = useState(null);

	useEffect(() => {
		if (!countriesData) {
			database.fetchData().then((data) => {
				setCountriesData(data);
			});
		}
	});

	const getCountriesNames = () => {
		let str = '';
		countriesData.forEach((country) => (str += country.name + ' '));
		return str;
	};

	if (!countriesData) {
		return <div>{'data: ' + countriesData}</div>;
	} else {
		return <div>{'data: ' + getCountriesNames()}</div>;
	}
};

export default App;
