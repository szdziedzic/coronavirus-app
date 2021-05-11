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

	const content = () => {
		if (!countriesData) {
			return <div>Loading...</div>;
		} else {
			return (
				<div class="list-group">
					{countriesData.map((country) => {
						return (
							<a href="#" class="list-group-item list-group-item-action">
								{country.name}
							</a>
						);
					})}
				</div>
			);
		}
	};

	return (
		<div>
			<h1>Coronavirus App</h1>
			<div>{content()}</div>
		</div>
	);
};

export default App;
