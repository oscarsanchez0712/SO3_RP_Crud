import { Injectable, signal } from '@angular/core';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private libros = signal<Libro[]>([
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', anio: 1967, disponible: true },
    { id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', genero: 'Fábula', anio: 1943, disponible: true },
    { id: 3, titulo: '1984', autor: 'George Orwell', genero: 'Distopía', anio: 1949, disponible: false },
    { id: 4, titulo: 'Rayuela', autor: 'Julio Cortázar', genero: 'Novela experimental', anio: 1963, disponible: true },
    { id: 5, titulo: 'La ciudad y los perros', autor: 'Mario Vargas Llosa', genero: 'Novela', anio: 1963, disponible: true },
    { id: 6, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', genero: 'Novela clásica', anio: 1605, disponible: false }
  ]);

  private nextId = 7;

  getLibros() {
    return this.libros.asReadonly();
  }

  getLibroPorId(id: number): Libro | undefined {
    return this.libros().find(l => l.id === id);
  }

  agregarLibro(libro: Omit<Libro, 'id'>): void {
    const nuevo: Libro = { ...libro, id: this.nextId++ };
    this.libros.update(lista => [...lista, nuevo]);
  }

  actualizarLibro(id: number, cambios: Omit<Libro, 'id'>): void {
    this.libros.update(lista =>
      lista.map(l => (l.id === id ? { ...cambios, id } : l))
    );
  }

  eliminarLibro(id: number): void {
    this.libros.update(lista => lista.filter(l => l.id !== id));
  }
}
