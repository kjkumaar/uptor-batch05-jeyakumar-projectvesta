const express = require("express");
const menRouter = express.Router();
const { getItemMen } = require("../database");

menRouter.get("/", async (req, res) => {
    try {
        const result = await getItemMen();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch men items" });
    }
});

module.exports = menRouter;