import React from "react";
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Button,
    Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../assets/redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // ✅ EMPTY CART ALERT
    if (cartItems.length === 0) {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        px: 4,
                        transition: "0.3s",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                    onClick={() => navigate("/")}
                >
                    Continue Shopping
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: "900px", mx: "auto", p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                Shopping Cart
            </Typography>

            {cartItems.map((item) => (
                <Card key={item.id} sx={{ display: "flex", mb: 2 }}>
                    <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{ width: 140 }}
                    />

                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                            ₹{item.price}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                            <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                                <RemoveIcon />
                            </IconButton>

                            <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>

                            <IconButton onClick={() => dispatch(addToCart(item))}>
                                <AddIcon />
                            </IconButton>

                            <IconButton
                                color="error"
                                sx={{ ml: "auto" }}
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            ))}

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ textAlign: "right" }}>
                Total: ₹{totalAmount}
            </Typography>

            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Proceed to Checkout
            </Button>
        </Box>
    );
}