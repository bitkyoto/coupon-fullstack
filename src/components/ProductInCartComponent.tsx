import React from 'react'
import { Product } from '../types/Shop'
import { Box, Button, Typography } from '@mui/material'
import { removeFromCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

interface Props{
    props: Product
}

export default function ProductInCartComponent({props}: Props) {
  const dispatch = useDispatch()
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', border: '2px solid grey', mb:2, p:3}}>
        <Typography variant="h6"> {props.title}</Typography>
        <Typography variant="body1"> {props.price} руб.</Typography>
        <Button 
        variant='outlined'
        onClick={() => dispatch(removeFromCart(props))}
        sx={{color: 'red', border: '1px solid red '}}
        > Удалить </Button>
    </Box> 
  )
}
