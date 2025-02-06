import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/Shop';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { username, balance, isLogged } = useSelector((state) => state.authSlice)
  const products = useSelector((state) => state.cartSlice)
  useEffect(() => {
    if (!isLogged) {
      navigate('/login')
    }
  }, [isLogged, navigate]) 


  return (
    <>
      <Header />
      {isLogged && (
        <Container sx={{ display: 'flex', boxSizing: 'border-box' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'nowrap',
              maxWidth: '30%',
              border: '2px solid red',
              borderRadius: '10px',
              padding: 3,
              mr: 3,
            }}
          >
            <Typography> {`Имя пользователя: ${username}`}  </Typography>
            <Typography> {`Баланс: ${balance} руб.`}       </Typography>
            <Typography> {`История подарков:`}               </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '70%',
              border: '2px solid red',
              borderRadius: '10px',
              padding: 3,
            }}
          >
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
              <Typography variant="h2"> Ваша корзина: </Typography>
              {products.map((prdct: Product) => (<Typography variant="h5"> {prdct.title} id: {prdct.id} </Typography> ))}
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}
