import ProductCardComponent from './ProductCardComponent';
import { useParams } from 'react-router-dom';
import { useGetItemsOfShopQuery } from '../redux/shopApi';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function ProductCardList() {
    const { id } = useParams();
    const { data, error, isLoading } = useGetItemsOfShopQuery(id);
    const {filter, interval} = useSelector((state) => state.filterSlice);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (data) {
            let sortedData = [...data];
            switch (filter) {
                case 'Дороже':
                    sortedData.sort((a, b) => b.price - a.price);
                    break;
                case 'Дешевле':
                    sortedData.sort((a, b) => a.price - b.price);
                    break;
                default:
                    break;
            }
            setFilteredData(sortedData);
        }
    }, [data, filter]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <Box sx={{ display: 'flex', gap: 4, flexDirection: 'column', width: '100%', flexWrap: 'wrap' }}>
            {filteredData && filteredData.map((product, index) => (
                <ProductCardComponent key={product.id} props={product} index={index} />
            ))}
        </Box>
    );
}
