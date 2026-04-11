import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/redux/cartSlice";

const womenProducts = [
    {
        id: "women-1",
        title: "Traditional Sarees",
        price: 899,
        image: "/images/Women/Traditional Sarees.jpg",
    },
    {
        id: "women-2",
        title: "Modern Churidars",
        price: 1299,
        image: "/images/Women/Modern Churidars.jpg",
    },
    {
        id: "women-3",
        title: "Jeans T Short Combo",
        price: 999,
        image: "/images/Women/Jeans T Short Combo.jpg",
    },
];

export default function Women() {
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
                    Women's Garments
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {womenProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={product.image}
                                    alt={product.title}
                                    sx={{ objectFit: "cover" }}
                                />

                                <CardContent>
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        {product.title}
                                    </Typography>

                                    <Typography sx={{ fontWeight: "bold", mb: 2 }}>
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