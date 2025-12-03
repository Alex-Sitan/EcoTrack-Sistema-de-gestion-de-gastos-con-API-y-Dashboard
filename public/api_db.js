document.getElementById("form-date").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const fecha = document.getElementById("date-esp").value; 
    cargarDatos(fecha);
});


function cargarDatos(fecha = null) {
    const url = fecha ? `/api/datos?date_e=${fecha}` : `/api/datos`;

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            const casa = datos.casa;
            const personal = datos.personal;
            const transporte = datos.transporte;

            const tbosy = document.getElementById("table_casa");
            const tbody_p = document.getElementById("table_personal");
            const tbody_t = document.getElementById("table_transport");

            tbosy.innerHTML = "";
            tbody_p.innerHTML = "";
            tbody_t.innerHTML = "";

            document.getElementById("hoy-actual").textContent = `HOY [ ${datos.hoy} ]`;

            casa.forEach(c => {
                tbosy.innerHTML += `
                    <tr>
                        <td>${c.id}</td>
                        <td>${c.Adquirio}</td>
                        <td>${c.Monto_Pagado}</td>
                    </tr>
                `;
            });
            document.getElementById("e-casa").textContent = `Total: ${datos.suma_c} Q`;

            personal.forEach(p => {
                tbody_p.innerHTML += `
                    <tr>
                        <td>${p.id}</td>
                        <td>${p.Adquirio}</td>
                        <td>${p.Monto_Pagado}</td>
                    </tr>
                `;
            });
            document.getElementById("e-person").textContent = `Total: ${datos.suma_p} Q`;

            transporte.forEach(t => {
                tbody_t.innerHTML += `
                    <tr>
                        <td>${t.id}</td>
                        <td>${t.Adquirio}</td>
                        <td>${t.Monto_Pagado}</td>
                    </tr>
                `;
            });
            document.getElementById("e-transp").textContent = `Total: ${datos.suma_t} Q`;
        });
}

cargarDatos();

