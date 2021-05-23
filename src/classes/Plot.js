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
		this.formatData();
	}

	formatData() {
		this.rawData.forEach(({ dateString, newCases, totalCases }) => {
			this.totalCasesData.x.push(dateString);
			this.newCasesData.x.push(dateString);
			this.newCasesData.y.push(newCases);
			this.totalCasesData.y.push(totalCases);
		});
	}
}

export default Plot;
