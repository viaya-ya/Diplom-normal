import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { List, Drawer, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button } from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem';
import {  useSelector } from 'react-redux';

export default function Basket(props) {
    const basket = useSelector(state => state.carts.basket)
    const {
        cartOpen,
        cartClose,
    } = props;
    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={cartClose}
        >
            <List sx={{ width: '300px' }}>
                <ListItem>
                    <ListItemIcon>
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                    </ListItemIcon>
                    <ListItemText primary="Корзина"></ListItemText>
                </ListItem>
                <Divider></Divider>
                {
                    !basket.length ? (
                        <ListItem>Корзина пуста!</ListItem>
                    )
                        : (
                            <>
                                {
                                    basket.map(item => {
                                       return (<BasketItem key={item.name} {...item} />) 
                                    })
                                }
                                <Divider> </Divider>

                                <ListItem>
                                    <Typography sx={{ fontWeight: 700 }}>
                                        Общая стоимость:{' '}
                                        {basket.reduce((acc, item) => {
                                            return acc + item.price;
                                        }, 0)}{' '}
                                        рублей.
                                    </Typography>
                                </ListItem>
                            </>
                        )
                }
            </List>
            <Button disabled={!basket.length}>Оформить</Button>
        </Drawer>
    )
}
