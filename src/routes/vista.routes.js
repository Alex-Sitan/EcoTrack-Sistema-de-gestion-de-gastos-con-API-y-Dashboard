const express = require("express");
const router = express.Router();
const db = require("../db");

function sumar(arr) {
    return arr.reduce((ac, f) => {
        const clean = f.Monto_Pagado.replace(/[^\d.]/g, "");
        const n = parseFloat(clean);
        return ac + (isNaN(n) ? 0 : n);
    }, 0);
}

router.get("/vista", (req, res) => {
    const hoy = new Date().toLocaleDateString("en-CA");

    try {
        const casa = db.prepare("SELECT * FROM Gastos_casa WHERE Fecha_de_compra=?").all(hoy);
        const personal = db.prepare("SELECT * FROM Gastos_personales WHERE Fecha_de_compra=?").all(hoy);
        const transporte = db.prepare("SELECT * FROM Gastos_de_transporte WHERE Fecha_de_compra=?").all(hoy);

        res.render("vista", {
            casa,
            personal,
            transporte,
            suma_c: sumar(casa),
            suma_p: sumar(personal),
            suma_t: sumar(transporte),
            hoy
        });
    } catch (err) {
        res.send("Error al cargar los datos " + err);
    }
});

router.post("/vista", (req, res) => {
    const hoy = req.body.date_efc || new Date().toLocaleDateString("en-CA");

    try {
        const casa = db.prepare("SELECT * FROM Gastos_casa WHERE Fecha_de_compra=?").all(hoy);
        const personal = db.prepare("SELECT * FROM Gastos_personales WHERE Fecha_de_compra=?").all(hoy);
        const transporte = db.prepare("SELECT * FROM Gastos_de_transporte WHERE Fecha_de_compra=?").all(hoy);

        res.render("vista", {
            casa,
            personal,
            transporte,
            suma_c: sumar(casa),
            suma_p: sumar(personal),
            suma_t: sumar(transporte),
            hoy
        });
    } catch (err) {
        res.send("Error al cargar los datos " + err);
    }
});

module.exports = router;
