import React, { useEffect } from 'react';
import CardComponent from './CardComponent';
import { Box, Typography } from '@mui/material';
import { useGetShopsQuery } from '../redux/myApi';
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
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexWrap: 'wrap' }}>
            {data && data.map((shop) => (
                <CardComponent key={shop.id} props={shop} />
            ))}
        </Box>
    );
}
