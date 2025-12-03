const express = require("express");
const router = express.Router();
const db = require("../db");
const { green, red, endColor } = require("../colors");

router.post("/dele", (req, res) => {
    const { id, id_p, id_t } = req.body;

    function eliminar(tabla, valor) {
        try {
            const result = db.prepare(`DELETE FROM ${tabla} WHERE id = ?`).run(valor);

            if (result.changes === 0) throw new Error;

            console.log(`DELETE /dele ${green}200${endColor} OK | id(${valor}) eliminado`);
            return res.status(200).json({ message: `ID(${valor}) eliminado correctamente` });

        } catch {
            console.log(`DELETE /dele ${red}404${endColor} Error | id(${valor}) no existe`);
            return res.status(404).json({ message: `El id(${valor}) no existe` });
        }
    }

    if (id) return eliminar("Gastos_casa", id);
    if (id_p) return eliminar("Gastos_personales", id_p);
    if (id_t) return eliminar("Gastos_de_transporte", id_t);

    res.status(400).json({ error: "Parámetros inválidos" });
});

module.exports = router;
