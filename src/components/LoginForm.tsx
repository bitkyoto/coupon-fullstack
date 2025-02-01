import { Box, Button, Card, CardActions, CardContent, Container, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import React from 'react';

export default function LoginForm() {
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
                // placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
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
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button 
                variant='outlined' 
                type="submit"
                sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0}}
            >
                Войти
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
