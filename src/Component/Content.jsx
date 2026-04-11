import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import bgimage from "../assets/bgimage.jpg";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Showroom from "../assets/Showroom.png";

const cards = [
    { id: 1, title: "Men", description: "Shirts / Pants / Casuals / Formals" },
    { id: 2, title: "Women", description: "Traditional / Modern / Casuals" },
    { id: 3, title: "Kids", description: "Infants / Boys / Girls" },
    { id: 4, title: "Silks", description: "Kancheepuram / Banaras" },
    { id: 5, title: "Wedding Wear", description: "Bridal & Groom Collections" },
    { id: 6, title: "Accessories", description: "Belts / Hats / Watches" },
];

export default function SelectActionCard() {
    const navigate = useNavigate();
    const location = useLocation();
    const APP_BAR_HEIGHT = 70; // height of your fixed AppBar

    // Scroll to section if navigated from header
    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                const offset = -APP_BAR_HEIGHT;
                const top = element.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        }
    }, [location.state]);

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Home Section */}
            <div id="home" style={{ paddingTop: `${APP_BAR_HEIGHT + 30}px` }}></div>
            <Box sx={{ textAlign: "center", mt: 2, background: "orange", color: "white" }}>
                <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                    VESTA 
                    <div>
                        <img
                        src={Showroom}
                        alt="content"
                        style={{ width: "900px", borderRadius: "10px", marginTop: "20px" }}
                    />
                        </div>
                </Typography>
            </Box>

            {/* Products Section */}
            <div id="products" style={{ paddingTop: `${APP_BAR_HEIGHT + 20}px` }}></div>
            <Grid container spacing={30} justifyContent="center" sx={{ mt: 5, px: 3 }}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={3}>
                        <Card
                            onClick={() => {
                                if (card.title === "Men") navigate("/men");
                                 if (card.title === "Women") navigate("/women");
                                 if (card.title === "Kids") navigate("/Kids");
                                 if (card.title === "Silks") navigate("/Silks");
                                 if (card.title === "Wedding Wear") navigate("/Weddingwear");
                                 if (card.title === "Accessories") navigate("/Accessories");
                            }}
                            sx={{
                                height: 130,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: 3,
                                borderRadius: 2,
                                cursor: "pointer",
                            }}
                        >
                            <CardActionArea sx={{ background: "#1a559e", height: "100%" }}>
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="h6" color="white">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* About Section */}
            <div id="about" style={{ paddingTop: `${APP_BAR_HEIGHT + 20}px` }}></div>
            <Box sx={{ p: 4, color: "white", background: "orange" }}>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    VESTA is your trusted store for premium clothing and accessories. With an unwavering
                    commitment to quality, exclusivity, and diversity, we take pride in offering clothing
                    that is authentic, creative, and sophisticated. Our journey of excellence began over
                    90 years ago when K.V. Pothy Moopanar, our visionary founder, set up the first showroom
                    at Srivilliputtur. What started as a humble endeavor to craft cotton sarees, dhotis, and
                    towels has now grown into a legacy that embodies artistry, innovation, and a deep respect
                    for Indian culture.
                </Typography>
            </Box>

            {/* Contact Section */}
            <div id="contact" style={{ paddingTop: `${APP_BAR_HEIGHT + 20}px` }}></div>
            <Box sx={{ p: 4, color: "white", background: "orange" }}>
                <Typography variant="h3">Contact Us</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Email: support@vesta.com
                </Typography>
            </Box>
        </Box>
    );
}