import axios from 'axios';
import CountryFactory from './Country';

class Database {
	constructor() {
		this.connectionURL = null;
		this.data = null;
		this.countryFactory = new CountryFactory();
	}

	setURL(url) {
		this.connectionURL = url;
	}

	async fetchData() {
		const response = await axios.get(this.connectionURL);
		this.data = response.data;
		return this.getCountriesArray();
	}

	getCountriesArray() {
		const keys = Object.keys(this.data);
		let countries = [];
		for (let i in keys) {
			let country = this.countryFactory.getInstance();
			country.setName(this.data[keys[i]].location);
			country.setRawData(this.data[keys[i]]);
			countries.push(country);
		}
		return countries;
	}
}

class DatabaseSingleton {
	//Singleton pattern
	static instatnce = null;

	getInstance(url) {
		if (this.instatnce == null) {
			this.instatnce = new Database();
		}
		this.instatnce.setURL(url);
		return this.instatnce;
	}
}

export default DatabaseSingleton;
