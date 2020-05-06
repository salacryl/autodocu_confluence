import React from 'react';
import Button from '@material-ui/core/Button';
import wiki from './handledocumentation';

const onChangeFileUpload = (selectorFiles) =>{

    wiki.test();
}

const am_form = () => {
    return (
        <Button
  variant="contained"
  component="label"
>
  Upload Documention File
  <input
    type="file"
    style={{ display: "none" }}
    accept=".csv"
    onChange={(e) => onChangeFileUpload(e.target.files)}
  />
</Button>
    )
}
export default am_form;
