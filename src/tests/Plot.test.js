import Plot from '../classes/Plot';
import CountryFactory from '../classes/Country';

const data = {
	continent: 'Asia',
	location: 'Afghanistan',
	population: 38928341.0,
	population_density: 54.422,
	median_age: 18.6,
	aged_65_older: 2.581,
	aged_70_older: 1.337,
	gdp_per_capita: 1803.987,
	cardiovasc_death_rate: 597.029,
	diabetes_prevalence: 9.59,
	handwashing_facilities: 37.746,
	hospital_beds_per_thousand: 0.5,
	life_expectancy: 64.83,
	human_development_index: 0.511,
	data: [
		{
			date: '2020-02-24',
			total_cases: 1.0,
			new_cases: 1.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.026,
			stringency_index: 8.33,
		},
		{
			date: '2020-02-25',
			total_cases: 1.0,
			new_cases: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			stringency_index: 8.33,
		},
		{
			date: '2020-02-26',
			total_cases: 1.0,
			new_cases: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			stringency_index: 8.33,
		},
		{
			date: '2020-02-27',
			total_cases: 1.0,
			new_cases: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			stringency_index: 8.33,
		},
		{
			date: '2020-02-28',
			total_cases: 1.0,
			new_cases: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			stringency_index: 8.33,
		},
		{
			date: '2020-02-29',
			total_cases: 1.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.143,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.004,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 8.33,
		},
		{
			date: '2020-03-01',
			total_cases: 1.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.143,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.004,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-02',
			total_cases: 1.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.0,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.026,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.0,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-03',
			total_cases: 2.0,
			new_cases: 1.0,
			new_cases_smoothed: 0.143,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.051,
			new_cases_per_million: 0.026,
			new_cases_smoothed_per_million: 0.004,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-04',
			total_cases: 4.0,
			new_cases: 2.0,
			new_cases_smoothed: 0.429,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.103,
			new_cases_per_million: 0.051,
			new_cases_smoothed_per_million: 0.011,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-05',
			total_cases: 4.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.429,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.103,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.011,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-06',
			total_cases: 4.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.429,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.103,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.011,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-07',
			total_cases: 4.0,
			new_cases: 0.0,
			new_cases_smoothed: 0.429,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.103,
			new_cases_per_million: 0.0,
			new_cases_smoothed_per_million: 0.011,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-08',
			total_cases: 5.0,
			new_cases: 1.0,
			new_cases_smoothed: 0.571,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.128,
			new_cases_per_million: 0.026,
			new_cases_smoothed_per_million: 0.015,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-09',
			total_cases: 7.0,
			new_cases: 2.0,
			new_cases_smoothed: 0.857,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.18,
			new_cases_per_million: 0.051,
			new_cases_smoothed_per_million: 0.022,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-10',
			total_cases: 8.0,
			new_cases: 1.0,
			new_cases_smoothed: 0.857,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.206,
			new_cases_per_million: 0.026,
			new_cases_smoothed_per_million: 0.022,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
		{
			date: '2020-03-11',
			total_cases: 11.0,
			new_cases: 3.0,
			new_cases_smoothed: 1.0,
			new_deaths_smoothed: 0.0,
			total_cases_per_million: 0.283,
			new_cases_per_million: 0.077,
			new_cases_smoothed_per_million: 0.026,
			new_deaths_smoothed_per_million: 0.0,
			stringency_index: 27.78,
		},
	],
};

const countryFactory = new CountryFactory();

test('Plot test', () => {
	const country = countryFactory.getInstance();
	country.setName(data.location);
	country.setRawData(data);
	const plot = new Plot();
	plot.setCountryName(country.name);
	plot.setRawData(country.data);
	expect(plot.countryName).toBe(country.name);
	expect(plot.rawData).toBe(country.data);
	const startDate = new Date('2020-03-03');
	const endDate = new Date('2020-03-10');
	plot.formatData(startDate, endDate);
	expect(plot.newCasesData.x.length).toBe(8);
	expect(new Date(plot.newCasesData.x[0]).toString()).toBe(
		startDate.toString()
	);
	expect(new Date(plot.newCasesData.x[7]).toString()).toBe(endDate.toString());
	expect(plot.newCasesData.y.length).toBe(8);
	expect(plot.newCasesData.y[0]).toBe(1);
});
