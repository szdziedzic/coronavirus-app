class Plot {
	constructor() {
		this.rawData = null;
		this.newCasesData = {
			x: [],
			y: [],
		};
		this.totalCasesData = {
			x: [],
			y: [],
		};
		this.newTestsData = {
			x: [],
			y: [],
		}
		this.totalTestsData = {
			x: [],
			y: [],
		}
		this.newDeathsData = {
			x: [],
			y: [],
		}
		this.totalDeathsData = {
			x: [],
			y: [],
		}
		this.newVacinationsData = {
			x: [],
			y: [],
		};
		this.peopleVaccinatedData = {
			x: [],
			y: [],
		}
		this.countryName = null;
	}

	setCountryName(countryName) {
		this.countryName = countryName;
	}

	setRawData(countryData) {
		this.rawData = countryData;
		this.formatData(false, false);
	}

	formatData(startDate, endDate) {
		this.totalCasesData.x = [];
		this.newCasesData.x = [];
		this.newCasesData.y = [];
		this.totalCasesData.y = [];
		this.newTestsData.x = [];
		this.newTestsData.y = [];
		this.newVacinationsData.x = [];
		this.newVacinationsData.y = [];
		this.peopleVaccinatedData.x = [];
		this.peopleVaccinatedData.y = [];
		this.newDeathsData.x = [];
		this.newDeathsData.y = [];
		this.totalDeathsData.x = [];
		this.totalDeathsData.y = [];
		this.totalTestsData.x = [];
		this.totalTestsData.y = [];
		
		if (!startDate || !endDate) {
			this.rawData.forEach(({ dateString, newCases, totalCases, newVacinations, peopleVaccinated, newTests, newDeaths, totalDeaths, totalTests }) => {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newVacinationsData.x.push(dateString);
				this.newTestsData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.totalCasesData.y.push(totalCases);
				this.newTestsData.y.push(newTests);
				this.newVacinationsData.y.push(newVacinations);
				this.peopleVaccinatedData.x.push(dateString);
				this.peopleVaccinatedData.y.push(peopleVaccinated);
				this.newDeathsData.x.push(dateString);
				this.newDeathsData.y.push(newDeaths);
				this.totalDeathsData.x.push(dateString);
				this.totalDeathsData.y.push(totalDeaths);
				this.totalTestsData.x.push(dateString);
				this.totalTestsData.y.push(totalTests);
			});
		}
		this.rawData.forEach(({ dateString, newCases, totalCases, newVacinations, peopleVaccinated, newTests, newDeaths, totalDeaths, totalTests }) => {
			const date = new Date(dateString);
			if (date >= startDate && date <= endDate) {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newVacinationsData.x.push(dateString);
				this.newTestsData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.newTestsData.y.push(newTests);
				this.totalCasesData.y.push(totalCases);
				this.newVacinationsData.y.push(newVacinations);
				this.peopleVaccinatedData.x.push(dateString);
				this.peopleVaccinatedData.y.push(peopleVaccinated);
				this.newDeathsData.x.push(dateString);
				this.newDeathsData.y.push(newDeaths);
				this.totalDeathsData.x.push(dateString);
				this.totalDeathsData.y.push(totalDeaths);
				this.totalTestsData.x.push(dateString);
				this.totalTestsData.y.push(totalTests);
			}
		});
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

export default Plot;
