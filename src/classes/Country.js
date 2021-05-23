class Country {
	constructor() {
		this.name = null;
		this.rawData = null;
		this.data = null;
		this.continent = null;
		this.population = null;
	}

	setName(name) {
		this.name = name;
	}

	setRawData(rawData) {
		this.rawData = rawData;
		this.formatData();
	}

	formatData() {
		this.continent = this.rawData.continent;
		this.population = Math.floor(this.rawData.population);
		// Can add more country stats fields avaliable in db

		this.data = this.rawData.data.map(
			({
				date,
				total_cases,
				new_cases,
				total_cases_per_milion,
				new_cases_per_milion,
			}) => {
				return {
					date: new Date(date),
					totalCases: total_cases,
					newCases: new_cases,
					totalCasesPerMilion: total_cases_per_milion,
					newCasesPerMilion: new_cases_per_milion,
					dateString: date,
				};
			}
		);
	}
}

export default Country;
