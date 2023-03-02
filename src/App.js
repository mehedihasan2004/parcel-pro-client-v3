import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import AboutUs from "./pages/about_us/about_us/AboutUs";
import Careers from "./pages/about_us/careers/Careers";
import ContactUs from "./pages/about_us/contact_us/ContactUs";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Blog from "./pages/blog/Blog";
import ParcelInfo from "./pages/booking/online/ParcelInfo";
import Dashboard from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home";
import { lightTheme } from "./theme/theme";
const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about_us",
      element: <AboutUs />,
    },
    {
      path: "about_us_careers",
      element: <Careers />,
    },
    {
      path: "contact",
      element: <ContactUs />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "online-way",
      element: <ParcelInfo />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <div style={{ marginTop: "60px" }}>{routes}</div>
        <Footer />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
};

export default App;
