import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryDataDisplay from './CountryDataDisplay';

const CountryDetails = ({ getCountryByName }) => {
	const { name } = useParams();
	const [country, setCountry] = useState(null);

	useEffect(() => {
		if (country == null) {
			setCountry(getCountryByName(name));
		}
	}, [country, getCountryByName, name]);

	const content = () => {
		if (country === null) {
			return <div>Loading...</div>;
		} else if (country === false) {
			return <h1>404</h1>;
		} else {
			return <CountryDataDisplay country={country} />;
		}
	};

	return <div>{content()}</div>;
};

export default CountryDetails;
