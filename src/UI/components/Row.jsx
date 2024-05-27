import React from 'react'

export default function Row() {
  return (
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
    <Burger />
    <Typography sx={{ fontFamily: 'Playfair Display' }}>Стили</Typography>
    <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    <Button
      sx={{ marginTop: '20px', fontFamily: 'Playfair Display' }}
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
  )
}
