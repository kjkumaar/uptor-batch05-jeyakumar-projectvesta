const express = require("express");
const kidsRouter = express.Router();
const { getItemKids } = require("../database");

kidsRouter.get("/", async (req, res) => {
    try {
        const result = await getItemKids();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Kids items" });
    }
});

module.exports = kidsRouter;