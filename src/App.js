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
import Manual from "./pages/booking/manual/Manual";
import ParcelInfo from "./pages/booking/online/ParcelInfo";
import AcceptedOrders from "./pages/dashboard/AcceptedOrders";
import Dashboard from "./pages/dashboard/Dashboard";
import DeliveredOrders from "./pages/dashboard/DeliveredOrders";
import MyOrders from "./pages/dashboard/MyOrders";
import PendingOrders from "./pages/dashboard/PendingOrders";
import Users from "./pages/dashboard/Users";
import { Home } from "./pages/home";
import AdminRoute from "./routes/AdminRoute";
import { lightTheme } from "./theme/theme";
import { ToastContainer } from "react-toastify";
import Pay from "./pages/payment/Pay";
import ProtectedRoute from "./routes/ProtectedRoute";
import BikeRider from "./pages/dashboard/our_heros/BikeRider";
import PickUpDriver from "./pages/dashboard/our_heros/PickUpDriver";
import CycleRider from "./pages/dashboard/our_heros/CycleRider";
import Riders from "./pages/dashboard/Riders";

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
      children: [
        {
          path: "/dashboard/users",
          element: (
            <AdminRoute>
              <Users />
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/pending-orders",
          element: (
            <AdminRoute>
              <PendingOrders />
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/accepted-orders",
          element: (
            <AdminRoute>
              <AcceptedOrders />
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/delivered-orders",
          element: (
            <AdminRoute>
              <DeliveredOrders />
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard/riders",
          element: (
            <AdminRoute>
              <Riders />
            </AdminRoute>
          ),
        },
        {
          path: "/dashboard",
          element: <MyOrders />,
        },
        {
          path: "/dashboard/cycle-rider",
          element: <CycleRider />,
        },
        {
          path: "/dashboard/bike-rider",
          element: <BikeRider />,
        },
        {
          path: "/dashboard/pickup-driver",
          element: <PickUpDriver />,
        },
      ],
    },
    {
      path: "online-way",
      element: (
        <ProtectedRoute>
          <ParcelInfo />
        </ProtectedRoute>
      ),
    },
    {
      path: "manual-way",
      element: <Manual />,
    },
    {
      path: "pay",
      element: <Pay />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <div style={{ marginTop: "80px" }}>{routes}</div>
        <Footer />
        <CssBaseline />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
