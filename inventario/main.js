import { ingresarExistencias } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { esquema } from "./model.js";
import { eliminarExistencias } from "./eliminar.js";

esquema();

function start() {
  //mostramos la cantidad de arroz disponible
  //se aumenta la cantidad de productos en 1
   let opcionIngresar = prompt("1:Mostrar cantidad de productos disponibles \n 2:Ingresar nuevas existencias de producto \n 3:Eliminar existencias de producto");
   switch (opcionIngresar) {
    case '1':
      existenciasDisponibles();
      break;
    case '2':
      ingresarExistencias();
      break;
    case '3':
      eliminarExistencias();
      break;
   
    default:
      break;
   }
   
   

  //   if (ingresar == "actualizado"){
  //   //mostramos la cantidad de arroz disponible actualizada
  //   console.log(existenciasDisponibles());
  //   }else{
  //     console.log("Ocurrió un error al actualizar");
  //   }
  // }else{
  //   console.log("Gracias por usar nuestro programa");
  // }
}

start();