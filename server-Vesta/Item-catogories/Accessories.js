const express = require("express");
const accessoriesRouter = express.Router();
const { getItemAccessories } = require("../database");

accessoriesRouter.get("/", async (req, res) => {
    try {
        const result = await getItemAccessories();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch accessories items" });
    }
});

module.exports = accessoriesRouter;