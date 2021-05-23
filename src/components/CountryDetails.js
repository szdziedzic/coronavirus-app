import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDataDisplay from './CountryDataDisplay';
import Plot from '../classes/Plot';

const CountryDetails = ({ getCountryByName }) => {
	const { name } = useParams();
	const [country, setCountry] = useState(null);
	const [plot, setPlot] = useState(null);

	useEffect(() => {
		if (country == null) {
			setCountry(getCountryByName(name));
		} else if (plot == null && country !== false) {
			const plot = new Plot();
			plot.setCountryName(country.name);
			plot.setRawData(country.data);
			setPlot(plot);
		}
	}, [country, getCountryByName, name, plot]);

	const content = () => {
		if (country === null) {
			return <div>Loading...</div>;
		} else if (country === false) {
			return <h1>404</h1>;
		} else {
			return <CountryDataDisplay country={country} plot={plot} />;
		}
	};

	return <div>{content()}</div>;
};

export default CountryDetails;
