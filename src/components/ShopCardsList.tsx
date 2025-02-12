import React, { useEffect } from 'react';
import CardComponent from './ShopCardComponent';
import { Box, Typography } from '@mui/material';
import { useGetShopsQuery } from '../redux/shopApi';
import { useDispatch } from 'react-redux';
import { setShops } from '../redux/shopSlice';

export default function CardsList() {
    const { data, error, isLoading } = useGetShopsQuery();
    const dispatch = useDispatch()
    useEffect(() => {
        if (data) dispatch(setShops(data))
    }, [data])

    if (isLoading) return <Typography variant="h1">LOADING</Typography>;
    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {data && data.map((shop, index) => (
                <CardComponent key={Math.random()} props={shop} index={index} />
            ))}
        </Box>
        
    );
}
