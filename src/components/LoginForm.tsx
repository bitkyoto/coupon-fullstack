import { Box, Button, Card, CardActions, CardContent, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RepeatOneSharp } from '@mui/icons-material';
import { login } from '../redux/authSlice'
import { useDispatch } from 'react-redux';
import { LoginResponse, LoginState, UserLoginInterface } from '../types/Auth';
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async () => {
    if(username && password){
      try{
        const response = await axios.post('http://localhost:3000/auth/register', {
          "username": username,
          "password": password
        })
        console.log(response.data, response.statusText)
      }catch(error){
        console.error('Ошибка при отправке данных:', error);
      }
    }
  }
  const handleLogin = async () => {
    const user: UserLoginInterface = {username, password}
    try{
      const res = await axios.post('http://localhost:3000/auth/login', user)
      const responseData: LoginResponse = res.data
      console.log(responseData)
      const loginData: LoginState = {
        username: user.username,
        isLogged: responseData.access_token ? true : false,
        balance: responseData.balance? responseData.balance : 0,
        access_token: responseData.access_token
      }
      dispatch(login(loginData))
      navigate('/profile')
    }catch(error){
      console.error('Ошибка при отправке данных:', error);
    }
  }
  return (
    <Container>
      <Card variant='outlined' sx={{ bgcolor: '#ff5252', width: '600px', justifySelf: 'center' }}>
        <CardContent sx={{ color: 'white', fontWeight: 'bold' }}>
          <FormControl fullWidth sx={{mb:2}}>
            <FormLabel htmlFor="email" sx={{ color: 'white' }}> Email </FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              onChange={(event) => {setUsername(event.target.value)}}
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // Белая рамка
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // Белая рамка при наведении
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // Белая рамка при фокусе
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Белый текст
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Белый текст метки
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth sx={{mb:2}}>
              <FormLabel htmlFor="password" sx={{ color: 'white' }}> Пароль </FormLabel>
              <TextField
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Белая рамка
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Белая рамка при наведении
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white', // Белая рамка при фокусе
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: 'white', // Белый текст
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Белый текст метки
                    },
                  }}
              />
          </FormControl>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button 
                variant='outlined' 
                type="submit"
                onClick={handleLogin}
                sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0, mr: 3}}
            >
                Войти
            </Button>
            <Button 
                variant='outlined' 
                type="submit"
                onClick={handleRegister}
                sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0}}
            >
                Регистрация
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
