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
		this.newVacinationsData.x = [];
		this.newVacinationsData.y = [];
		this.peopleVaccinatedData.x = [];
		this.peopleVaccinatedData.y = [];
		if (!startDate || !endDate) {
			this.rawData.forEach(({ dateString, newCases, totalCases, newVacinations, peopleVaccinated }) => {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newVacinationsData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.totalCasesData.y.push(totalCases);
				this.newVacinationsData.y.push(newVacinations);
				this.peopleVaccinatedData.x.push(dateString);
				this.peopleVaccinatedData.y.push(peopleVaccinated);
			});
		}
		this.rawData.forEach(({ dateString, newCases, totalCases, newVacinations, peopleVaccinated }) => {
			const date = new Date(dateString);
			if (date >= startDate && date <= endDate) {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newVacinationsData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.totalCasesData.y.push(totalCases);
				this.newVacinationsData.y.push(newVacinations);
				this.peopleVaccinatedData.x.push(dateString);
				this.peopleVaccinatedData.y.push(peopleVaccinated);
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
