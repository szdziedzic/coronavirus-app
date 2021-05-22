import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
			return <div>Error</div>;
		} else {
			return <h1>{country.name}</h1>;
		}
	};

	return <div>{content()}</div>;
};

export default CountryDetails;
