import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

Let [Result, setResult]=useState()

export default function Counter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        margin: "50px auto",
      }}
    >
      <TextField label="First Field" variant="outlined" />
      <TextField label="Second Field" variant="outlined" />
      <Button variant="contained" color="primary">
        SUBMIT
      </Button>
      <Typography>Sum of 2 value is {Result}</Typography>
    </Box>
  );
}