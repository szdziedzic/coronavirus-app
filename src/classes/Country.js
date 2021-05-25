class Country { //interface implemented for Abstract factory pattern
	constructor() {
		this.name = null;
		this.rawData = null;
		this.data = null;
		this.continent = null;
		this.population = null;
		this.population_density = null;
		this.median_age = null;
		this.life_expectancy = null;
		this.aged65 = null;
		this.aged70 = null;
		this.gdp_per_capita = null;
		this.human_development_index = null;

	}

	setName(name) {
		this.name = name;
	}

	setRawData(rawData) {
		this.rawData = rawData;
		this.formatData();
	}

	formatData() {}

	getDataInGivenTimePeriod(startDate, endDate) {}
}

class CountryImplementation extends Country {
	formatData() {
		this.continent = this.rawData.continent;
		this.population = Math.floor(this.rawData.population);
		this.population_density = Math.floor(this.rawData.population_density);
		this.median_age = Math.floor(this.rawData.median_age);
		this.aged65 = this.rawData.aged_65_older;
		this.aged70 = this.rawData.aged_70_older;
		this.gdp_per_capita = Math.floor(this.rawData.gdp_per_capita);
		this.life_expectancy = Math.floor(this.rawData.life_expectancy);
		this.human_development_index = this.rawData.human_development_index;

		this.data = this.rawData.data.map(
			({
				date,
				total_cases,
				new_cases,
				total_cases_per_milion,
				new_vaccinations,
				people_vaccinated,
				new_cases_per_milion,
				new_tests,
				new_deaths,
				total_deaths,
				total_tests
				
			}) => {
				return {
					date: new Date(date),
					totalCases: total_cases,
					newCases: new_cases,
					totalCasesPerMilion: total_cases_per_milion,
					newCasesPerMilion: new_cases_per_milion,
					newVacinations: new_vaccinations,
					peopleVaccinated: people_vaccinated,
					newTests: new_tests,
					dateString: date,
					newDeaths: new_deaths,
					totalDeaths: total_deaths,
					totalTests: total_tests,
				};
			}
		);
	}

	getDataInGivenTimePeriod(startDate, endDate) {
		return this.data.filter((item) => {
			if (item.date >= startDate && item.date <= endDate) {
				return true;
			} else {
				return false;
			}
		});
	}
}

class CountryFactory {
	getInstance() {
		return new CountryImplementation();
	}
}

export default CountryFactory;
