const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const form = document.getElementById("e-transport");

form.addEventListener("submit", async (e) => {
    const product_t = document.getElementById("prd-e").value.trim();
    const unidades_t = document.getElementById("uds-e").value.trim();
    const costo_t = document.getElementById("ct-e").value.trim();
    const fecha_t = document.getElementById("dt-e").value.trim();

    if( !product_t | !unidades_t | !costo_t | !fecha_t){
        e.defaultPrevented();
        alert("Todos los campos son obligatorios");
    };

    const rgs = {
        product: product_t,
        units: unidades_t,
        cost: costo_t,
        date: fecha_t
    };

    const res = await fetch("/transport", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(rgs)
    });

    const resultado = await res.json();
    alert(resultado.mensaje);


});