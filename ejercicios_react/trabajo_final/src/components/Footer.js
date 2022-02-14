import React from 'react';
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} 
        spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
        alignItems="center">
            <h5>@Copyright Didier Benjumea </h5>     

        </Stack>
    );
};

export default Footer;
