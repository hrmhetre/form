import React from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useUserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";

const UserRecordsPage: React.FC = () => {
  const { users } = useUserContext();

  return (
    <div>
      <h2>User Details</h2>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button component={Link} to="/">
        Back to Login
      </Button>
    </div>
  );
};

export default UserRecordsPage;
