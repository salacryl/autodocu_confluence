import axios from 'axios'; 
import qs from 'qs';
import mailserverTemplate from './templates/exchangeserver';

const url= "https://edv.caritas-dicvhildesheim.de/api.php";

// Step 1: GET request to fetch login token
const  getLoginToken = (serverObject) => {
	axios({method:'get', url: url, 
	params: {
		action:"query",
		meta: "tokens",
		type: "login", 
		format: "json"
	},
	withCredentials: true,
})
.then(function (response) {
	loginRequest(response.data.query.tokens.logintoken, serverObject);
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	
//   loginRequest(data.query.tokens.logintoken);
// });
}

// Step 2: POST request to log in. 
// Use of main account for login is not
// supported. Obtain credentials via Special:BotPasswords
// (https://www.mediawiki.org/wiki/Special:BotPasswords) for lgname & lgpassword
const  loginRequest = (login_token, serverObject) => {
	axios({method:'post',
	url: url+"?action=login&format=json", 
	data: qs.stringify({
		lgname: "Meier@autodocu",
		lgpassword: "d7ujcjdk67g8i9mbtvbsat2hbpuk3m2h",
		lgtoken: login_token,
	}),
	headers: { 
		"Content-Type": "application/x-www-form-urlencoded"
	},
	withCredentials: true
})
.then(function (response) {
	getCsrfToken(serverObject);
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	

}

// Step 3: GET request to fetch CSRF token
const  getCsrfToken = (serverObject) =>{
	
	axios({method:'get',
	url: url+"?action=query&format=json&meta=tokens", 
	withCredentials: true
})
.then(function (response) {
	editRequest(response.data.query.tokens.csrftoken, serverObject);
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	


}

// Step 4: POST request to edit a page
const  editRequest = (csrf_token, serverObject) =>{
	
	let title  ='';
	let text = '';
	
	switch (serverObject.kategorie) {
		case 'mailserver':
			title =  title +"Mailserver_" + serverObject.Name;
			text = mailserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		default:
			title = '';
			break;
	}

	

	axios({method:'post',
	url: url+"?action=edit&format=json", 
	data: qs.stringify({
		title: title,
		text: text,
		token: csrf_token,
		format: "json"
	}),
	headers: { 
		"Content-Type": "application/x-www-form-urlencoded"
	},
	withCredentials: true
})
.then(function (response) {
	console.log(response.data);
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	

}



export default {
	writeDocu: (serverObject) => {
		getLoginToken(serverObject);
	}
}