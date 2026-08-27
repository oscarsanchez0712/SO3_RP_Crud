import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit {
  libro?: Libro;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private libroService: LibroService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libro = this.libroService.getLibroPorId(id);
  }

  eliminar(): void {
    if (this.libro && confirm(`¿Eliminar el libro "${this.libro.titulo}"?`)) {
      this.libroService.eliminarLibro(this.libro.id);
      this.router.navigate(['/libros']);
    }
  }
}
