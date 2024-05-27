import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './UI/components/Text.module.css'; // Импорт CSS-модуля

const ArtistsPage = () => {
  const artists = [
    {
      name: 'Иван Иванов',
      avatar: 'https://via.placeholder.com/150',
      paintings: [
        { title: 'Картина 1', image: 'https://via.placeholder.com/300' },
        { title: 'Картина 2', image: 'https://via.placeholder.com/300' },
        { title: 'Картина 3', image: 'https://via.placeholder.com/300' },
      ],
    },
    {
      name: 'Петр Петров',
      avatar: 'https://via.placeholder.com/150',
      paintings: [
        { title: 'Картина 4', image: 'https://via.placeholder.com/300' },
        { title: 'Картина 5', image: 'https://via.placeholder.com/300' },
        { title: 'Картина 6', image: 'https://via.placeholder.com/300' },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={styles.text} sx={{ width: 'calc(100vw-10px)', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', overflowX: 'auto', marginTop: '40px' }}>
      {artists.map((artist, index) => (
        <Card key={index} sx={{
          width: 'calc(100vw-10px)', margin: 2, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', boxShadow: 1, // Добавляем тень по умолчанию
          '&:hover': { // Эффект при наведении
            boxShadow: 5, // Увеличиваем тень при наведении
            cursor: 'pointer'
          }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
            <Typography variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Playfair Display' }}>
              {artist.name}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              image={artist.avatar}
              alt={artist.name}
              sx={{ borderRadius: '50%', width: '150px', height: '150px', marginRight: '16px', marginTop: '10px','&:hover': { // Эффект при наведении
                boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Добавляет тень при наведении
                cursor:'pointer'
              } }}
            />
          </Box>
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginLeft: '50px', marginTop: '10px', fontFamily: 'Playfair Display' }}>
              {artist.paintings.map((painting, paintingIndex) => (
                <CardMedia
                  component="img"
                  image={painting.image}
                  alt={painting.title}
                  sx={{ width: '120px', height: '120px', marginLeft: '50px',marginTop: '20px', cursor: 'pointer', borderRadius:'10px','&:hover': { // Эффект при наведении
                    boxShadow: 5, // Увеличиваем тень при наведении
                    cursor:'pointer'
                  } }}
                  onClick={() => handleOpen(painting.image)}
                />
              ))}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img src={selectedImage} alt="Selected" style={{ maxWidth: '90%', maxHeight: '90%', width: "500px", height: "500px" }} />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ArtistsPage;
