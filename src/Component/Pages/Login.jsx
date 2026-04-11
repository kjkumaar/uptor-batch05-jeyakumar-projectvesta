import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../LoginContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSignin = () => {
    if (email === "mathi@yalabs.tech" && password === "admin") {
      localStorage.setItem("isLoggedin", "true");
      setLoggedIn(true);
      navigate("/"); // ✅ go to home after login
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)"
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: "350px",
          borderRadius: "12px",
          textAlign: "center"
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Login
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSignin}
        >
          Sign In
        </Button>

        <Typography sx={{ mt: 2, fontSize: "14px", color: "gray" }}>
          Use: <b>mathi@yalabs.tech</b> / <b>admin</b>
        </Typography>
      </Paper>
    </Box>
  );
}

export default Login;