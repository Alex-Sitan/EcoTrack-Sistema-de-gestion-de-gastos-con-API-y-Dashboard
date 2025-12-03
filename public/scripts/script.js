// Script para menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const form = document.getElementById("e-house");

form.addEventListener("submit", async (e) => {
    // e.defaultPrevented();
    const name_p = document.getElementById("prd-e").value.trim();
    const unidad_p = document.getElementById("uds-e").value.trim();
    const costo_p = document.getElementById("ct-e").value.trim();
    const date_p = document.getElementById("dt-e").value.trim();

    if( !name_p | !unidad_p | !costo_p | !date_p){
        alert("Verificar que todos los campos esten llenos");
        e.defaultPrevented();
    }

    const regs = {
        product: name_p,
        units: unidad_p,
        cost: costo_p,
        date: date_p
    }

    const res = await fetch("/house", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(regs)
    });

    const resultado = await res.json();
    alert(resultado.mensaje)
});
