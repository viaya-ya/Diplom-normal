import React, { useState } from 'react';
import { Container } from '@mui/material';
import Search from './UI/components/Search';
import CartList from './UI/components/Content/CartList';
import { Button, Typography } from '@mui/material';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Burger from './UI/components/Burger.jsx';



export default function CatalogPage({ setSnackOpen, carts }) {
  const [sortOrder, setSortOrder] = useState('desc');
  const [click, setClick] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sortCarts = (carts) => {
    if (sortOrder === 'asc') {
      return [...carts].sort((a, b) => a.price - b.price);
    } else {
      return [...carts].sort((a, b) => b.price - a.price);
    }
  };

  console.log("Search Query:", searchQuery); // Добавляем логирование для отладки

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap:'100px' }}>
        <Burger />
        <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button
          sx={{fontFamily: 'Playfair Display',marginTop:'20px' }}
          variant="contained"
          color="primary"
          onClick={() => {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
            setClick(true);
          }}
          endIcon={click ? sortOrder === 'asc' ? <ArrowUpward /> : <ArrowDownward /> : ''}
        >
          Сортировать по цене
        </Button>
      </div>
      <CartList carts={carts} snackOpen={() => setSnackOpen(true)} sortCarts={sortCarts} click={click} searchQuery={searchQuery} />
    </Container>
  );

}
