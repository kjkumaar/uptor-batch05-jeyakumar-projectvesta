import { Box, Button, TextField, Typography } from "@mui/material";
import LoginBg from "../assets/login_background.png";
import Hero from "../assets/hero.png";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { setLoggedIn } = useContext(LoginContext);

  function handleSignin() {
    if (email === "mathi@yalabs.tech" && password === "admin") {
      localStorage.setItem("isLoggedin", true);
      setLoggedIn(true);
    } else {
      alert("Credentials are invalid");
    }
  }

  function onChange(event) {
    if (event.target.type === "password") {
      setPassword(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #FFF2E6 0%, #FFE0D1 100%)",
        overflow: "hidden",
        padding: 2,
      }}
    >
      {/* Decorative Background Texture */}
      <Box
        component="img"
        src={LoginBg}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "55%",
          opacity: 0.25,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* Main Card Section */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1150px",
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: "24px",
          backdropFilter: "blur(14px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE - LOGIN */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            padding: "50px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "rgba(255,255,255,0.75)",
            boxShadow: "inset 0 0 60px rgba(255,255,255,0.6)",
          }}
        >
          {/* Logo Area */}
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#D46B41",
              marginBottom: 3,
              letterSpacing: "1px",
            }}
          >
            FashionStore
          </Typography>

          <Typography
            sx={{
              fontSize: "34px",
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            Welcome Back
          </Typography>

          <Typography sx={{ color: "#555", marginBottom: 3 }}>
            Login to continue shopping the latest trends.
          </Typography>

          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={onChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />

          <TextField
            type="password"
            label="Password"
            fullWidth
            onChange={onChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />

          <Typography
            sx={{
              textAlign: "right",
              fontSize: "14px",
              color: "#D46B41",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D46B41",
              height: "50px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              marginTop: 2,
              ":hover": { backgroundColor: "#c25932" },
            }}
            onClick={handleSignin}
          >
            Sign In
          </Button>

          <Typography sx={{ textAlign: "center", color: "#666", marginTop: 2 }}>
            Or continue with
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: 1,
            }}
          >
            {/* Social Buttons */}
            {["G", "F", "A"].map((item) => (
              <Box
                key={item}
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: "18px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Typography sx={{ textAlign: "center", marginTop: 3, color: "#444" }}>
            Don’t have an account?{" "}
            <span
              style={{
                color: "#D46B41",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Register for Free
            </span>
          </Typography>
        </Box>

        {/* RIGHT SIDE - HERO IMAGE */}
        <Box
  sx={{
    width: { xs: "0%", md: "55%" },
    backgroundColor: "#FEEAE2",
    padding: 4,
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    alignItems: "center",
  }}
>
          <Box
            component="img"
            src={Hero}
            sx={{
              width: "95%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Login; 