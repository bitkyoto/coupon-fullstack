import React from 'react'
import Header from '../components/Header'
import { Box, Container} from '@mui/material'
import ProductCardComponent from '../components/ProductCardComponent'
import CardsList from '../components/ShopCardsList'
import LoginForm from '../components/LoginForm'
import AboutComponent from '../components/AboutComponent'
export default function HomePage() {
  return (
    <>
        <Header />
        <Container>
            <AboutComponent/>
            <Box sx={{width: 'auto', display: 'flex', flexWrap: 'wrap', padding: 3, border: '1px solid red', borderRadius: '10px'}}>
              <CardsList/>
            </Box>
        </Container>
    </>
  )
}
