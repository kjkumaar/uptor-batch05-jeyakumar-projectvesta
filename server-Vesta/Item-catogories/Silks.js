const express = require("express");
const silkRouter = express.Router();
const { getItemSilks } = require("../database");

silkRouter.get("/", async (req, res) => {
    try {
        const result = await getItemSilks();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Silk items" });
    }
});

module.exports = silkRouter;