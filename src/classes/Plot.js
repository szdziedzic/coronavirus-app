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
		if (!startDate || !endDate) {
			this.rawData.forEach(({ dateString, newCases, totalCases }) => {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.totalCasesData.y.push(totalCases);
			});
		}
		this.rawData.forEach(({ dateString, newCases, totalCases }) => {
			const date = new Date(dateString);
			if (date >= startDate && date <= endDate) {
				this.totalCasesData.x.push(dateString);
				this.newCasesData.x.push(dateString);
				this.newCasesData.y.push(newCases);
				this.totalCasesData.y.push(totalCases);
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
