import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountMenu from './AccountMenu';

export default function Header() {
  const navigate = useNavigate()
  const {username, isLogged} = useSelector((state) => state.authSlice)
  return (
    <AppBar sx={{bgcolor:"#ff0000", mb:4}} position='static'>
        <Toolbar sx={{justifyContent:'space-around'}}>
          <Box sx={{cursor: 'pointer'}}>
            <img src={logo} width={"50"} alt="logo" onClick={() => navigate('/')}/>
          </Box>
          <Typography variant='h5' sx={{fontWeight: 'bold', cursor: 'pointer'}} onClick={() => navigate('/')}> Coupon </Typography>
          <Box sx={{display:'flex', gap: 1}}>
            {/* <IconButton sx={{'&: hover': {bgcolor: 'inherit'}}} onClick={ () => 
              { 
                if (!isLogged) {
                  navigate('/login')
                }else{
                  navigate('/profile')
                }}
              }>
              <AccountBoxIcon sx={{color:"white", mr:1}}/>
              {!isLogged &&
                <Typography variant='body1' sx={{color:"white", fontWeight: 'bold', '&: hover':{textDecoration: 'underline'}}}> Личный кабинет </Typography>
              }
              {isLogged && 
                <Typography variant='h6' sx={{color:"white", fontWeight: 'bold', '&: hover':{textDecoration: 'underline'}}}> {username} </Typography>
              }
            </IconButton> */}
            <AccountMenu/>
          </Box>
        </Toolbar>
    </AppBar>
  )
}
