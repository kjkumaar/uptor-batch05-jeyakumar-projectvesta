import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../assets/redux/cartSlice";


const menProducts = [
    {
        id: "men-1",
        title: "Men's Cotton Shirt",
        price: 899,
        image: "/images/MenGarments/Shirt.png",
    },
    {
        id: "men-2",
        title: "Men's Slim Fit Jeans",
        price: 1299,
        image: "/images/MenGarments/Pant.png",
    },
    {
        id: "men-3",
        title: "Men's Formal Shirt",
        price: 999,
        image: "/images/MenGarments/Formal.png",
    },
    {
        id: "men-4",
        title: "Men's Casual T-Shirt",
        price: 499,
        image: "/images/MenGarments/Tshirt.png",
    },
    {
        id: "men-5",
        title: "Men's Jacket",
        price: 1999,
        image: "/images/MenGarments/Jacket.png",
    },
    {
        id: "men-6",
        title: "Men's Kurta",
        price: 1499,
        image: "/images/MenGarments/Kurta.png",
    },
];

export default function MenGarments() {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
                Men's Garments
            </Typography>

            <Grid container spacing={3}>
                {menProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={product.image}
                                alt={product.title}
                            />

                            <CardContent>
                                <Typography variant="h6">{product.title}</Typography>

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
    );
}