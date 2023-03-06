import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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

const AcceptedOrders = () => {
  const [acceptedOrders, setAcceptedOrders] = useState([]);

  console.log(acceptedOrders);

  const updateState = (id) => {
    fetch(`https://parcel-pro-server.vercel.app/delivered/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.info("Delivery confirmed !!", {
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
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://parcel-pro-server.vercel.app/accepted_orders")
      .then((res) => res.json())
      .then((data) => setAcceptedOrders(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
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
              {acceptedOrders.map((order) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order.code}
                  >
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
                        onClick={() => updateState(order._id)}
                        variant="outlined"
                      >
                        Delivered
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default AcceptedOrders;
