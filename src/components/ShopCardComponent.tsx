import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Shop } from '../types/Shop'
import { Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CardComponentProps{
  props: Shop
}


export default function CardComponent({props}: CardComponentProps) {
  const navigate = useNavigate()
  return (
    <Card variant='outlined' sx={{bgcolor:'#ff5252', width:'300px'}}>
        <CardContent sx={{color:' white'}}>
              <Typography variant='h6'>
                  {props.shopCategory}
              </Typography>
              <Typography variant='h3' sx={{fontWeight: 'bold'}}>
                  {props.shopName}
              </Typography>
              <Typography variant='body1' sx={{mb: 2}}>
                {props.description}
              </Typography>
              <CardActions sx={{padding: 0}}>
                <Button 
                variant='outlined' sx={{bgcolor: 'white', color: '#ff0000', fontWeight: 'bold', border: 0}}
                onClick={() => {navigate(`/shop/${props.id}`)}}
                >
                  Узнать больше
                </Button>
              </CardActions>
          </CardContent>
        
    </Card>
  )
}
