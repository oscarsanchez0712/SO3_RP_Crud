import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './libro-formulario.component.html',
  styleUrl: './libro-formulario.component.css'
})
export class LibroFormularioComponent implements OnInit {
  form: FormGroup;
  esEdicion = false;
  idActual?: number;

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      autor: ['', [Validators.required, Validators.minLength(2)]],
      genero: ['', Validators.required],
      anio: [null, [Validators.required, Validators.min(1000), Validators.max(2100)]],
      disponible: [true]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const libro = this.libroService.getLibroPorId(+idParam);
      if (libro) {
        this.esEdicion = true;
        this.idActual = libro.id;
        this.form.patchValue(libro);
      }
    }
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const valores = this.form.value;

    if (this.esEdicion && this.idActual !== undefined) {
      this.libroService.actualizarLibro(this.idActual, valores);
    } else {
      this.libroService.agregarLibro(valores);
    }

    this.router.navigate(['/libros']);
  }

  cancelar(): void {
    this.router.navigate(['/libros']);
  }
}
