import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import moment from "moment";
import onlineDelivery from "../../../assets/online-delivery.jpg";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../contexts/AuthProvider";

const ParcelInfo = () => {
  const [parcel_type, setParcelType] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const { navigate } = useAuthContext();

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
        charge: parseFloat(product_weight * 80),
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
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/001/990/179/original/online-delivery-service-background-concept-e-commerce-concept-red-scooter-smartphone-and-map-pin-illustration-free-vector.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: {
          lg: "3rem 7rem",
          sm: "3rem 7rem",
        },
      }}
    >
      <Box
        sx={{
          width: "25rem",
          height: {
            lg: "80vh",
            md: "80vh",
          },
          background: "#ffffff",
          padding: "1rem",
          borderRadius: "10px",
          // marginTop: '5rem',
          // marginLeft: {
          //  lg: '4rem'
          // },
          // margin: '70px 100px'
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

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ParcelInfo;
