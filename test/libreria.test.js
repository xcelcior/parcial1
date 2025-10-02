const chai = require('chai');
const expect = chai.expect;

const Libreria = require('../src/libreria.js');

describe('Clase Libreria', () => {
  let libreria;

  beforeEach(() => {
    libreria = new Libreria();
  });
  
  it('debería agregar un libro correctamente', () => {
    libreria.agregarLibro("hola");
    const total = libreria.contarLibros();
    expect(total).to.equals(1)
  });
  it('debería contar los libros correctamente', () => {
    libreria.agregarLibro("hola 1");
    libreria.agregarLibro("hola 2");
    expect(libreria.contarLibros()).to.equal(2);
  });

  it('debería vender libros correctamente', () => {
    libreria.agregarLibro("A");
    const vendido = libreria.venderLibro("A");
    expect(vendido).to.be.true;
    expect(libreria.contarLibros()).to.equal(0);
    expect(libreria.venderLibro("Inexistente")).to.be.false;
  });

  it('debería prestar libros y mostrar su estado', () => {
    libreria.agregarLibro("miau");
    
    // Al inicio debería estar disponible
    expect(libreria.estadoPrestamo("miau")).to.be.false;

    // Se presta
    const prestado = libreria.prestarLibro("miau");
    expect(prestado).to.be.true;
    expect(libreria.estadoPrestamo("miau")).to.be.true;

    // Intentar prestarlo otra vez debe fallar
    const prestadoDeNuevo = libreria.prestarLibro("miau");
    expect(prestadoDeNuevo).to.be.false;

    // Consultar estado de un libro inexistente
    expect(libreria.estadoPrestamo("Inexistente")).to.be.null;
  });

  // Puedes agregar más tests si lo necesitas

});
