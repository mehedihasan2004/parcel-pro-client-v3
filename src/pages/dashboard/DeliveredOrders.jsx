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

const DeliveredOrders = () => {
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  useEffect(() => {
    fetch("https://parcel-pro-server.vercel.app/delivered_orders")
      .then((res) => res.json())
      .then((data) => setDeliveredOrders(data))
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
              {deliveredOrders.map((order) => {
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
                      <Button variant="outlined">Send</Button>
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

export default DeliveredOrders;
