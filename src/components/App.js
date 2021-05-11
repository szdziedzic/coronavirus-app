import DatabaseSingleton from '../classes/Database';
import React, { useState, useEffect } from 'react';

const databaseSingleton = new DatabaseSingleton();

const URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

const App = () => {
	const database = databaseSingleton.getInstance(URL);
	const [data, setData] = useState(null);

	useEffect(() => {
		if (!data) {
			fetchData();
		}
	});

	const getCountriesNames = (data) => {
		const keys = Object.keys(data);
		let countries = [];
		let countriesStr = '';
		for (let i in keys) {
			countries.push(data[keys[i]].location);
			countriesStr += data[keys[i]].location + '  ';
		}
		//return countries;
		return countriesStr;
	};

	const fetchData = () => {
		database.fetchData().then((data) => {
			setData(data);
		});
	};

	if (!data) {
		return <div>{'data: ' + data}</div>;
	} else {
		return <div>{'data: ' + getCountriesNames(data)}</div>;
	}
};

export default App;
