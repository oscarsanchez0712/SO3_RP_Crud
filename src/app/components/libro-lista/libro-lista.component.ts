import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libro-lista.component.html',
  styleUrl: './libro-lista.component.css'
})
export class LibroListaComponent {
  libros;

  constructor(private libroService: LibroService) {
    this.libros = this.libroService.getLibros();
  }

  eliminar(id: number, titulo: string): void {
    if (confirm(`¿Eliminar el libro "${titulo}"?`)) {
      this.libroService.eliminarLibro(id);
    }
  }
}
