import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/redux/cartSlice";

const KidsProducts = [
    {
        id: "kids-1",
        title: "Infants collections",
        price: 899,
        image: "/images/Kids/Infant Collections.jpg",
    },
    {
        id: "kids-2",
        title: "Boys Collections",
        price: 1299,
        image: "/images/Kids/Boys.jpg",
    },
    {
        id: "kids-3",
        title: "Girls collections",
        price: 999,
        image: "/images/Kids/Girls.jpg",
    },
];

export default function Kids() {
const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    minHeight: "100vh",
                    p: 3,
                    backgroundColor: "#f9f9f9",
                }}
            >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                    Kids's Garments
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {KidsProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={product.image}
                                    alt={product.title}
                                    sx={{ objectFit: "cover", cursor: "pointer" }}
                                    onClick={() => navigate(`/kids/${product.id}`)} // ⭐ Navigate on image click
                                />

                                <CardContent>
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        {product.title}
                                    </Typography>

                                    <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
                                        ₹{product.price}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={() => handleAddToCart(product)} 
                                    >
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}