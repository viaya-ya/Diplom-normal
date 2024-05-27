import { IconButton, ListItem, Typography } from '@mui/material'
import React from 'react'
import Close from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux'
import { removeFromOrder } from '../../BLL/Cart';

export default function BasketItem({ id, description,author, price}) {
    const dispatch = useDispatch(); 
    return (
        <ListItem>
            <Typography
                variant='body1'>
                {description} {author} {price}руб.
            </Typography>
            <IconButton
                onClick={() => dispatch(removeFromOrder({id}))}
            >
                <Close></Close>
            </IconButton>
        </ListItem>
    )
}
