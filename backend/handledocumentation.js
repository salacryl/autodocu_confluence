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

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
const url = "http://www.deliancourt.org:8090/";

// Step 1: GET request to fetch login token
const editRequest = (serverObject, cb) => {

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

    console.log(text);

	axios({
		method: 'post',
		url: url + "rest/api/content/",
		data: JSON.stringify({
			"type": "page",
			"title": title,
			"space":{"key":"SHOW"},
			"body": {"storage":{"value": text,"representation": "storage"}}
			
		}),
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Authorization": "Basic " + Buffer.from(serverObject.username+ ":" + serverObject.password).toString('base64')
		},
		
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
		editRequest(serverObject, cb);
	}
}