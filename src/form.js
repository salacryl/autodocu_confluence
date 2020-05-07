import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
//import wiki from './handledocumentation';
import csvtojson from 'csvtojson';


const onChangeFileUpload = (selectorFiles) => {
  const formData = new FormData()
  formData.append('file', selectorFiles[0]
  )
    axios.post('http://www.deliancourt.org:25478/upload?token=f9403fc5f537b4ab332d', formData)
  .then (res => {
    if (res.data.ok)
    {
      axios.get('http://www.deliancourt.org:25478/files/'+selectorFiles[0].name+'?token=f9403fc5f537b4ab332d')
      .then( res => {
        csvtojson()
        .fromString(res.data)
        .then((Row) =>{
          console.log(Row);
        })
      })
    }
  })
  //const reader = new FileReader();  
  /*let content = reader.readAsText(selectorFiles[0]);


  wiki.test();
*/
}

const Amform = () => {
  return (
    <Fragment>
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
