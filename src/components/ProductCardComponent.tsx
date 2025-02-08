import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Product } from '../types/Shop'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'


interface ProductCardProps{
    props: Product
    index: number
}


export default function ProductCardComponent({props, index}: ProductCardProps) {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addToCart(props))
  }
  const _bgColor = index % 2 ? '#ff5252' : 'red'
  return (
    <Card variant='outlined' sx={{bgcolor:_bgColor}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', color:' white', wordBreak: 'break-all'}}>
              <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                  {props.title}
              </Typography>
              <Typography variant='h6' sx={{mb:1}}>
                  {props.description}
              </Typography>
              <Typography variant='h5' sx={{mb:1, fontWeight:'bold'}}>
                  {props.price} рублей
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
