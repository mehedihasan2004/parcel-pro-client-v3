import React from "react";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import parcelHandOver from '../../../assets/parcel-hand-over.jpg';

const ParcelInfo = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <Box sx={{
    width: '100%',
    height: {
      lg: '100vh'
    },
    // bgcolor: 'red'
    backgroundImage: `url(${parcelHandOver})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}>

    <Typography variant="h3" align="center">
      Parcel product info
    </Typography>

    <Box sx={{
      width: '30rem',
      margin: '10px auto',
      background: '#fefae0',
      padding: '20px',
      borderRadius: '5px',
      // border: '2px solid red'

    }}>
      <form action="">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <Box>
            <TextField type={'email'} id="standard-basic" label="Sender email" variant="outlined" style={{ width: '100%', marginBottom: '0.5rem' }} />
            <TextField type={'text'} id="standard-basic" label="Sender phone" variant="outlined" style={{ width: '100%' }} />
          </Box>
          <Box>
            <TextField type={'email'} id="standard-basic" label="Receiver email" variant="outlined" style={{ width: '100%', marginBottom: '0.5rem' }} />
            <TextField type={'text'} id="standard-basic" label="Receiver phone" variant="outlined" style={{ width: '100%' }} />
          </Box>
        </Box>
        <TextField type={'text'} id="standard-basic" label="Sender location" variant="standard" style={{ width: '100%' }} />
        <TextField type={'text'} id="standard-basic" label="Receiver location" variant="standard" style={{ width: '100%' }} />
        <TextField type={'number'} id="standard-basic" label="Product weight" variant="filled" style={{ width: '100%', marginTop: '1rem' }} />

        <Box sx={{
          my: '1rem'

        }}>
          <InputLabel id="demo-simple-select-standard-label">Chose your parcel type</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Parcel type"
            style={{ width: '100%' }}
          >

            <MenuItem value={10}>Food</MenuItem>
            <MenuItem value={20}>Electronics</MenuItem>
            <MenuItem value={30}>Documents</MenuItem>
            <MenuItem value={30}>Others</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-standard-label">Chose your payment method</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Parcel type"
            style={{ width: '100%' }}
          >

            <MenuItem value={10}>stripe</MenuItem>
            <MenuItem value={20}>Cash on delivery</MenuItem>

          </Select>
        </Box>

        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </form>
    </Box>

  </Box>;

};

export default ParcelInfo;
