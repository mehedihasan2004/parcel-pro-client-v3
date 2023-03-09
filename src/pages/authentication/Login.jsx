import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import Typography from '@mui/material/Typography';
import { Box, Button } from "@mui/material";

const Login = () => {
  const { login, navigate, from } = useAuthContext();
  const provider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Error", err));
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((err) => console.error("Error", err));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "384px",
          margin: "64px 0",
          backgroundColor: "#FFFFFF",
          border: "1px dashed lightgray",
          padding: "1rem",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleSubmit} style={{}}>
          <div>
            <p style={{ fontWeight: "bold" }}>Enter Email</p>
            <input
              type="email"
              name="email"
              required
              style={{
                width: "100%",
                height: "3rem",
                fontSize: "1rem",
                padding: "0 1rem",
              }}
            />
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Password</p>
            <input
              type="password"
              name="password"
              required
              style={{
                width: "100%",
                height: "3rem",
                fontSize: "1rem",
                padding: "0 1rem",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="submit"
              value="Login"
              style={{
                width: "30%",
                height: "3rem",
                fontSize: "1rem",
                padding: "0 1rem",
                marginTop: "1rem",
                backgroundColor: "#0076BE",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
                color: '#ffffff'
              }}
            />
          </div>
          <p style={{ textAlign: "center" }}>
            Haven't any account?{" "}
            <Link style={{ color: "#0076BE" }} to="/sign-up">
              Sign Up
            </Link>
          </p>
        </form>
        <Typography align="center">Or</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button variant="contained" onClick={googleLogin}>Continue With Google</Button>
        </Box>
      </div>
    </div>
  );
};

export default Login;
