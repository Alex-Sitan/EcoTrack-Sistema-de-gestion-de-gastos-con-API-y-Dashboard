const path = require("path");
const Database = require("better-sqlite3");
const dbPATH = path.join(__dirname, "Economia_general.db")

const db = new Database(dbPATH);



db.prepare("CREATE TABLE IF NOT EXISTS Gastos_casa(id INTEGER PRIMARY KEY AUTOINCREMENT,Adquirio TEXT, Unidades TEXT,  Monto_Pagado TEXT, Fecha_de_compra TEXT)").run();
db.prepare("CREATE TABLE IF NOT EXISTS Gastos_de_transporte(id INTEGER PRIMARY KEY AUTOINCREMENT,Adquirio TEXT, Unidades TEXT, Monto_Pagado TEXT, Fecha_de_compra TEXT)").run();
db.prepare("CREATE TABLE IF NOT EXISTS Gastos_personales(id INTEGER PRIMARY KEY AUTOINCREMENT, Adquirio TEXT, Unidades TEXT, Monto_Pagado TEXT, Fecha_de_compra TEXT)").run();


// const ArrayCasa = [
//     ["Arroz", "2 kg", "45.00 Quetzales", "2025-12-03"],
//     ["Frijoles", "1 kg", "30.00 Quetzales", "2025-12-03"],
//     ["Aceite", "1 litro", "28.00 Quetzales", "2025-12-03"],
//     ["Leche", "3 litros", "60.00 Quetzales", "2025-11-04"],
//     ["Pan", "10 piezas", "25.00 Quetzales", "2025-11-05"],
//     ["Detergente", "1 caja", "40.00 Quetzales", "2025-11-06"],
//     ["Jabón", "5 barras", "35.00 Quetzales", "2025-11-07"],
//     ["Huevos", "12 unidades", "32.00 Quetzales", "2025-11-08"],
//     ["Azúcar", "2 kg", "36.00 Quetzales", "2025-11-09"],
//     ["Sal", "1 kg", "10.00 Quetzales", "2025-11-10"]
// ]

// const ArrayPersonal = [
//     ["Café", "2 tazas", "20.00 Quetzales", "2025-12-03"],
//     ["Libro", "1 unidad", "120.00 Quetzales", "2025-12-03"],
//     ["Ropa", "2 piezas", "250.00 Quetzales", "2025-12-03"],
//     ["Cine", "2 boletos", "80.00 Quetzales", "2025-11-04"],
//     ["Comida rápida", "1 combo", "55.00 Quetzales", "2025-11-05"],
//     ["Suscripción Netflix", "1 mes", "99.00 Quetzales", "2025-11-06"],
//     ["Zapatos", "1 par", "400.00 Quetzales", "2025-11-07"],
//     ["Corte de cabello", "1 servicio", "75.00 Quetzales", "2025-11-08"],
//     ["Videojuego", "1 unidad", "600.00 Quetzales", "2025-11-09"],
//     ["Café", "1 taza", "12.00", "2025-11-10"]
// ]

// const ArrayTransporte = [
//     ["Gasolina", "10 litros", "120.00 Quetzales", "2025-12-03"],
//     ["Taxi", "1 viaje", "50.00 Quetzales", "2025-12-03"],
//     ["Bus", "5 boletos", "25.00 Quetzales", "2025-12-03"],
//     ["Uber", "1 viaje", "65.00 Quetzales", "2025-11-04"],
//     ["Gasolina", "15 litros", "180.00 Quetzales", "2025-11-05"],
//     ["Peaje", "2 tickets", "40.00 Quetzales", "2025-11-06"],
//     ["Taxi", "1 viaje", "55.00 Quetzales", "2025-11-07"],
//     ["Bus", "3 boletos", "15.00 Quetzales", "2025-11-08"],
//     ["Gasolina", "12 litros", "150.00 Quetzales", "2025-11-09"],
//     ["Uber", "1 viaje", "70.00 Quetzales", "2025-11-10"]
// ]


// const insertCsa = db.prepare("INSERT INTO Gastos_casa(Adquirio, Unidades, Monto_Pagado, Fecha_de_compra) VALUES(?, ?, ? ,?)");
// const insertPns = db.prepare("INSERT INTO Gastos_personales(Adquirio, Unidades, Monto_Pagado, Fecha_de_compra) VALUES(?, ?, ? ,?)");
// const insertTpt = db.prepare("INSERT INTO Gastos_de_transporte(Adquirio, Unidades, Monto_Pagado, Fecha_de_compra) VALUES(?, ?, ? ,?)");

// for (const row of ArrayCasa) insertCsa.run(...row);
// for (const row of ArrayPersonal) insertPns.run(...row);
// for (const row of ArrayTransporte) insertTpt.run(...row);