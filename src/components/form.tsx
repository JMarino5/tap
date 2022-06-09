import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../css/login.css';

import { BButton } from './button';

//Material-UI was utilized for the login form.
//The out-of-the-box style was stripped down, and the form was re-styled to maintain continuity with the site's.

const Form = ({title, setPassword, setEmail, handleAction} : any) => {

    return (
        <React.Fragment>
            <div className="hContainer">
                <h3>
                    {title}
                </h3>
            </div>

            <Box
                component="form"
                sx={{
                    '> :not(style)': { m: 3, width: '25ch', border: '2px solid', borderColor: 'black', boxShadow: 'none', },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='login'>
                <TextField InputProps={{disableUnderline: true, style: {alignSelf: 'center', marginBottom: '1vh', borderBottom: '1px solid', borderColor: 'black'}}} InputLabelProps={{ shrink: false, }} placeholder='Username' variant='standard' id="email" onChange={(e) => setEmail(e.target.value)} />
                <TextField InputProps={{disableUnderline: true, style: {alignSelf: 'center'}}} InputLabelProps={{ shrink: false }} placeholder='Password'  variant='standard' id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </Box>
        <BButton type="submit" handleAction={handleAction} />
        </React.Fragment>
    )
}
export {
    Form,
};