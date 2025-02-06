import React from 'react'
import { useGetItemsOfShopQuery } from '../redux/shopApi'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { Container } from '@mui/material'
import ProductCardList from '../components/ProductCardList'

export default function ShopPage() {
    
    return (
        <>
            <Header/>
            <Container>
                <ProductCardList/>
            </Container>
        </>
    )
}
