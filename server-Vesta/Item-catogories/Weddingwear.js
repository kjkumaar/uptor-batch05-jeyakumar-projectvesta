const express = require("express");
const WeddingRouter = express.Router();
const {getItemWedding} = require("../database");

WeddingRouter.get("/", async (req, res) => {
    try {
        const result = await getItemWedding();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Wedding wear items" });
    }
});

module.exports = WeddingRouter;