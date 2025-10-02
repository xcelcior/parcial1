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
    
  });

  it('debería vender libros correctamente', () => {
    // Tu prueba aquí
  });

  it('debería prestar libros y mostrar su estado', () => {
    // Tu prueba aquí
  });

  // Puedes agregar más tests si lo necesitas
});