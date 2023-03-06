import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

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





export default function TableForPendingOrders({pendingOrders}) {
  console.log(pendingOrders)
  
 
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  
                  style={{ minWidth: column.minWidth,textAlign:"center" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingOrders
              
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>{row.sender_email}</TableCell>
                  <TableCell>{row.payment_method}</TableCell>
                  <TableCell style={{textAlign:"center"}}>{row.product_weight}</TableCell>
                  <TableCell style={{textAlign:"center"}}>{row.state}</TableCell>
                 <TableCell style={{textAlign:"center"}}> <Button variant="outlined">Complete</Button></TableCell>
                 
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     
    </Paper>
  );
}
