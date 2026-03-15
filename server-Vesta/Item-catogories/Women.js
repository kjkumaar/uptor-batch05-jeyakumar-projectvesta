const express = require("express");
const womenRouter = express.Router();
const {getItemWomen } = require("../database");

womenRouter.get("/", async (req, res) => {
    try {
        const result = await getItemWomen();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Silk items" });
    }
});

module.exports = womenRouter;