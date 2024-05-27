import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import styles from './UI/components/Text.module.css'; // Импорт CSS-модуля

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateName = (name) => {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]*$/; // Убрано \s, чтобы не допускать пробелы
    return regex.test(name);
  };
  

  const checkFormValidity = () => {
    const nameValid = validateName(name);
    const emailValid = email.includes('@');
    const messageValid = message.trim().length > 0;
    setIsFormValid(nameValid && emailValid && messageValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
      checkFormValidity();
    } else if (name === 'email') {
      setEmail(value);
      checkFormValidity();
    } else if (name === 'message') {
      setMessage(value);
      checkFormValidity();
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setIsFormValid(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);
    resetForm();
  };

  return (
    <Grid container sx={{ marginTop: '40px'}} columnSpacing={30}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{fontFamily:'Playfair Display' }}>Пишите нам по любым вопросам</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
          className={styles.text}
            fullWidth
            label="Имя"
            variant="outlined"
            value={name}
            onChange={handleInputChange}
            sx={{ marginTop: '20px' }}
            name="name"
            helperText={!isFormValid && name &&!validateName(name)? 'Имя может содержать только буквы и пробелы' : ''}
          />

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleInputChange}
            sx={{ marginTop: '15px' }}
            name="email"
            helperText={!isFormValid && email &&!email.includes('@')? 'Email должен содержать символ @' : ''}
          />
          <TextField
            fullWidth
            label="Сообщение"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={handleInputChange}
            sx={{ marginTop: '15px' }}
            name="message"
            helperText={!isFormValid && message && message.trim().length === 0? 'Сообщение не может быть пустым' : ''}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!isFormValid}
            sx={{ marginTop: '15px',fontFamily:'Playfair Display' }}
          >
            Отправить
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={styles.text}  sx={{ fontWeight: 'bold',fontFamily:'Playfair Display'}}>Контакты</Typography>
        <Typography variant="body1" sx={{ marginTop: '20px', fontWeight: 'bold',fontFamily:'Playfair Display'  }} className={styles.text}>
          Электронная почта: <a href="mailto:art@borsch.gallery"> <span style={{ fontWeight: 'normal' }}>art@borsch.gallery</span></a>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '5px', fontWeight: 'bold',fontFamily:'Playfair Display'}} className={styles.text}>
          Телефоны (пн-пт с 10:00 до 20:00): <a href="tel:+79787512027" className={styles.text}><span style={{ fontWeight: 'normal' }}> +7 (978) 751-20-27 </span> </a>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '5px', fontWeight: 'bold',fontFamily:'Playfair Display'}} className={styles.text}>
          Профессиональное сотрудничество с дизайнерами
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
