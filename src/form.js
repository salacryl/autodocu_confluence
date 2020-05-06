import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import wiki from './handledocumentation';

const onChangeFileUpload = (selectorFiles, reloadFunc) =>{

	wiki.test();
	reloadFunc(selectorFiles[0].name);
}

const Amform = () => {
	const [filename, setFilename] = useState(
		'None'
	  );
    return (
		<Fragment>
        <Button
  variant="contained"
  component="label"
>
  Upload Documention File
  <input
    type="file"
    style={{ display: "none" }}
    accept=".csv"
    onInput={(e) => onChangeFileUpload(e.target.files, setFilename)}
  />
</Button>
<span>actual file: {filename}</span>
</Fragment>
)
}
export default Amform;
