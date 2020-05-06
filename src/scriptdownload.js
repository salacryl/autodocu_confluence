import React from 'react';
import Button from '@material-ui/core/Button';



const scriptdownloader = () => {
    
    return (
        <a href="/scripts/inventory.ps1" style={{textDecoration: "none"}}>
       <Button style={{marginTop: 10}} variant="contained">inventory Powershell Script</Button>
       </a>
    )
}

export default scriptdownloader;