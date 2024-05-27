import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeFromOrder } from '../../BLL/Cart';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Text.module.css'; // Импорт CSS-модуля
import { useNavigate } from 'react-router-dom'; // Импорт useNavigate

export default function BasketLink() {
  const baskets = useSelector(state => state.carts.basket);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false); // Состояние для отслеживания открытого ли модальное окно
  const navigate = useNavigate(); // Получаем функцию навигации
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const order = () => {
    navigate('/basket/makeOrder'); // Перенаправление на страницу оформления заказа
  }

  return (
    <> <Typography variant='h4' sx={{ marginTop: '20px' }}>Корзина</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {!baskets.length
          ? <Typography variant='h7' sx={{ color: 'red', marginLeft: '50px' }} >Ваша корзина пуста </Typography>
          : baskets.map((basket) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={basket.id}>
              <Card sx={{
                height: '100%',
                boxShadow: 1, // Добавляем тень по умолчанию
                borderRadius: '10px',
                '&:hover': { // Эффект при наведении
                  boxShadow: 5, // Увеличиваем тень при наведении
                  cursor: 'pointer'
                }
              }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={basket.img}
                  title="Картинка"
                  onClick={handleOpen} // Открываем модальное окно при клике на картинку
                />
                <CardContent>
                  <Typography variant='h6' sx={{ fontFamily: 'Playfair Display' }}>{basket.description}</Typography>
                  <Typography variant='h6' sx={{ textDecoration: 'underline', fontFamily: 'Playfair Display' }}> {basket.author}</Typography>
                  <Typography variant='body1' sx={{ fontFamily: 'Playfair Display' }}> Цена: <span style={{ fontWeight: 'bold' }}>{basket.price} &#x20BD;</span> </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="text"
                    onClick={() => dispatch(removeFromOrder({ id: basket.id }))}
                  >
                    Удалить
                  </Button>
                </CardActions>
              </Card>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.text}>Подробнее о товаре</DialogTitle>
                <DialogContent>
                  <img src={basket.img} alt="Детальное изображение" style={{ width: '100%', height: 'auto' }} />
                  <Typography variant="body1" className={styles.text}>{basket.description}</Typography>
                  <Typography variant="body1" className={styles.text}>{basket.author}</Typography>
                  <Typography variant="body1" className={styles.text}>Цена: {basket.price} рублей</Typography>
                </DialogContent>
                <DialogActions>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                    }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogActions>
              </Dialog>
            </Grid>
          ))}
      </Grid>
      {baskets.length
        ? <Button
          sx={{ fontFamily: 'Playfair Display', marginTop: '20px', float: 'right' }}
          variant="contained"
          color="primary"
          onClick={() => order()}
        >
          Оформить
        </Button> : ''
      }
    </>
  );
}

