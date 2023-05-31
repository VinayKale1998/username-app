import { Typography } from '@mui/material';
import React from 'react'

function PreviewImage({file}) {

    const [preview,setPreview]= React.useState(null)

    console.log("Inside Preview")
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setPreview(reader.result)
    }
  return (
    <div>
        {preview?<img src={preview} alt='Preview' width='100px' height='100px'></img>:<Typography  variant="body1">Loading...</Typography>}
    </div>
  )
}

export default PreviewImage