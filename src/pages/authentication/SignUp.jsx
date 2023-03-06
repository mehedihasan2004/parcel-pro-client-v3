import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { signUp, updateUser, navigate, from } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const email = e.target.email.value;
    const imageUrl = e.target.image.value;
    const password = e.target.password.value;

    signUp(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
        updateUser({ displayName: userName, photoURL: imageUrl })
          .then(() => {
            saveUserToDB(userName, email, imageUrl, password);
          })
          .catch((err) => console.error("Error", err));
      })
      .catch((err) => console.error("Error", err));
  };

  const saveUserToDB = (userName, email, imageUrl, password) => {
    fetch("https://parcel-pro-server.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        imageUrl,
        role: "user",
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
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
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{}}>
          <div style={{ width: "100%" }}>
            <p style={{ fontWeight: "bold" }}>Your Name</p>
            <input
              type="text"
              name="name"
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
            <p style={{ fontWeight: "bold" }}>Image Url</p>
            <input
              type="text"
              name="image"
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
              value="Sing Up"
              style={{
                width: "30%",
                height: "3rem",
                fontSize: "1rem",
                padding: "0 1rem",
                marginTop: "1rem",
                backgroundColor: "cyan",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
              }}
            />
          </div>
          <p style={{ textAlign: "center" }}>
            Already have an account{" "}
            <Link style={{ color: "cyan" }} to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
