import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { setFilter, setInterval } from '../redux/filterSlice';
import { useDispatch } from 'react-redux';

export default function ProductFilterComponent() {
    const [filter, setFilter_] = useState('Популярные')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setFilter_(event.target.value);
    }

    const handleMinPriceChange = (event) => {
        setMinPrice(Number(event.target.value))
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(Number(event.target.value))
    }

    useEffect(() => {
        dispatch(setFilter(filter))
        dispatch(setInterval(`${minPrice}-${maxPrice}`))
    }, [filter, minPrice, maxPrice])

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent:'space-between' }}>
                <FormControl sx={{minWidth: 175}}>
                    <Select
                        value={filter}
                        onChange={handleChange}
                        displayEmpty
                        
                        sx={{
                            bgcolor: '#ff5252',
                            color: 'white',
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white',
                            },
                            '.MuiSvgIcon-root ': {
                                fill: 'white !important',
                            },
                        }}
                    >
                        <MenuItem value='Популярные'>
                            <Typography>Популярные</Typography>
                        </MenuItem>
                        <MenuItem value='Дороже'>
                            <Typography>Дороже</Typography>
                        </MenuItem>
                        <MenuItem value='Дешевле'>
                            <Typography>Дешевле</Typography>
                        </MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField
                        label="Мин. цена"
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        sx={{ width: 150, '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'red',
                                    color: 'red'
                                },},
                                '& .MuiFormLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'red',
                                    },
                                },
                                "&:hover:not(.Mui-focused)": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#ff5252",
                                    },
                                    "& .MuiFormLabel-root": {
                                        color: '#ff5252'
                                    }
                                },
                            }
                        }
                    />
                    <TextField
                        label="Макс. цена"
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        sx={
                            { width: 150, '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: 'red',
                                    color: 'red'
                                    },},
                                '& .MuiFormLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'red',
                                    },
                                },
                                "&:hover:not(.Mui-focused)": {
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#ff5252",
                                    },
                                    "& .MuiFormLabel-root": {
                                        color: '#ff5252'
                                    }
                                },
                            }
                        }
                    />
                </Box>
            </Box>
        </>
    );
}
