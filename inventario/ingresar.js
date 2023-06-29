
//esta función solo aumenta en 1 la cantidad de arroz
//SE DEBE IMPLEMENTAR PARA QUE AUMENTE CUALQUIER CANTIDAD DE
//CUALQUIER PRODUCTO DE CUALQUIER CATEGORÍA
function ingresarExistencias() {
  //se recupera la cantidad de existencias del arroz
  let arroz = localStorage.getItem("arroz")
  let frijoles = localStorage.getItem("frijoles")
  let lentejas = localStorage.getItem("lentejas")
  let jabon = localStorage.getItem("jabon")
  let limpido = localStorage.getItem("limpido")
  let champu = localStorage.getItem("champu")
  let pescado = localStorage.getItem("pescado")
  let res = localStorage.getItem("res")
  let cerdo = localStorage.getItem("cerdo")
  let kumis = localStorage.getItem("kumis")
  let yogurt = localStorage.getItem("yogurt")
  let leche = localStorage.getItem("leche")
//le decimos que escoja la categoria
  let producto = "";
  let sumar = 0;
  let categoria = prompt("ingrese la categoria del producto (granos,aseo,lacteos,carnes)")
  switch (categoria) {
    case 'granos':
      producto=prompt("escoja el producto \n arroz \n frijoles \n lentejas");
      switch (producto) {
        case 'arroz':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("arroz", parseInt(arroz) + sumar);
          console.log("arroz: ",localStorage.getItem("arroz"));
          break;
        case 'frijoles':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("frijoles", parseInt(frijoles) + sumar);
          console.log("frijoles: ",localStorage.getItem("frijoles"));
          break;
        case 'lentejas':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("lentejas", parseInt(lentejas) + sumar);
          console.log("lentejas: ",localStorage.getItem("lentejas"));
          break;
      
        default:
          break;
      }

    case 'aseo':
      producto=prompt("escoja el producto \n limpido \n jabon \n champu");
      switch (producto) {
        case 'limpido':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("limpido", parseInt(limpido) + sumar);
          console.log("limpido: ",localStorage.getItem("limpido"));
          break;
        case 'jabon':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("jabon", parseInt(jabon) + sumar);
          console.log("jabon: ",localStorage.getItem("jabon"));
          break;
        case 'champu':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("champu", parseInt(champu) + sumar);
          console.log("champu: ",localStorage.getItem("champu"));
          break;
          default:
            break;
      }
    case 'lacteos':
      producto=prompt("escoja el producto \n kumis \n yogurt \n leche")
      switch (producto) {
        case 'kumis':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("kumis", parseInt(kumis) + sumar);
          console.log("kumis: ",localStorage.getItem("kumis"));
          break;
        case 'yogurt':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("yogurt", parseInt(yogurt) + sumar);
          console.log("yogurt: ",localStorage.getItem("yogurt"));
          break;
        case 'leche':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("leche", parseInt(leche) + sumar);
          console.log("leche: ",localStorage.getItem("leche"));
          break;
          default:
            break;
      }
    case 'carnes':
      producto=prompt("escoja el producto \n cerdo \n res \n pescado")
      switch (producto) {
        case 'cerdo':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("cerdo", parseInt(cerdo) + sumar);
          console.log("cerdo: ",localStorage.getItem("cerdo"));
          break;
        case 'res':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("res", parseInt(res) + sumar);
          console.log("res: ",localStorage.getItem("res"));
          break;
        case 'pescado':
          sumar = parseInt(prompt("ingrese la cantidad del producto"));
          localStorage.setItem("pescado", parseInt(pescado) + sumar);
          console.log("pescado: ",localStorage.getItem("pescado"));
          break;
          default:
            break;
      }
  
    default:
      break;
  }


  //se actualiza la cantidad de existencias del arroz sumando una
  // localStorage.setItem("arroz", parseInt(cantidad) + 1);
  return "eliminado";
}

export {ingresarExistencias};