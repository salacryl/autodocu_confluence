import React, { Fragment, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
	select: {
		color: 'white',
		'&:before': {
			borderColor: 'white',
		},
		'&:after': {
			borderColor: 'white',
		}
	},
	icon: {
		fill: 'white',
	},
});


const Amform = () => {
	const classes = styles();
	const [einrichtung, setEinrichtung] = useState({jsx: <span style={{color: 'red'}}>Wähle eine Einrichtung</span>, text: '',});
	const [kategorie, setKategorie] = useState({jsx: <span style={{color: 'red'}}>Wähle eine Serverkategorie</span>, text: ''});
	const handleEinrichtungChange = e => {
		setEinrichtung({jsx: <span style={{color: 'white'}}>{e.target.value}</span>, text:e.target.value});
	}
	const handleKategorieChange = e => {
		setKategorie({jsx: <span style={{color: 'white'}}>{e.target.value}</span>, text:e.target.value});
	} 
	return (
		<Fragment>
			<InputLabel style={{ color: 'white', marginTop: 50 }} id="demo-simple-select-label">Einrichtung wählen</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={einrichtung.text}
				onChange={handleEinrichtungChange}
				className={classes.select}
				inputProps={{
					classes: {
						icon: classes.icon,
					},
				}}
			>
				<MenuItem value={'dicvhi'}>Caritasverband für die Diözese Hildesheim e. V.</MenuItem>
				<MenuItem value={'stmonika'}>Altenpflegeheim St. Monika</MenuItem>
				<MenuItem value={'hgeistsarstedt'}>Altenzentrum Heilig Geist Sarstedt</MenuItem>
				<MenuItem value={'judithheim'}>Caritas Netzwerk Salzgitter (Judith Heim)</MenuItem>
				<MenuItem value={'caritaswohnenhm'}>Caritas Wohnen Hann. Münden</MenuItem>
				<MenuItem value={'caritaswohnenhi'}>Caritas Wohnen Hildesheim</MenuItem>
				<MenuItem value={'friedland'}>Caritasstelle Friedland</MenuItem>
				<MenuItem value={'caritashelmstedt'}>Caritasverband für den Landkreis Helmstedt</MenuItem>
				<MenuItem value={'werkstaettenhannover'}>Caritaswerkstätten Hannover</MenuItem>
				<MenuItem value={'caritaswohnenha'}>Caritas-Wohnen-Hannover</MenuItem>
				<MenuItem value={'evrs'}>Elisabeth von Rantzau Schule</MenuItem>
				<MenuItem value={'roederhof'}>Heimstatt Röderhof</MenuItem>
				<MenuItem value={'henneckenrode'}>Kinder- und Jugendhilfe Henneckenrode</MenuItem>
				<MenuItem value={'magdalenenhof'}>Magdalenenhof Senioren- u. Pflegeheim</MenuItem>
				<MenuItem value={'waldmuehle'}>Mutter-Kind-Klinik Haus Waldmühle Braunlage</MenuItem>
				<MenuItem value={'langeoog'}>Mutter-Kind-Klinik Langeoog</MenuItem>
				<MenuItem value={'wangerooge'}>Mutter-Kind-Klinik St. Willehad Wangerooge</MenuItem>
				<MenuItem value={'mariaimtann'}>Senioren-Pflegeheim Maria im Tann</MenuItem>
				<MenuItem value={'stansgar'}>St. Ansgar Kinder- und Jugendhilfe</MenuItem>
				<MenuItem value={'stbonifatius'}>St. Bonifatius Kinder- und Jugendhilfe</MenuItem>
				<MenuItem value={'sthedwig'}>St. Hedwig Braunschweig</MenuItem>
				<MenuItem value={'stjoseph'}>St. Joseph Kinder- und Jugendhilfe</MenuItem>
				<MenuItem value={'stnikolaus'}>St. Nikolaus Kinder- und Jugendhilfe</MenuItem>
				<MenuItem value={'stteresienhaus'}>St. Teresienhaus Bremen Kinder- und Jungendhilfe</MenuItem>
				<MenuItem value={'teresienhof'}>Teresienhof Senioren- u. Pflegeheim</MenuItem>
			</Select>
			<InputLabel style={{ color: 'white', marginTop: 50 }} id="demo-simple-select-label">Server-Kategorie wählen</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={kategorie.text}
				onChange={handleKategorieChange}
				className={classes.select}
				inputProps={{
					classes: {
						icon: classes.icon,
					},
				}}
			>
				<MenuItem value={'domaincontroller'}>Anmeldeserver (Active Directory / Domänen-Controller)</MenuItem>
				<MenuItem value={'mailserver'}>Emailserver (Exchange)</MenuItem>
				<MenuItem value={'fileserver'}>Dateiserver</MenuItem>
				<MenuItem value={'spamfilter'}>Spamblocker / Mailgateway (Postfix)</MenuItem>
				<MenuItem value={'intranet'}>Intranet (Sharepoint)</MenuItem>
				<MenuItem value={'appserver'}>Applikationsserver</MenuItem>
				<MenuItem value={'databaseserver'}>Datenbankserver (SQLServer)</MenuItem>
				<MenuItem value={'hypervhost'}>Hyper-V</MenuItem>
				<MenuItem value={'dockerhost'}>Docker-Host</MenuItem>
				<MenuItem value={'helpdesk'}>Helpdesk (OTRS)</MenuItem>
				<MenuItem value={'sensorserver'}>Sensor-Server (PRTG)</MenuItem>
				<MenuItem value={'backupserver'}>Backup-Server</MenuItem>
				<MenuItem value={'asterisk'}>VoIP-Server (asterisk)</MenuItem>
				<MenuItem value={'reverseproxy'}>Reverse Proxy</MenuItem>
				<MenuItem value={'citrix_controller'}>Citrix Controller</MenuItem>
				<MenuItem value={'citrix_node'}>Citrix Cluster-Node</MenuItem>
				<MenuItem value={'citrix_workerclone'}>Citrix Worker-Klon</MenuItem>
			</Select>
			<h4>Befehl für Linux:</h4>
			<Typography>wget https://autodoc.deliancourt.org/scripts/inventory.sh; /bin/bash inventory.sh {kategorie.jsx} {einrichtung.jsx} {"<"}username{">"} {"<"}password{">"}</Typography>
			<h4>Befehl für Windows (Powershell):</h4>
			<Typography>wget https://autodoc.deliancourt.org/scripts/inventory.ps1 -outfile "inventory.ps1"; .\inventory.ps1 -kategorie {kategorie.jsx} -einrichtung {einrichtung.jsx} -username {"<"}username{">"} -password {"<"}password{">"}</Typography>
		</Fragment>
	)
}
export default Amform;
