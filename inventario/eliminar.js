function eliminarExistencias() {
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
    let restar = 0;
    let categoria = prompt("ingrese la categoria del producto (granos,aseo,lacteos,carnes)")
    switch (categoria) {
      case 'granos':
        producto=prompt("escoja el producto \n arroz \n frijoles \n lentejas");
        switch (producto) {
          case 'arroz':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("arroz", parseInt(arroz) - restar);
            console.log("arroz: ",localStorage.getItem("arroz"));
            break;
          case 'frijoles':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("frijoles", parseInt(frijoles) - restar);
            console.log("frijoles: ",localStorage.getItem("frijoles"));
            break;
          case 'lentejas':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("lentejas", parseInt(lentejas) - restar);
            console.log("lentejas: ",localStorage.getItem("lentejas"));
            break;
        
          default:
            break;
        }
  
      case 'aseo':
        producto=prompt("escoja el producto \n limpido \n jabon \n champu");
        switch (producto) {
          case 'limpido':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("limpido", parseInt(limpido) - restar);
            console.log("limpido: ",localStorage.getItem("limpido"));
            break;
          case 'jabon':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("jabon", parseInt(jabon) - restar);
            console.log("jabon: ",localStorage.getItem("jabon"));
            break;
          case 'champu':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("champu", parseInt(champu) - restar);
            console.log("champu: ",localStorage.getItem("champu"));
            break;
        }
      case 'lacteos':
        producto=prompt("escoja el producto \n kumis \n yogurt \n leche")
        switch (producto) {
          case 'kumis':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("kumis", parseInt(kumis) - restar);
            console.log("kumis: ",localStorage.getItem("kumis"));
            break;
          case 'yogurt':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("yogurt", parseInt(yogurt) - restar);
            console.log("yogurt: ",localStorage.getItem("yogurt"));
            break;
          case 'leche':
            restar = parseInt(prompt("ingrese la cantidad del producto"));
            localStorage.setItem("leche", parseInt(leche) - restar);
            console.log("leche: ",localStorage.getItem("leche"));
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
        }
    
      default:
        break;
    }
    return "actualizado";
}

export {eliminarExistencias};  