const express = require("express");
const router = express.Router();
const db = require("../db");
const { green, endColor } = require("../colors");

router.post("/house", (req, res) => {
    const { product, units, cost, date } = req.body;

    try {
        db.prepare(`
            INSERT INTO Gastos_casa(id, Adquirio, Unidades, Monto_Pagado, Fecha_de_compra)
            VALUES (NULL, ?, ?, ?, ?)
        `).run(product, units, cost, date);

        console.log(`POST /house ${green}200${endColor} | Gasto(casa) Registrado`);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ mensaje: "Error al registrar gasto de casa" });
    }
});

router.post("/personal", (req, res) => {
    const { product, units, cost, date } = req.body;

    try {
        db.prepare(`
            INSERT INTO Gastos_personales(id, Adquirio, Unidades, Monto_Pagado, Fecha_de_compra)
            VALUES (NULL, ?, ?, ?, ?)
        `).run(product, units, cost, date);

        console.log(`POST /personal ${green}200${endColor} | Gasto(personal) Registrado`);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ mensaje: "Error al registrar egresos personales" });
    }
});

router.post("/transport", (req, res) => {
    const { product, units, cost, date } = req.body;

    try {
        db.prepare(`
            INSERT INTO Gastos_de_transporte(id, Adquirio, Unidades, Monto_Pagado, Fecha_de_compra)
            VALUES (NULL, ?, ?, ?, ?)
        `).run(product, units, cost, date);

        console.log(`POST /transport ${green}200${endColor} | Gasto(transporte) Registrado`);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ mensaje: "Error al registrar gasto de transporte" });
    }
});

module.exports = router;
