import React from 'react'
import ProductCardComponent from './ProductCardComponent'
import { useParams } from 'react-router-dom'
import { useGetItemsOfShopQuery } from '../redux/myApi'
import { Box } from '@mui/material'
export default function ProductCardList() {
    const {id} = useParams()
    const {data, error, isLoading} = useGetItemsOfShopQuery(id)
    return (
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            {data && data.map((product) => <ProductCardComponent key={product.id} props={product}/>)}
        </Box>
    )
}
