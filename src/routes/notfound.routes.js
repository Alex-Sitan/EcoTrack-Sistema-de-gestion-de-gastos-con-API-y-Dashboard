const express = require("express");
const router = express.Router();

router.get("/:des", (req, res) => {
    res.send(`La página ${req.params.des} no existe`);
});

module.exports = router;
