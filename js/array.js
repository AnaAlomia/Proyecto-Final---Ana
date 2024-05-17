//----Array Elementos----//
let herramientas = [
  {
    nombre: "Martillo de carpintero",
    codigo: "C4rP1nT3rH4mm3r",
    categorias: "Herramientas manuales",
    marca: "Stanley",
    modelo: "45678",
    precio: 60000,
    cantidad: 25,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEStHsDMIyqIW-rX7-HOzTjr4Le2CZioW0W_PVQCRRtA&s"
  },
  {
    nombre: "Nivel láser",
    codigo: "L4s3rL3v3l123",
    categorias: "Herramientas de medición",
    marca: "Bosch",
    modelo: "78901",
    precio: 120000,
    cantidad: 12,
    imagen: "https://homecenterco.scene7.com/is/image/SodimacCO/337391_01?wid=800&hei=800&qlt=70"
  },
  {
    nombre: "Sierra circular",
    codigo: "C1rCuL4rS4w22",
    categorias: "Herramientas Electricas",
    marca: "DeWalt",
    modelo: "23456",
    precio: 180000,
    cantidad: 6,
    imagen: "https://dewaltcenter.co/2718-large_default/sierra-circular-7-14-pulg-dewalt-dwe575k.jpg"
  },
  {
    nombre: "Torno de banco",
    codigo: "B3nChT0rN0M4s",
    categorias: "Maquinaria Especializada",
    marca: "Makita",
    modelo: "78910",
    precio: 250000,
    cantidad: 3,
    imagen: "https://www.konan.com.ar/images/productos/nuevos/KTOR-1000.jpg"
  },
  {
    nombre: "Juego de llaves allen",
    codigo: "4l13nK3yS3t999",
    categorias: "Herramientas manuales",
    marca: "Craftsman",
    modelo: "56789",
    precio: 40000,
    cantidad: 30,
    imagen: " https://http2.mlstatic.com/D_NQ_NP_758645-MCO72460137543_102023-O.webp"
  },
  {
    nombre: "Micrómetro digital",
    codigo: "D1g1t4lM1Cr0m3t3r",
    categorias: "Herramientas de medición",
    marca: "Mitutoyo",
    modelo: "01234",
    precio: 150000,
    cantidad: 10,
    imagen: "https://www.sumicali.com/wp-content/uploads/2020/01/Mitutoyo-293-240-30-Micro%CC%81metro-exterior-digital-0-25mm0.0.jpg"
  },
  {
    nombre: "Taladro inalámbrico",
    codigo: "W1r3l3s5Dr1lL42",
    categorias: "Herramientas Electricas",
    marca: "Black & Decker",
    modelo: "34567",
    precio: 80000,
    cantidad: 15,
    imagen: "https://belltec.com.co/17096-large_default/taladro-rotacion-38-20v-li-ion-black-decker-bcd702c1-b3.jpg"
  },
  {
    nombre: "Fresadora CNC",
    codigo: "CNCM1ll3rF1x",
    categorias: "Maquinaria Especializada",
    marca: "Haas",
    modelo: "89012",
    precio: 500000,
    cantidad: 2,
    imagen: "https://haas.com.mx/wp-content/uploads/2022/09/HAAS-VF-1.png"
  },
  {
    nombre: "Estuche de herramientas",
    codigo: "T00lB0x3XtR4",
    categorias: "Cajas de Herramientas y Organizadores",
    marca: "IRWIN",
    modelo: "34567",
    precio: 70000,
    cantidad: 7,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_679173-MLU70949299790_082023-O.webp"
  },
  {
    nombre: "Llave de impacto",
    codigo: "1mP4cTWr3nCh01",
    categorias: ["Herramientas manuales"],
    marca: "Milwaukee",
    modelo: "89012",
    precio: 90000,
    cantidad: 9,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo1O-ecoBISpJNe5riN2AsEz35ufJBbHoh5jivPOs8A&s"
  },
  {
    nombre: "Alicate de corte diagonal",
    codigo: "D14g0n4lCUTpl13r",
    categorias: ["Herramientas manuales"],
    marca: "KNIPEX",
    modelo: "12345",
    precio: 45000,
    cantidad: 10,
    imagen: "https://cecuamaq.com/133-large_default/alicate-corte-diagonal-de-71-8-knipex.jpg"
  },
  {
    nombre: "Calibrador Vernier",
    codigo: "V3rn13rC4l1br4t0r",
    categorias: "Herramientas de medición",
    marca: "Mitutoyo",
    modelo: "67890",
    precio: 75000,
    cantidad: 8,
    imagen: "https://monitox.com.co/wp-content/uploads/2020/05/61MgrER02aL._SL1500_.jpg"
  },
  {
    nombre: "Atornillador inalámbrico",
    codigo: "W1r3l3s5Scr3wDr1v3r",
    categorias: "Herramientas Electricas",
    marca: "Makita",
    modelo: "54321",
    precio: 95000,
    cantidad: 5,
    imagen: "https://belltec.com.co/8004-large_default/atornillador-inalambrico-36v-li-ion-80-pzs-makita-.jpg"
  },
  {
    nombre: "Taladro de columna",
    codigo: "C0lumnDr1llPr355",
    categorias: "Maquinaria Especializada",
    marca: "JET",
    modelo: "24680",
    precio: 350000,
    cantidad: 3,
    imagen: "https://cdn11.bigcommerce.com/s-f4083/images/stencil/1280x1280/products/163507/210415/50021169fd36e5377a2413a7728c1485fc3e0f85_716250_main__37110.1611840055.png?c=2"
  },
  {
    nombre: "Juego de destornilladores",
    codigo: "Scr3wDr1v3rS3t123",
    categorias: ["Herramientas manuales"],
    marca: "Wiha",
    modelo: "13579",
    precio: 55000,
    cantidad: 22,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_705138-MCO69685065853_052023-O.webp",
  },
  {
    nombre: "Micrómetro exterior",
    codigo: "0uT3rM1Cr0m3t3r",
    categorias: "Herramientas de medición",
    marca: "Fowler",
    modelo: "02468",
    precio: 85000,
    cantidad: 6,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_944346-MCO43948085174_102020-O.webp",
  },
  {
    nombre: "Sierra de cinta",
    codigo: "B4ndS4wM4ch1n3",
    categorias: "Herramientas Electricas",
    marca: "DEWALT",
    modelo: "97531",
    precio: 220000,
    cantidad: 4,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_724737-MLU69515845291_052023-O.webp"
  },
  {
    nombre: "Torno paralelo",
    codigo: "P4r4l3lL4th3",
    categorias: "Maquinaria Especializada",
    marca: "Grizzly",
    modelo: "75309",
    precio: 400000,
    cantidad: 2,
    imagen: "https://m.media-amazon.com/images/I/61IqKqixW9L.jpg"
  },
  {
    nombre: "Maletín de herramientas",
    codigo: "T00lC4s3Tr4v3l",
    categorias: "Cajas de Herramientas y Organizadores",
    marca: "STANLEY",
    modelo: "86420",
    precio: 60000,
    cantidad: 9,
    imagen: "https://casaferretera.vtexassets.com/arquivos/ids/167332-800-auto?v=638157250117000000&width=800&height=auto&aspect=true"
  },
  {
    nombre: "Llave ajustable",
    codigo: "4dju5t4bl3Wrench",
    categorias: "Herramientas manuales",
    marca: "CHANNELLOCK",
    modelo: "97531",
    precio: 35000,
    cantidad: 15,
    imagen: "https://i0.wp.com/m.media-amazon.com/images/I/81VjYAmTs2L._AC_SL1500_.jpg?fit=%2C&ssl=1"
  },
  {
    nombre: "Destornillador de precisión",
    codigo: "Pr3c1510nDr1v3r123",
    categorias: "Herramientas manuales",
    marca: "Wera",
    modelo: "12345",
    precio: 35000,
    cantidad: 10,
    imagen: "https://cdn11.bigcommerce.com/s-f4083/images/stencil/1280x1280/products/176346/303015/218Q2FGUkIL__16649__14868.1698955334.jpg?c=2"
  },
  {
    nombre: "Calibrador digital",
    codigo: "D1g1t4lC4l1bR4t0r",
    categorias: "Herramientas de medición",
    marca: "iGaging",
    modelo: "67890",
    precio: 65000,
    cantidad: 8,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_601032-MCO49077782554_022022-O.webp"
  },
  {
    nombre: "Taladro de impacto",
    codigo: "1mP4cTDr1ll3r777",
    categorias: "Herramientas Electricas",
    marca: "Ryobi",
    modelo: "54321",
    precio: 110000,
    cantidad: 5,
    imagen: "https://1eef39c98840285810bd-2595d34d3de4180b13df22f453ac5c69.ssl.cf1.rackcdn.com/product/photos/large_c7c46f75-45af-4dcb-a256-cf8ad8e0b6d7.jpg"
  },
  {
    nombre: "Fresadora vertical",
    codigo: "V3rt1c4lM1ll3r",
    categorias: "Maquinaria Especializada",
    marca: "Bridgeport",
    modelo: "24680",
    precio: 280000,
    cantidad: 3,
    imagen: "https://maquiventas.com/wp-content/uploads/2023/02/Fresadora-Vertical-BRIDGEPORT-9X36-3.jpg"
  },
  {
    nombre: "Juego de alicates",
    codigo: "Pl13rS3t456",
    categorias: ["Herramientas manuales"],
    marca: "Knipex",
    modelo: "13579",
    precio: 42000,
    cantidad: 12,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_770594-MCO75493154209_032024-O.webp"
  },
  {
    nombre: "Micrómetro interno",
    codigo: "1n73rn4lM1Cr0m3t3r",
    categorias: "Herramientas de medición",
    marca: "Mitutoyo",
    modelo: "02468",
    precio: 75000,
    cantidad: 6,
    imagen: "https://mitutoyo.com.ar/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/3/6/368-167-_1_5.jpg"
  },
  {
    nombre: "Sierra de mesa",
    codigo: "T4bl3S4wM4ch1n3",
    categorias: "Herramientas Electricas",
    marca: "Makita",
    modelo: "97531",
    precio: 210000,
    cantidad: 4,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_760776-MCO44938119475_022021-O.webp"
  },
  {
    nombre: "Torno CNC",
    codigo: "CNCL4th3",
    categorias: "Maquinaria Especializada",
    marca: "Haas",
    modelo: "75309",
    precio: 450000,
    cantidad: 2,
    imagen: "https://haas.com.mx/wp-content/uploads/2022/03/st-30-blog-final.jpg"
  },
  {
    nombre: "Organizador de herramientas",
    codigo: "T00l0rg4n1z3r",
    categorias: "Cajas de Herramientas y Organizadores",
    marca: "STANLEY",
    modelo: "86420",
    precio: 55000,
    cantidad: 9,
    imagen: "https://belltec.com.co/18435-large_default/caja-plastica-para-herramienta-con-bandeja-stanley-stst24410.jpg"
  },
  {
    nombre: "Llave de boca ajustable",
    codigo: "4dju5t4bl3Wrench456",
    categorias: "Herramientas manuales",
    marca: "Bahco",
    modelo: "97531",
    precio: 38000,
    cantidad: 15,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_694259-MCO49940332704_052022-O.webp"
  },
  {
    nombre: "Destornillador de punta plana",
    codigo: "Pl4n4Sl0tDr1v3r987",
    categorias: "Herramientas manuales",
    marca: "Wiha",
    modelo: "12345",
    precio: 32000,
    cantidad: 10,
    imagen: "https://cdn11.bigcommerce.com/s-f4083/images/stencil/1280x1280/products/141828/159923/32005_1__45229.1507233503.jpg?c=2"
  },
  {
    nombre: "Nivel de burbuja magnético",
    codigo: "M4gn3t1cL3v3l123",
    categorias: "Herramientas de medición",
    marca: "Stabila",
    modelo: "67890",
    precio: 68000,
    cantidad: 8,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_625633-MCO50718543890_072022-O.webp"
  },
  {
    nombre: "Amoladora angular",
    codigo: "4nGul4rGr1nd3r456",
    categorias: "Herramientas Electricas",
    marca: "Makita",
    modelo: "54321",
    precio: 115000,
    cantidad: 5,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_734107-CBT50205830176_062022-O.webp"
  },
  {
    nombre: "Taladro de banco",
    codigo: "B3nchDr1ll789",
    categorias: "Maquinaria Especializada",
    marca: "Craftsman",
    modelo: "24680",
    precio: 295000,
    cantidad: 3,
    imagen: "https://craftsmanstore.mx/image/cache/catalog/tiendacraftsman/CRAFTSMAN/CMXEDAR300-900x900..jpg "
  },
  {
    nombre: "Juego de destornilladores de precisión",
    codigo: "Pr3c1510nScr3wDr1v3rS3t",
    categorias: "Herramientas manuales",
    marca: "Klein Tools",
    modelo: "13579",
    precio: 45000,
    cantidad: 12,
    imagen: "https://m.media-amazon.com/images/I/513WrxifIfL._AC_SL1001_.jpg"
  },
  {
    nombre: "Pie de rey digital",
    codigo: "D1g1t4lC4l1p3r",
    categorias: "Herramientas de medición",
    marca: "Fowler",
    modelo: "02468",
    precio: 72000,
    cantidad: 6,
    imagen: "https://img.directindustry.es/images_di/photo-mg/20813-16710226.jpg"
  },
  {
    nombre: "Sierra caladora",
    codigo: "J1gS4wM4ch1n3",
    categorias: "Herramientas Electricas",
    marca: "Bosch",
    modelo: "97531",
    precio: 198000,
    cantidad: 4,
    imagen: "https://belltec.com.co/4317-large_default/sierra-caladora-710w-3100-spm-bosch-gst-75-e.jpg"
  },
  {
    nombre: "Fresadora de torreta",
    codigo: "Turr3tM1ll3r",
    categorias: "Maquinaria Especializada",
    marca: "Bridgeport",
    modelo: "75309",
    precio: 420000,
    cantidad: 2,
    imagen: "https://hardinge.com/wp-content/uploads/Bridgeport_KneeMill-Series1_alt2.jpg"
  },
  {
    nombre: "Carrito para herramientas",
    codigo: "T00lC4rtF0rY0u",
    categorias: "Cajas de Herramientas y Organizadores",
    marca: "Husky",
    modelo: "86420",
    precio: 69000,
    cantidad: 9,
    imagen: "https://m.media-amazon.com/images/I/51lKt+Vf2aL.jpg"
  },
  {
    nombre: "Llave ajustable de boca ancha",
    codigo: "W1d3J4wb3dWrench456",
    categorias: "Herramientas manuales",
    marca: "IRWIN",
    modelo: "97531",
    precio: 41000,
    cantidad: 15,
    imagen: "https://m.media-amazon.com/images/I/51AG0Mz7W4L.jpg"
  },
  {
    nombre: "Llave inglesa ajustable",
    codigo: "4dju5t4bl3Wrench789",
    categorias: "Herramientas manuales",
    marca: "Bahco",
    modelo: "12345",
    precio: 35000,
    cantidad: 10,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_807957-MCO74023082653_012024-O.webp"
  },
  {
    nombre: "Micrómetro de profundidad",
    codigo: "D3pthM1Cr0m3t3r123",
    categorias: "Herramientas de medición",
    marca: "Mitutoyo",
    modelo: "67890",
    precio: 68000,
    cantidad: 8,
    imagen: "https://mitutoyo.com.ar/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/1/2/129-111.jpg"
  },
  {
    nombre: "Amoladora recta",
    codigo: "Str41ghtGr1nd3r456",
    categorias: "Herramientas Electricas",
    marca: "DeWalt",
    modelo: "54321",
    precio: 120000,
    cantidad: 5,
    imagen: "https://lh5.googleusercontent.com/proxy/LMFswGbo2JptNoCJ5cAAE9s8P7eoTfHmLx0aLor37cxL1IZVb6XShgkM1Xnahbd3ITCAiQcXZhC93B-tJ5_0L3NV62ItQFJICINuE2c"
  },
  {
    nombre: "Taladro de pedestal",
    codigo: "P3d3st4lDr1ll789",
    categorias: "Maquinaria Especializada",
    marca: "JET",
    modelo: "24680",
    precio: 300000,
    cantidad: 3,
    imagen: "https://cecuamaq.com/609-large_default/taladro-pedestal-1-hp-115v-12v-1-jet.jpg "
  },
  {
    nombre: "Juego de llaves combinadas",
    codigo: "C0mb0WrenchS3t",
    categorias: "Herramientas manuales",
    marca: "GearWrench",
    modelo: "13579",
    precio: 48000,
    cantidad: 12,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_728915-MCO52856962346_122022-O.webp"
  },
  {
    nombre: "Calibrador de ángulos",
    codigo: "4ngl3G4ug3",
    categorias: "Herramientas de medición",
    marca: "iGaging",
    modelo: "02468",
    precio: 72000,
    cantidad: 6,
    imagen: "https://m.media-amazon.com/images/I/41JH0ONEwbL.jpg"
  },
  {
    nombre: "Sierra de calar",
    codigo: "J1gs4wM4ch1n3",
    categorias: "Herramientas Electricas",
    marca: "Makita",
    modelo: "97531",
    precio: 185000,
    cantidad: 4,
    imagen: "https://belltec.com.co/3797-home_default/sierra-caladora-650w-vv-500-3100rpm-long-recorrid-23mm.jpg"
  },
  {
    nombre: "Torno paralelo de precisión",
    codigo: "Pr3c1510nL4th3",
    categorias: "Maquinaria Especializada",
    marca: "Grizzly",
    modelo: "75309",
    precio: 480000,
    cantidad: 2,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_614509-MLM74520188919_022024-O.webp"
  },
  {
    nombre: "Maletín de herramientas portátil",
    codigo: "P0rt4bl3T00lC4s3",
    categorias: "Cajas de Herramientas y Organizadores",
    marca: "STANLEY",
    modelo: "86420",
    precio: 62000,
    cantidad: 9,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_861629-MLU73568508429_122023-O.webp"
  },
  {
    nombre: "Llave de trinquete ajustable",
    codigo: "R4tch3t4dju5t4bl3Wrench",
    categorias: "Herramientas manuales",
    marca: "Kobalt",
    modelo: "97531",
    precio: 42000,
    cantidad: 15,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_767373-MCO43324295439_082020-O.webp"
  },
];

