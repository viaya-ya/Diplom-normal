import React from 'react';
import CartItem from './CartItem';
import Grid from '@mui/material/Grid';


export default function CartList({ snackOpen, sortCarts, click, searchQuery, carts }) {
 
  const filteredCarts = carts.filter(cart =>
    cart.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cart.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedCarts = sortCarts(filteredCarts);

  console.log("Filtered Carts:", filteredCarts); // Добавляем логирование для отладки

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {click
        ? sortedCarts.map((cart) => {
          return (
            <CartItem
              key={cart.id}
              snackOpen={snackOpen}
              {...cart}
            />
          );
        })
        : filteredCarts.map((cart) => {
          return (
            <CartItem
              key={cart.id}
              snackOpen={snackOpen}
              {...cart}
            />
          );
        })
      }
    </Grid>
  );
}
