import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const columns = [
  { id: "name", label: "Sender-Email", minWidth: 170 },
  { id: "code", label: "Payment-Method", minWidth: 100 },
  {
    id: "population",
    label: "Product-Weight",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Complete",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

const PickUpDriver = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://parcel-pro-server.vercel.app/pickup_orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const acceptOrder = (order) => {
    toast.success("Order Accepted !!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, textAlign: "center" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={order.code}>
                  <TableCell>{order.sender_email}</TableCell>
                  <TableCell>{order.payment_method}</TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {order.product_weight}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {order.state}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {" "}
                    <Button
                      onClick={() => acceptOrder(order)}
                      variant="outlined"
                    >
                      Accept
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PickUpDriver;
