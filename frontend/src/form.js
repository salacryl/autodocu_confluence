import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import wiki from './handledocumentation';
import csvtojson from 'csvtojson';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles ({
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
  const [einrichtung, setEinrichtung] =useState('dicvhi'); 
  const [kategorie, setKategorie] =useState('mailserver'); 
  const handleEinrichtungChange = e =>{
      setEinrichtung (e.target.value);
  }

  
  const handleKategorieChange = e =>{
      setKategorie (e.target.value);
  }
  const onChangeFileUpload = (selectorFiles) => {
    const formData = new FormData()
    formData.append('file', selectorFiles[0]
    )
    axios.post('http://www.deliancourt.org:25478/upload?token=f9403fc5f537b4ab332d', formData)
      .then(res => {
        if (res.data.ok) {
          axios.get('http://www.deliancourt.org:25478/files/' + selectorFiles[0].name + '?token=f9403fc5f537b4ab332d')
            .then(res => {
              csvtojson()
                .fromString(res.data)
                .then((Row) => {
                  Row[0].kategorie = kategorie;
                  Row[0].einrichtung = einrichtung;
                  wiki.writeDocu(Row[0]);
                })
            })
        }
      })
    //const reader = new FileReader();  
    /*let content = reader.readAsText(selectorFiles[0]);
    
    
    wiki.test();
    */
  }
	return (
		<Fragment>
      <InputLabel style ={{color: 'white', marginTop: 50}} id="demo-simple-select-label">Einrichtung wählen</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={einrichtung}
          onChange ={handleEinrichtungChange}
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
        <InputLabel style ={{color: 'white', marginTop: 50}} id="demo-simple-select-label">Server-Kategorie wählen</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={kategorie}
          onChange ={handleKategorieChange}
          className={classes.select}
          inputProps={{
              classes: {
                  icon: classes.icon,
              },
          }}
          
        >
                    <MenuItem value={'mailserver'}>Emailserver (Exchange) </MenuItem>
         {/*  <MenuItem value={'anmeldeserver'}>Anmeldeserver (Active Directory / Domänen-Controller) </MenuItem>
           <MenuItem value={'dateiserver'}>Datei (Exchange)</MenuItem>
          <MenuItem value={'spamfilter'}>Spamblocker / Mailgateway (Postfix) </MenuItem>
          <MenuItem value={'Intranet'}>Intranet (Sharepoint) </MenuItem>
          <MenuItem value={'appserver'}>Applikationsserver </MenuItem>
          <MenuItem value={'databaseserver'}>Datenbankserver (SQLServer)</MenuItem>  */}

        </Select>
			<Button
				variant="contained"
				component="label"
				style={{ marginTop: 50 }}
				color='primary'
			>
				Upload Documention File
			    <input
					type="file"
					style={{ marginTop: 10, display: 'none' }}
					accept=".csv"
					onInput={(e) => onChangeFileUpload(e.target.files)}
				/>
			</Button>
		</Fragment>
	)
}
export default Amform;
