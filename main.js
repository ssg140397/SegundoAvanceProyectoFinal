class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const carrito = []

const agregarProducto = (producto) => {
    carrito.push (producto)
}

const calcularTotal = () => {
    let total = 0
    for (const producto of carrito){
        total+=producto.precio;
    }
    return total;
}




const alimentoMascotas = new Producto("Alimento para mascotas", 143);
const shampooPerro = new Producto("Shampoo para perro", 40);
const correaChubiSkyMint = new Producto("Correa Chubi Sky Mint", 90);
const coloniaFreshdog = new Producto("Colonia Freshdog", 70);
const chubeatsHigado = new Producto("Chubeats de higado", 30);
const glucosaminaPerro = new Producto("Glucosamina para perro", 60);

alert("¡Bienvenido a Brando & Co! ¿Qué desea comprar hoy?");

let seguirComprando = true;

while (seguirComprando && seguirComprando != 7) {
    const productoElegido = prompt(
    "Elija un producto a agregar al carrito: \n 1. Alimento para mascotas \n 2. Shampoo para perro \n 3. Correa Chubi Sky Mint \n 4. Colonia Freshdog \n 5. Chubeats de higado \n 6. Glucosamina para perro \n 7. Finalizar compra"
    );

    switch (productoElegido) {
        case "1":
            agregarProducto(alimentoMascotas); 
            alert(`Usted seleccionó el producto ${alimentoMascotas.nombre} con un precio de ${alimentoMascotas.precio} soles.`);
            console.log(`producto seleccionado ${alimentoMascotas.nombre} precio: ${alimentoMascotas.precio} soles.`)
        break;
        case "2":
            agregarProducto(shampooPerro);
            alert(`Usted seleccionó el producto ${shampooPerro.nombre} con un precio de ${shampooPerro.precio} soles.`);
            console.log(`producto seleccionado ${shampooPerro.nombre} precio: ${shampooPerro.precio} soles.`)
        break;
        case "3":
            agregarProducto(correaChubiSkyMint);
            alert(`Usted seleccionó el producto ${correaChubiSkyMint.nombre} con un precio de ${correaChubiSkyMint.precio} soles.`);
            console.log(`producto seleccionado ${correaChubiSkyMint.nombre} precio: ${correaChubiSkyMint.precio} soles.`)
        break;
        case "4":
            agregarProducto(coloniaFreshdog);
            alert(`Usted seleccionó el producto ${coloniaFreshdog.nombre} con un precio de ${coloniaFreshdog.precio} soles.`);
            console.log(`producto seleccionado ${coloniaFreshdog.nombre} precio: ${coloniaFreshdog.precio} soles.`)
        break;
        case "5":
            agregarProducto(chubeatsHigado);
            alert(`Usted seleccionó el producto ${chubeatsHigado.nombre} con un precio de ${chubeatsHigado.precio} soles.`);
            console.log(`producto seleccionado ${chubeatsHigado.nombre} precio: ${chubeatsHigado.precio} soles.`)
        break;
        case "6":
            agregarProducto(glucosaminaPerro);
            alert(`Usted seleccionó el producto ${glucosaminaPerro.nombre} con un precio de ${glucosaminaPerro.precio} soles.`);
            console.log(`producto seleccionado ${glucosaminaPerro.nombre} precio: ${glucosaminaPerro.precio} soles.`)
        break;
        case "7":
            seguirComprando = false;
            alert("Gracias por comprar, vuelva pronto!");
        break;
        default:
            alert("Por favor, elija una opción válida");
    }
}


let total = 0;
for (let producto of carrito) {
    total += producto.precio;
    console.log(producto.nombre + " - Precio: S/." + producto.precio);
}

console.log("Total a pagar: S/." + total);

