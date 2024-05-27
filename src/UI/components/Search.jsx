import { TextField } from '@mui/material';
import React from 'react';

export default function Search(props) {
    const { value, onChange } = props;
    return (
        <TextField
            type='search'
            variant='standard'
            label='Поиск'
            fullWidth
            value={value}
            onChange={onChange}
            sx={{ mt: 2, height: '40px', width: '49%' }} // Уменьшаем высоту и ширину
            placeholder='Введите имя автора или описание картины'
        ></TextField>
    );
}
