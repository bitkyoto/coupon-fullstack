import { Box, FormControl, MenuItem, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { setFilter } from '../redux/filterSlice';
import { useDispatch } from 'react-redux';
export default function ProductFilter() {
    const [filter, setFilter_] = useState('Популярные');
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setFilter_(event.target.value);
    };
    const minmin = 0;
    const maxmax = 1000;
    const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);

    const handlePriceRangeChange = (event, newValue) => {
        setPriceRangeValue(newValue);
    };
    useEffect(() => {
        dispatch(setFilter(filter));
    }, [filter, dispatch]);
    return (
        <>
            <FormControl sx={{ mb: 3 }}>
                <Select
                    value={filter}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        bgcolor: '#ff5252',
                        color: 'white',
                        minWidth: 'max-content',
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
            <Slider
        getAriaLabel={() => "Price range"}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minmin}
        max={maxmax}
      />
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <TextField
          label="min"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={priceRangeValue[0]}
          onChange={(e) => {
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
        />
        <Typography>-</Typography>
        <TextField
          label="max"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={priceRangeValue[1]}
          onChange={(e) => {
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
        </>
    );
}
