import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ countriesData }) => {
	const content = () => {
		if (countriesData == null) {
			return <div>Loading...</div>;
		} else if (countriesData === false) {
			return (
				<div>
					Can not connect to the database! Check your Internet connection!
				</div>
			);
		} else {
			return (
				<div style={{ textAlign: 'center' }}>
					<div className="list-group">
						{countriesData.map((country) => {
							return (
								<Link
									to={'/countries/' + country.name}
									className="list-group-item list-group-item-action"
									key={country.name}
								>
									{country.name}
								</Link>
							);
						})}
					</div>
				</div>
			);
		}
	};

	return (
		<div>
			<div style={{ textAlign: 'center', padding: 50 }}>
				<h1>Coronavirus App</h1>
			</div>

			<div>{content()}</div>
		</div>
	);
};

export default Home;
