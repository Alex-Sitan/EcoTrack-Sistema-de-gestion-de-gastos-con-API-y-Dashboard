const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Rutas
app.use(require("./routes/gastos.routes"));
app.use(require("./routes/vista.routes"));
app.use(require("./routes/delete.routes"));
app.use(require("./routes/api.routes"));
app.use(require("./routes/notfound.routes"));

app.listen(3000, () =>
    console.log("Servidor corriendo en http://127.0.0.1:3000")
);
