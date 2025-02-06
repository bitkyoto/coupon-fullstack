import React from 'react'
import { Product } from '../types/Shop'
import { Box, Button, Typography } from '@mui/material'

interface Props{
    props: Product
}

export default function ProductInCartComponent({props}: Props) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', border: '2px solid grey', mb:2, p:3}}>
        <Typography variant="h6"> {props.title}</Typography>
        <Button 
        variant='outlined'
        sx={{color: 'red', border: '1px solid red '}}
        > Удалить </Button>
    </Box> 
  )
}
