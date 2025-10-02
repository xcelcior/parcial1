class Libreria {
  constructor() {
    this.libros = [];
    this.prestamos = new Map(); // Map<titulo, boolean>
  }

  agregarLibro(titulo) {
    this.libros.push(titulo);
    this.prestamos.set(titulo, false); // No prestado por defecto
  }

  contarLibros() {
    return this.libros.length;
  }

  venderLibro(titulo) {
    const index = this.libros.indexOf(titulo);
    if (index !== -1) {
      this.libros.splice(index, 1);
      this.prestamos.delete(titulo);
      return true;
    }
    return false;
  }

  prestarLibro(titulo) {
    if (this.libros.includes(titulo) && !this.prestamos.get(titulo)) {
      this.prestamos.set(titulo, true);
      return true;
    }
    return false;
  }

  estadoPrestamo(titulo) {
    if (!this.prestamos.has(titulo)) {
      return null; // No existe el libro
    }
    return this.prestamos.get(titulo); // true = prestado, false = disponible
  }
}

module.exports = Libreria;
