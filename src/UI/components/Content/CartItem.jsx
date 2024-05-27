  import React, { useState } from 'react';
  import Grid from '@mui/material/Grid';
  import { Button, Card, CardActions, CardContent, CardMedia, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
  import { useSelector } from 'react-redux';
  import { addCartBasket, removeCartBasket } from '../../../BLL/Cart';
  import { useDispatch } from 'react-redux';
  import CloseIcon from '@mui/icons-material/Close';
  import styles from '../Text.module.css'; // Импорт CSS-модуля

  export default function CartItem({ id, img, description, author, price, snackOpen }) {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.carts.basket);
    const isInBasket = basket.some(item => item.id === id);
    const [open, setOpen] = useState(false); // Состояние для отслеживания открытого ли модальное окно

    const handleBuy = () => {
      if (!isInBasket) {
        dispatch(addCartBasket({ id, description, author, price }));
        snackOpen();
      }
    };

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Grid item xs='12' md='3'>
        <Card sx={{ 
            height: '100%', 
            boxShadow: 1, // Добавляем тень по умолчанию
            borderRadius:'10px',
            '&:hover': { // Эффект при наведении
              boxShadow: 5, // Увеличиваем тень при наведении
              cursor:'pointer'
            }
          }}>
          <CardMedia
            sx={{ height: 140 }}
            image={img}
            title="Картинка"
            onClick={handleOpen} // Открываем модальное окно при клике на картинку
          />
          <CardContent>
            <Typography variant='h6' sx={{fontFamily:'Playfair Display'}}>{description}</Typography>
            <Typography variant='h6' sx={{ textDecoration: 'underline',fontFamily:'Playfair Display' }}> {author}</Typography>
            <Typography variant='body1' sx={{fontFamily:'Playfair Display'}}> Цена: <span style={{ fontWeight: 'bold' }}>{price} &#x20BD;</span> </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="text"
              onClick={handleBuy}
              disabled={isInBasket}
              className={styles.text}
            >
              Купить
            </Button>
          </CardActions>
        </Card>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={styles.text}>Подробнее о товаре</DialogTitle>
          <DialogContent>
            <img src={img} alt="Детальное изображение" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="body1" className={styles.text}>{description}</Typography>
            <Typography variant="body1" className={styles.text}>{author}</Typography>
            <Typography variant="body1" className={styles.text}>Цена: {price} рублей</Typography>
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
    );
  }
