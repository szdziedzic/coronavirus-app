import DatabaseSingleton from '../classes/Database';
import CountryFactory, { Country } from '../classes/Country';

const URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json';

const databaseSingleton = new DatabaseSingleton();

const database = databaseSingleton.getInstance(URL);

test('Database fetch data', async () => {
	expect(database.connectionURL).toBe(URL);
	const countryArray = await database.fetchData();
	expect(database.data).not.toBe(null);
	expect(countryArray.length).not.toBe(0);
	countryArray.forEach((country) => {
		expect(country).toBeInstanceOf(Country);
	});
});
