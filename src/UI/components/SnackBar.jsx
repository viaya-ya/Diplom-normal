import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

import React from 'react'

export default function SnackBar({ isOpen, handleClose }) {
    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <Alert
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                color = 'secondary'
            >
                Товар добавлен в корзину!
            </Alert>

        </Snackbar>
    )
}
