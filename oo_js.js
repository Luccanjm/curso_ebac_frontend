class Animal {
  constructor(nome) {
    if (this.constructor === Animal) {
      throw new Error("Animal é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    this.nome = nome;
  }

  fazerSom() {
    throw new Error("O método 'fazerSom' deve ser implementado.");
  }
}

// Classe filha 1
class Cachorro extends Animal {
  fazerSom() {
    return `${this.nome} diz: Au au!`;
  }
}

// Classe filha 2
class Gato extends Animal {
  fazerSom() {
    return `${this.nome} diz: Miau!`;
  }
}

// Instâncias
const animal1 = new Cachorro("Rex");
const animal2 = new Gato("Mimi");
const animal3 = new Cachorro("Toby");

// Testando
console.log(animal1.fazerSom()); // Rex diz: Au au!
console.log(animal2.fazerSom()); // Mimi diz: Miau!
console.log(animal3.fazerSom()); // Toby diz: Au au!