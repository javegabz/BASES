// Crear interfaces

interface IAuto {
  encender:boolean;
  velocidadMaxima:number;
  acelerar():void;
  }

  interface IPayaso{
    reir?:boolean;
    comer?:boolean;
    llorar?:boolean;
  }

  interface IListarCidadanos{
    (ciudadanos:string[]):number;
  }

  interface IPersona {
    edad:number;
    sexo:string;
    estadoCivil:string;
    imprimirBio(): void;
  }

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:IAuto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:IAuto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales


const guason:IPayaso = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:IPayaso ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const ciudadGotica:IListarCidadanos = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona{
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio(){
    console.log("usuario de persona");
  };

}


let persona =  new Persona();
persona.edad=25
persona.estadoCivil='soltero';
persona.sexo='masculino';
persona.imprimirBio();
