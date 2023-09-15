import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Container } from "@mui/material";
import { useUserContext } from "../utils/UserContext";
import "./customcss.css";
const Form1: React.FC = () => {
  const { addUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const newUser = {
      id: Date.now(),
      name,
      email,
    };
    addUser(newUser);
    setName("");
    setEmail("");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <h2>User Registration</h2>

        <TextField
          fullWidth
          className="custom-textfield"
          label="Name"
          value={name}
          margin="normal"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          fullWidth
          className="custom-textfield"
          label="Email"
          value={email}
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default Form1;
