import axios from 'axios';

class Database {
	constructor() {
		this.connectionURL = null;
		this.data = null;
	}

	setURL(url) {
		this.connectionURL = url;
	}

	async fetchData() {
		const response = await axios.get(this.connectionURL);
		this.data = response.data;
		return this.readData();
	}

	async readData() {
		return this.data;
	}
}

class DatabaseSingleton {
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
