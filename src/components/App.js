import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Home from './Home';
import DatabaseSingleton from '../classes/Database';

const databaseSingleton = new DatabaseSingleton();

const URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

const App = () => {
	const [countriesData, setCountriesData] = useState(null);
	const database = databaseSingleton.getInstance(URL);

	useEffect(() => {
		document.title = "Coronavirus App"
		if (!countriesData) {
			database.fetchData().then((data) => {
				setCountriesData(data);
			});
		}
	});

	const getCountryByName = (name) => {
		if (!countriesData) {
			return null;
		}

		const country = countriesData.find(
			(currCountry) => currCountry.name === name
		);

		if (!country) {
			return false;
		}

		return country;
	};

	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					component={() => <Home countriesData={countriesData} />}
				/>
				<Route exact path="/countries/:name">
					<CountryDetails getCountryByName={getCountryByName} />
				</Route>
				<Route>
					<h1>404</h1>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
