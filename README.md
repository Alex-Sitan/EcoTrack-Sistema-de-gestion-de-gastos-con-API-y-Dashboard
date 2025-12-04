# **EcoTrack – Sistema de Gestión de Gastos con API y Dashboard**

**EcoTrack** es una aplicación enfocada en llevar el control de gastos personales divididos en tres categorías principales:

* Gastos personales
* Gastos del hogar
* Gastos de transporte

Incluye:

**⫸ Un panel visual en EJS**\
**⫸ Tres interfaces HTML clásicas**\
**⫸ Una API REST interna**\
**⫸ Integración con SQLite mediante** (**better-sqlite3**)\
**⫸ Organización modular para mantener el código limpio y escalable**


---

## # **Tecnologías Utilizadas**

| Área          | Herramienta                 |
| ------------- | --------------------------- |
| Backend       | Node.js (Express)           |
| Base de datos |  better-sqlite3     |
| Frontend      | HTML, CSS, JavaScript       |
| Templates     | EJS                         |
| Estilos       | CSS                         |
| API           | JSON Endpoints              |
| Arquitectura  | Modular con rutas separadas |

---

## # **Estructura del Proyecto**

```
EcoTrack---Sistema-de-Gesti-n-de-Gastos-con-API/
├── node_modules/
├── public/
│   ├── index.html
│   ├── Personal.html
│   ├── transporte.html
│   ├── style.css
│   ├── style_v.css
│   └── scripts/
│       ├── api.html
│       ├── api_db.js
│       └── del.js
├── src/
│   ├── routes/
│   │   ├── gastos.routes.js
│   │   ├── vista.routes.js
│   │   ├── delete.routes.js
│   │   ├── api.routes.js
│   │   └── notfound.routes.js
│   ├── db.js
│   ├── colors.js
│   ├── create_db.js  
│   ├── Economia_general.db 
│   └── server.js
├── views/
│   └── vista.ejs
```

---

# #Instalación y Uso

## 1. **Clona el repositorio**

```bash
https://github.com/Alex-Sitan/EcoTrack-Sistema-de-gestion-de-gastos-con-API-y-Dashboard.git
```

## 2. **Instala las dependencias**

```cmd
npm install
```

## 3. **Crea la base de datos**

Inicializa la base de datos:

```cmd
node src/create_db.js
```

## 4. **Inicia el servidor**

```cmd
node src/server.js
```

La app correrá en:

**[http://localhost:3000](http://localhost:3000)**

---

#  #Rutas Disponibles

---

##  **Rutas HTML principales**

### `/`

Página inicial con navegación a las secciones de gastos.

### `/personal`

Formulario para registrar gastos personales.

### `/house`

Formulario para gastos del hogar.

### `/transport`

Formulario para transporte.

---

## **Dashboard con EJS**

### `/vista`

Muestra:

 **>Tabla general**\
 **>Suma total**\
 **>Opción de eliminar gastos**

Renderiza datos directamente desde SQLite usando better-sqlite3.

![5010410768100428622 (1)](https://github.com/user-attachments/assets/42a584a4-b1d7-4f14-a1fa-fde1ac62d95f)




---
## **Dashboard con Json**
similar que el dashboard con ejs la difencia radica en uso de **/api/datos**

### `/api.html`

Muestra:

 **>Tabla general**\
 **>Suma total**

---

## API REST – JSON

### `/api/datos`

Devuelve **todos los gastos en JSON**.

#### Ejemplo de respuesta:

```json
[
  {
    "id": 1,
    "categoria": "personal",
    "cantidad": 75,
    "dia": "2025-11-26"
  }
]
```

### `/api/datos?show=true&table=Gastos_personales`

Devuelve el registro de todos los elementos de la tabla **Gastos_personales**.\
La api solo puede permitir mostrar 3 tablas
- Gastos_casa
- Gastos_personales
- Gastos_de_transporte

Ejemplo:
```json
{
  "all": [
      {
        "id": 1,
        "Adquirio": "Arroz",
        "Unidades": "2 kg",
        "Monto_Pagado": "45.00 Quetzales",
        "Fecha_de_compra": "2025-12-03"
      },
      {
        "id": 2,
        "Adquirio": "Frijoles",
        "Unidades": "1 kg",
        "Monto_Pagado": "30.00 Quetzales",
        "Fecha_de_compra": "2025-12-03"
      }
  ]
}
```

### `/api/datos?show=true&table=Gastos_personales&id=2`

Devuelve solo los gastos del id.

Ejemplo:
```json
{
  "all": [
      {
        "id": 2,
        "Adquirio": "Frijoles",
        "Unidades": "1 kg",
        "Monto_Pagado": "30.00 Quetzales",
        "Fecha_de_compra": "2025-12-03"
      }
  	]
}
```

---

## Eliminar registros

### `POST /dele`

Recibe el ID, elimina el gasto y actualiza el dashboard.

---

##  Scripts importantes

#### `db.js`

Manejo centralizado de la conexión SQLite.

#### `create_db.js`

Generación automática de tablas.



---

## Objetivo del Proyecto

Este proyecto demuestra:

* Dominio de Express
* Uso de SQLite con drivers modernos
* API REST real funcional
* Ruteo modular
* Separación backend–frontend
* Templates EJS

