const productos = [
    {
        id: 0,
        nombre: "BRUMA EQUILIBRANTE",
        precio: "$3500",
        categoria: "salud y belleza",
        cantidad: 1,
    },
    {
        id: 1,
        nombre: "CREMA HUMECTANTE",
        precio: "$4600",
        categoria: "salud y belleza",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "DERMOACLARANTE",
        precio: "$5200",
        categoria: "salud y belleza",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "CONCENTRADO HIDRONUTRIENTE",
        precio: "$7000",
        categoria: "salud y belleza",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "FILM CRONO HIDRATANTE",
        precio: "$4000",
        categoria: "salud y belleza",
        cantidad: 1,
    },
];
console.log(productos)

const productosOrdenados = productos.slice().sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    }else if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
})




const elijaSuProducto = Number(prompt("Bienvenido al sitio, puede elegir entre los siguientes productos:0.BRUMA EQUILIBRANTE, 1.CREMA HIDRATANTE, 2.DERMOACLARANTE, 3.CONCENTRADO HIDRONUTRIENTE, 4.FILM CRONO HIDRATANTE"))



const productoAEnviar = productos.find( objeto => objeto.id === elijaSuProducto);
  console.log(productoAEnviar)  

const verificacionDeProducto = (elijaSuProducto) => {
    alert(`su producto ${elijaSuProducto.nombre} tine un valor ${elijaSuProducto.precio} y sera enviado a su domicilio`)
}    

verificacionDeProducto (productoAEnviar)
