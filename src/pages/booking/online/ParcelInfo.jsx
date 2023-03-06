import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import parcelHandOver from '../../../assets/parcel-hand-over.jpg';
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import moment from "moment";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../contexts/AuthProvider";

const ParcelInfo = () => {
  const [parcel_type, setParcelType] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const { navigate } = useAuthContext();

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
      
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const sender_email = from.sender_email.value;
    const sender_phone = from.sender_phone.value;
    const receiver_email = from.receiver_email.value;
    const receiver_phone = from.receiver_phone.value;
    const sender_location = from.sender_location.value;
    const receiver_location = from.receiver_location.value;
    const product_weight = from.product_weight.value;

    fetch(`https://parcel-pro-server.vercel.app/parcel_info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_email,
        sender_phone,
        receiver_email,
        receiver_phone,
        sender_location,
        receiver_location,
        product_weight,
        parcel_type,
        payment_method,
        pressed_time: moment().format("MMM Do YY"),
        state: "pending",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your booking is submitted !!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };


  return (
    <div>
      Parcel product information
      <Box
        sx={{
          width: "30rem",
          margin: "10px auto",
          background: "#dad7cd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Box>
              <TextField
                name="sender_email"
                type={"email"}
                id="standard-basic"
                label="Sender email"
                variant="outlined"
                style={{ width: "100%", marginBottom: "0.5rem" }}
              />
              <TextField
                name="sender_phone"
                type={"text"}
                id="standard-basic"
                label="Sender phone"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
            <Box>
              <TextField
                name="receiver_email"
                type={"email"}
                id="standard-basic"
                label="Receiver email"
                variant="outlined"
                style={{ width: "100%", marginBottom: "0.5rem" }}
              />
              <TextField
                name="receiver_phone"
                type={"text"}
                id="standard-basic"
                label="Receiver phone"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
          <TextField
            name="sender_location"
            type={"text"}
            id="standard-basic"
            label="Sender location"
            variant="standard"
            style={{ width: "100%" }}
          />
          <TextField
            name="receiver_location"
            type={"text"}
            id="standard-basic"
            label="Receiver location"
            variant="standard"
            style={{ width: "100%" }}
          />

          <TextField
            name="product_weight"
            type={"number"}
            id="standard-basic"
            label="Product weight"
            variant="filled"
            style={{ width: "100%", marginTop: "1rem" }}
          />

          <Box
            sx={{
              my: "1rem",
            }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Chose your parcel type
            </InputLabel>
            <Select
              name="parcel_type"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={(e) => setParcelType(e.target.value)}
              label="Parcel type"
              style={{ width: "100%" }}
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Documents">Documents</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
            <InputLabel id="demo-simple-select-standard-label">
              Chose your payment method
            </InputLabel>
            <Select
              name="payment_method"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              onChange={(e) => setPaymentMethod(e.target.value)}
              label="Parcel type"
              style={{ width: "100%" }}
            >
              <MenuItem value="Stripe">Stripe</MenuItem>
              <MenuItem value="Cash on Delivery">Cash on delivery</MenuItem>
            </Select>
          </Box>


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


          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );

};

export default ParcelInfo;
