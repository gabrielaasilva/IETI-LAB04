import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import "./styles/Login.css"

export default function Login(props) {
    // const { name = "usuario" } = props; 
    return (
        // <Box
        //     component="form"
        //     noValidate
        //     autoComplete="off"
        // >
        //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        // </Box>
        <Grid container style={{ justifyContent: 'center', alignItem: "center", height: "100vh"}}>
            <Grid xs={12} md={12} lg={12} item style={{marginTop: '150px'}} >
                <label style={{ display: "block", margin: "10px" }}>Correo electrónico</label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid xs={12} md={12} lg={12} item style={{ marginTop: "20px" }} >
                <label style={{ display: "block", margin: "10px" }}>Constraseña</label>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid xs={12} md={12} lg={12} item >
                <Button variant="contained" style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>Log In</Button>
            </Grid>

        </Grid>


    )
}
