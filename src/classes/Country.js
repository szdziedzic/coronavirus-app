class Country {
	constructor() {
		this.name = null;
		this.rawData = null;
	}

	setName(name) {
		this.name = name;
	}

	setRawData(rawData) {
		this.rawData = rawData;
		this.formatData();
	}

	formatData() {}
}

export default Country;
