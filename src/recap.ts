const myName = 'Nicolas';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Persona {
  private age;
  private name;


  constructor(age: number, name: string) {

    this.age=age
    this.name = name
  }

//   COMUN NESTJS mismo que arriba --> constructor(private age: number, private name: string) {}


  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nico = new Persona(15,'ramiro');