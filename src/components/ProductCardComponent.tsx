import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../types/Shop'

interface ProductCardProps{
    props: Product
}


export default function ProductCardComponent({props}: ProductCardProps) {
  return (
    <Card variant='outlined' sx={{bgcolor:'#ff5252', width:'400px'}}>
        <CardContent sx={{color:' white', fontWeight: 'bold'}}>
              <Typography variant='h3'>
                  {props.title}
              </Typography>
              <Typography variant='h6' sx={{mb:1}}>
                  {props.description}
              </Typography>
              <CardActions sx={{padding: 0, justifySelf: 'center'}}>
                <Button 
                variant='outlined' sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0}}
                >
                  Купить
                </Button>
              </CardActions>
          </CardContent>
        
    </Card>
  )
}
