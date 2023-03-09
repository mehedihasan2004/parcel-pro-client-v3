import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "Email", minWidth: 100 },
  {
    id: "population",
    label: "Role",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Say Thanks",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`https://parcel-pro-server.vercel.app/users`)
      .then((res) => res.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.error("Error", err));
  }, []);

  const sayThanks = (user) => {
    toast.info(`${user} Thanks for stay with us.`, {
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
            {allUsers.map((user) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={user._id}>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {user.user_category}
                  </TableCell>

                  <TableCell style={{ textAlign: "center" }}>
                    {" "}
                    <Button
                      onClick={() => sayThanks(user.userName)}
                      variant="outlined"
                    >
                      Say Thanks
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

export default Users;
