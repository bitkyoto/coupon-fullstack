import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AboutComponent() {
  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', borderColor: 'red', border: '1px solid red', borderRadius: '10px', mb:3}}>
            <Typography variant='h1' sx={{padding: 3}}>
                Добро пожаловать на наш веб-сайт!
            </Typography>
            <Typography sx={{paddingX: 3, mb:3, fontSize: "30px"}}>
                Мы предоставляем услуги для легкой и комфортной возможности дарения подарков для ваших близких 
            </Typography>
        </Box>
    </>
  )
}
