import axios from 'axios';
import qs from 'qs';

import domaincontrollerTemplate from './templates/domaincontroller';
import mailserverTemplate from './templates/exchangeserver';
import spamfilterTemplate from './templates/spamfilter';
import fileserverTemplate from './templates/fileserver';
import intranetSharepointTemplate from './templates/intranet_sharepoint';
import applicationserverTemplate from './templates/applicationserver';
import databaseserverTemplate from './templates/databaseserver';
import sensorserverTemplate from './templates/sensorserver';
import backupserverTemplate from './templates/backupserver';
import helpdeskTemplate from './templates/helpdesk';
import reverseproxyTemplate from './templates/reverseproxy';
import asteriskTemplate from './templates/asterisk';
import dockerhostTemplate from './templates/dockerhost';
import hypervTemplate from './templates/hypervhost';
import citrixControllerTemplate from './templates/citrix_controller';
import citrixNodeTemplate from './templates/citrix_node';
import citrixWorkerTemplate from './templates/citrix_workerclone';


import axiosCookieJarSupport from 'axios-cookiejar-support';
import tough from 'tough-cookie';
import asterisk from './templates/asterisk';

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
const url = "https://edv.caritas-dicvhildesheim.de/api.php";

// Step 1: GET request to fetch login token
const getLoginToken = (serverObject, cb) => {
	axios({
		method: 'get', url: url, jar: cookieJar,
		params: {
			action: "query",
			meta: "tokens",
			type: "login",
			format: "json"
		},
		withCredentials: true,
	})
		.then(function (response) {
			loginRequest(response.data.query.tokens.logintoken, serverObject, cb);
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
const loginRequest = (login_token, serverObject, cb) => {

	axios({
		method: 'post',
		url: url + "?action=login&format=json",
		jar: cookieJar,
		data: qs.stringify({
			lgname: serverObject.username,
			lgpassword: serverObject.password,
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
const getCsrfToken = (serverObject, cb) => {

	axios({
		method: 'get',
		url: url + "?action=query&format=json&meta=tokens",
		jar: cookieJar,
		withCredentials: true
	})
		.then(function (response) {
			editRequest(response.data.query.tokens.csrftoken, serverObject, cb);
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			// always executed
		});


}

// Step 4: POST request to edit a page
const editRequest = (csrf_token, serverObject, cb) => {

	let title = '';
	let text = '';
	switch (serverObject.kategorie) {
		case 'domaincontroller':
			title = title + "Domaincontroller_" + serverObject.Name;
			text = domaincontrollerTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'mailserver':
			title = title + "Mailserver_" + serverObject.Name;
			text = mailserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'fileserver':
			title = title + "Fileserver_" + serverObject.Name;
			text = fileserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'spamfilter':
			title = title + "Spamfilter_" + serverObject.Name;
			text = spamfilterTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'intranet':
			title = title + "Intranet_" + serverObject.Name;
			text = intranetSharepointTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'appserver':
			title = title + "Appserver_" + serverObject.Name;
			text = applicationserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'databaseserver':
			title = title + "Databaseerver_" + serverObject.Name;
			text = databaseserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'hypervhost':
			title = title + "HyperVhost_" + serverObject.Name;
			text = hypervTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'dockerhost':
			title = title + "DockerHost_" + serverObject.Name;
			text = dockerhostTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'helpdesk':
			title = title + "Helpdesk_" + serverObject.Name;
			text = helpdeskTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'sensorserver':
			title = title + "Sensorserver_" + serverObject.Name;
			text = sensorserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'backupserver':
			title = title + "Backupserver_" + serverObject.Name;
			text = backupserverTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'asterisk':
			title = title + "Asterisk_" + serverObject.Name;
			text = asteriskTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'reverseproxy':
			title = title + "ReverseProxy_" + serverObject.Name;
			text = reverseproxyTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'citrix_controller':
			title = title + "CitrixController_" + serverObject.Name;
			text = citrixControllerTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'citrix_node':
			title = title + "CitrixNode_" + serverObject.Name;
			text = citrixNodeTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		case 'citrix_workerclone':
			title = title + "CitrixWorker_" + serverObject.Name;
			text = citrixWorkerTemplate.getText(serverObject.einrichtung, serverObject.OS_Name, serverObject.IP_Addresses, serverObject.FQDN, serverObject.SerialNumber, serverObject.TotalMemory_GB, serverObject.CPU_Name);
			break;
		default:
			title = '';
			break;
	}



	axios({
		method: 'post',
		url: url + "?action=edit&format=json",
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