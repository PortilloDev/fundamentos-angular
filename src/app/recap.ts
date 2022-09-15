
// En TS se puede tipar
const username: string  = 'iportillo';

//Crear función
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 3);

class Person {
  // Dos formas de crear un constructor

  //Tradicional
  // age: number;
  // lastname: string;

  // constructor( age: number, lastname: string){
  //   this.age = age;
  //   this.lastname = lastname
  // }

    //Moderna
   constructor( public age: number, public lastname: string){}
}

const iportillo = new Person(41, username);

iportillo.age;
