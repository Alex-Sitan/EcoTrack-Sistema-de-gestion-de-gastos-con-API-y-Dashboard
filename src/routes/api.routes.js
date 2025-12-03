const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/api/datos", (req, res) => {
    // API con parámetros
    if (req.query.show && req.query.table) {

        const tables = ["Gastos_casa", "Gastos_personales", "Gastos_de_transporte"];
        if (!tables.includes(req.query.table)) {
            return res.json({ error: "Tabla inválida" });
        }

        if (req.query.id) {
            const id = parseInt(req.query.id, 10);
            if (isNaN(id)) return res.json({ error: "ID inválido" });

            const item = db.prepare(`SELECT * FROM ${req.query.table} WHERE id = ?`).get(id);
            return res.json({ item });
        }

        const all = db.prepare(`SELECT * FROM ${req.query.table}`).all();
        return res.json({ all });
    }

    // Datos para api.html
    const hoy = req.query.date_e || new Date().toLocaleDateString("en-CA");

    const casa = db.prepare("SELECT * FROM Gastos_casa WHERE Fecha_de_compra=?").all(hoy);
    const personal = db.prepare("SELECT * FROM Gastos_personales WHERE Fecha_de_compra=?").all(hoy);
    const transporte = db.prepare("SELECT * FROM Gastos_de_transporte WHERE Fecha_de_compra=?").all(hoy);

    function suma(arr) {
        return arr.reduce((ac, f) => {
            const n = parseFloat(f.Monto_Pagado.replace(/[^\d.]/g, ""));
            return ac + (isNaN(n) ? 0 : n);
        }, 0);
    }

    res.json({
        casa,
        personal,
        transporte,
        suma_c: suma(casa),
        suma_p: suma(personal),
        suma_t: suma(transporte),
        hoy
    });
});

module.exports = router;
