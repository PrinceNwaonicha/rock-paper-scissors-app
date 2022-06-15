import axios from 'axios';

export default axios.create({
	baseURL: "https://rock-paper-v1.herokuapp.com/api",
	//timeout: 10000,
	headers: {
		  // Overwrite Axios's automatically set Content-Type
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*'
		}
	}
);