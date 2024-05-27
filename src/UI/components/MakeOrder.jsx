import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import styles from './Text.module.css'; // Импорт CSS-модуля

function MakeOrder() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [phone, setPhone] = useState(''); // Начальное значение для номера телефона


    const validateName = (name) => {
        const regex = /^[a-zA-Zа-яА-ЯёЁ]*$/; // Убрано \s, чтобы не допускать пробелы
        return regex.test(name);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^8\d{10}$/; // Регулярное выражение для проверки номера телефона
        return regex.test(phoneNumber);
    };
    
    const checkFormValidity = () => {
        const nameValid = validateName(name);
        const emailValid = email.includes('@');
        const phoneValid = validatePhoneNumber(phone);
        const messageValid = message.trim().length > 0;
        setIsFormValid(phoneValid && nameValid && emailValid  && messageValid);
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
        }else if (name === 'phone') {
            setPhone(value);
            checkFormValidity();
          }
      };
    

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsFormValid(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Имя:', name);
        console.log('Email:', email);
        console.log('Телефон:', phone);
        console.log('Сообщение:', message);
        resetForm();
    };
    return (
        <div>
            <Typography variant="h4" sx={{ textAlign: 'center', marginTop: '40px' }}> Оформление заказа</Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    className={styles.text}
                    fullWidth
                    label="Ваше Имя"
                    variant="outlined"
                    value={name}
                    onChange={handleInputChange}
                    sx={{ marginTop: '20px' }}
                    name="name"
                    helperText={!isFormValid && name && !validateName(name) ? 'Имя может содержать только буквы и пробелы' : ''}
                />

                <TextField
                    fullWidth
                    label="Электронная почта"
                    variant="outlined"
                    value={email}
                    onChange={handleInputChange}
                    sx={{ marginTop: '15px' }}
                    name="email"
                    helperText={!isFormValid && email && !email.includes('@') ? 'Email должен содержать символ @' : ''}
                />
              <TextField
                    fullWidth
                    label="Телефон"
                    variant="outlined"
                    value={phone}
                    onChange={handleInputChange}
                    sx={{ marginTop: '15px' }}
                    name="phone"
                    helperText={!isFormValid && phone && !validatePhoneNumber(phone)? 'Номер телефона должен начинаться с 8 и содержать ровно 11 цифр' : ''}

                />
                <TextField
                    fullWidth
                    label="Адрес"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={message}
                    onChange={handleInputChange}
                    sx={{ marginTop: '15px' }}
                    name="message"
                    helperText={!isFormValid && message && message.trim().length === 0 ? 'Сообщение не может быть пустым' : ''}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '20px' }}
                    disabled={!isFormValid}
                >
                    Оформить заказ
                </Button>
            </form>
        </div>
    );
}

export default MakeOrder;
