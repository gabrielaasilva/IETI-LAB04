import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
        <Grid container >
            <Grid xs={12} md={8} lg={8} item >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid xs={12} md={4} lg={4} item >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
        </Grid>
    )
}