//----Funciones de Vista Registar----//

function registrar() {
  const nombre = document.getElementById("nombre").value;
  const codigo = document.getElementById("codigo").value;
  const categoria = document.getElementById("categoria").value;
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const precio = parseInt(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  let newElemen = {
    nombre: nombre,
    codigo: codigo,
    categoria: categoria,
    marca: marca,
    modelo: modelo,
    precio: precio,
    cantidad: cantidad
  };

  herramientas.push(newElemen);

  console.log(newElemen);
  console.log(herramientas.length);
};

function cleanFields() {
  document.getElementById("nombre").value = '';
  document.getElementById("codigo").value = '';
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("marca").value = '';
  document.getElementById("modelo").value = '';
  document.getElementById("precio").value = '';
  document.getElementById("cantidad").value = '';

  console.log("Limpiando");
}

function cargarImg() {
  const imagen = document.getElementById("urlImagen").value;
  console.log(imagen);

  var contenedorImg = document.getElementById("contenedorImg");
  var imagenPintada = "";

  imagenPintada += "<img src=" + imagen + "</img>";

  contenedorImg.innerHTML = imagenPintada;
}



//----Funciones de Vista Productos----//

//Valores iniciales
let paginaActual = 1;
const elementosPorPagina = 15;
const paginas = Math.ceil(herramientas.length / elementosPorPagina);
numeritos();
mostrarTarjetas();

//Numeritos de index
function numeritos() {
  var contenedorNumeritos = document.getElementById("numeritos");
  var numerosIndex = "";

  for (var i = 0; i < paginas; i++) {
    if (i + 1 === paginaActual) {
      numerosIndex += "<button class='btPagactive' onclick='cambiarPagina(" + (i + 1) + ")'>" + (i + 1) + "</button>";
    } else {
      numerosIndex += "<button class='btPag' onclick='cambiarPagina(" + (i + 1) + ")'>" + (i + 1) + "</button>";
    }
  }
  contenedorNumeritos.innerHTML = numerosIndex;
}

//Funcion para mostrar o Pintar las Tarjetas 
function mostrarTarjetas() {

  var contenedorTarjetas = document.getElementById("cards-articulos");
  var tarjetas = "";

  var inicio = (paginaActual - 1) * elementosPorPagina;
  var fin = inicio + elementosPorPagina;
  if (fin > herramientas.length) {
    fin = herramientas.length;
  }

  for (var i = inicio; i < fin; i++) {

    var numero = herramientas[i].precio;
    var numeroFormateado = numero.toLocaleString();

    var color = colorDisponible(herramientas[i].cantidad);

    tarjetas += "<div class='tarjeta'>";

    tarjetas += "<p class = 'codigo'>" + herramientas[i].codigo + "</p>";

    tarjetas += "<img src='" + herramientas[i].imagen + "'>";

    tarjetas += "<div class ='cuerpo'>";
    tarjetas += "<p class = 'marca'>" + herramientas[i].marca + "</p>";
    tarjetas += "<p class = 'nombre'>" + herramientas[i].nombre + " " + herramientas[i].modelo + "</p>";

    tarjetas += "<div class = 'categoria'";
    tarjetas += "<p> Categoria:</p>"
    tarjetas += "<p>" + herramientas[i].categorias + "</p>";
    tarjetas += "</div>"; // Etiqueta de cierre de div Class Categoria

    tarjetas += "<p class = 'precio'> $" + numeroFormateado + " Unidad </p>";
    tarjetas += "<p class ='" + color + "'> Cantidad: " + herramientas[i].cantidad + "</p>";
    tarjetas += "</div>"; // Etiqueta de cierre de div Class Tarjeta

    tarjetas += "</div>"; // Etiqueta de cierre de div Class Tarjeta
  }
  contenedorTarjetas.innerHTML = tarjetas;
}

//Funcion para cambiar de página
function cambiarPagina(numeroPagina) {
  paginaActual = numeroPagina;
  numeritos();
  mostrarTarjetas();
}

//Funcion para recibir las ordenes del HTML
function paginacion(valor) {

  if (valor === 'Anterior' && paginaActual > 1) {
    paginaActual--;
  } else if (valor === 'Siguiente' && paginaActual < paginas) {
    paginaActual++;
  }
  numeritos();
  mostrarTarjetas();
}

//Funcion de animacion para pintar segun las cantidades
function colorDisponible(cant) {
  var color = "";
  if (cant < 10) {
    color = "rojo";
  } else if (cant >= 10 && cant < 20) {
    color = "amarillo";
  } else {
    color = "verde"
  }
  return color;
}