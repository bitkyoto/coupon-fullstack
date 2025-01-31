import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from '../assets/logo.png'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  return (
    <AppBar sx={{bgcolor:"#ff0000", mb:4}} position='static'>
        <Toolbar sx={{justifyContent:'space-around'}}>
          <img src={logo} width={"50"} alt="logo" />
          <Typography variant='h5' sx={{fontWeight: 'bold'}}> Coupon </Typography>
          <IconButton onClick={ () => { navigate('/login') }}>
            <AccountBoxIcon sx={{color:"white", mr:1}}/>
            <Typography variant='h6' sx={{color:"white", fontWeight: 'bold'}}> Личный кабинет </Typography>
          </IconButton>
        </Toolbar>
    </AppBar>
  )
}
