//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasDisponibles() {
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

  return console.log("arroz: ",arroz,"fijoles",frijoles,"lentejas: ",lentejas,"jabon",jabon,"limpido: ",limpido,"champu",champu,"pescado: ",pescado,"res",res,"cerdo: ",cerdo,"kumis: ",kumis,"leche: ",leche,"yogurt: ",yogurt);
}

export {existenciasDisponibles};