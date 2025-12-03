const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const form = document.getElementById("e-person");

form.addEventListener("submit", async (e) => {
    const producto_p = document.getElementById("prd-e").value.trim();
    const unidad_p = document.getElementById("uds-e").value.trim();
    const costo_p = document.getElementById("ct-e").value.trim();
    const fecha_p = document.getElementById("dt-e").value.trim();

    if( !producto_p | !unidad_p | !costo_p | !fecha_p){
        alert("Todos los campos son obligatorios");
        e.defaultPrevented();
    };

    const regs = {
        product: producto_p,
        units: unidad_p,
        cost: costo_p,
        date: fecha_p
    };

    const res = await fetch("/personal", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(regs)
    });

    const resultado = await res.json();
    alert(resultado.mensaje);


});