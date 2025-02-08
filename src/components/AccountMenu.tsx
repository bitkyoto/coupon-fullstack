import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuItem = (path:string) => {
        setAnchorEl(null)
        navigate(path)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const {username, isLogged} = useSelector((state) => state.authSlice)
    return (
        <>
            <IconButton sx={{'&:hover': {bgcolor: '#ff0000'}}} onClick={handleClick}>
                <MenuIcon sx={{color: 'white',}}/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuItem('/profile')}>
                    <Typography variant='body1' /> Мой профиль 
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography variant='body1' /> Корзина
                </MenuItem>
                {isLogged && 
                <MenuItem onClick={handleClose}>
                    <Typography variant='body1' /> Выйти
                </MenuItem>}
            </Menu>
        </>
    );
}
