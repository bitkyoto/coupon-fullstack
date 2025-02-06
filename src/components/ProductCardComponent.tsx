import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../types/Shop'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
interface ProductCardProps{
    props: Product
}


export default function ProductCardComponent({props}: ProductCardProps) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(props))
  }
  return (
    <Card variant='outlined' sx={{bgcolor:'#ff5252', width:'400px'}}>
        <CardContent sx={{color:' white'}}>
              <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                  {props.title}
              </Typography>
              <Typography variant='h6' sx={{mb:1}}>
                  {props.description}
              </Typography>
              <CardActions sx={{padding: 0, justifySelf: 'center'}}>
                <Button 
                variant='outlined' sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0}}
                onClick={handleAddToCart}
                >
                  Купить
                </Button>
              </CardActions>
          </CardContent>
        
    </Card>
  )
}
