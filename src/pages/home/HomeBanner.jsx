import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import appStore from '../../assets/app-store.png';
import playStore from '../../assets/play-store.jpg';
import { MobileAppAnimation } from '../../components';
import { Button, Container, Modal } from '@mui/material';
import BannerAnimation from '../../components/BannerAnimation';
import { Link } from 'react-router-dom';



const HomeBanner = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Container>
      <Box sx={{
        width: '100%',
        height: '100vh',
        marginTop: '50px',
        display: 'grid',
        placeItems: 'center'
      }}>

        <Grid container>
          <Grid item xs={12} md={6} lg={6} style={{ background: 'white', padding: '20px' }}>
            <Typography variant='h3' gutterBottom style={{ fontWeight: 'bold' }}>
            <span style={{color: '#0076BE'}}>P</span>arcel <span style={{color: '#0076BE'}}>P</span>ro provides a <span style={{color: '#0076BE'}}>Convenient</span>   and <span style={{color: '#0076BE'}}>Reliable</span> way to manage package deliveries
            </Typography>
            
            <Box style={{  marginTop: '3rem' }}>
            <Button onClick={handleOpen}  variant="contained" sx={{ m: 0 }}>
              Get Started
            </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6} style={{ background: 'white' }}>

            <BannerAnimation />
          </Grid>

        </Grid>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Choose your preferred way
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If you want to send your parcel in online select online otherwise
            continue with manual.
          </Typography>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginTop: ".5rem",
            }}
          >
            <Link to="/manual-way">
              <Button variant="contained">Manual</Button>
            </Link>
            <Link to="/online-way">
              <Button variant="contained">Online</Button>
            </Link>
          </Box>
        </Box>
      </Modal>
      </Box>
    </Container>
  );
};

export default HomeBanner;