import axios from 'axios'; 
import qs from 'qs';
import mailserverTemplate from './templates/exchangeserver';

import axiosCookieJarSupport  from 'axios-cookiejar-support';
import  tough from 'tough-cookie';
 
axiosCookieJarSupport(axios);
 
const cookieJar = new tough.CookieJar();
const url= "https://edv.caritas-dicvhildesheim.de/api.php";

// Step 1: GET request to fetch login token
const  getLoginToken = (serverObject, cb) => {
	axios({method:'get', url: url, jar: cookieJar,
	params: {
		action:"query",
		meta: "tokens",
		type: "login", 
		format: "json"
	},
	withCredentials: true,
})
.then(function (response) {
	loginRequest(response.data.query.tokens.logintoken, serverObject, cb );
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
const  loginRequest = (login_token, serverObject, cb) => {
	
	axios({method:'post',
	url: url+"?action=login&format=json", 
	jar: cookieJar,
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
		getCsrfToken(serverObject, cb);
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	

}

// Step 3: GET request to fetch CSRF token
const  getCsrfToken = (serverObject, cb ) =>{
	
	axios({method:'get',
	url: url+"?action=query&format=json&meta=tokens",
	jar: cookieJar, 
	withCredentials: true
})
.then(function (response) {
	editRequest(response.data.query.tokens.csrftoken, serverObject, cb );
})
.catch(function (error) {
	console.log(error);
})
.finally(function () {
	// always executed
});  	


}

// Step 4: POST request to edit a page
const  editRequest = (csrf_token, serverObject, cb) =>{
	
	let title  ='';
	let text = '';
	console.log(serverObject);
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
	jar: cookieJar,
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
	console.log(response.data)
	cb(response.data.edit.result);
})
.catch(function (error) {
	console.log(error);
	cb("error");
})
.finally(function () {
	// always executed
});  	

}



export default {
	writeDocu: (serverObject, cb) => {
		getLoginToken(serverObject, cb);
	}
}