import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarea-formulario.component.html',
  styleUrl: './tarea-formulario.component.css'
})
export class TareaFormularioComponent implements OnInit {
  form: FormGroup;
  esEdicion = false;
  idActual?: number;
  prioridades = ['Alta', 'Media', 'Baja'];
  estados = ['Pendiente', 'En proceso', 'Completada'];

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', Validators.required],
      prioridad: ['Media', Validators.required],
      estado: ['Pendiente', Validators.required],
      fechaLimite: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const tarea = this.tareaService.getTareaPorId(+idParam);
      if (tarea) {
        this.esEdicion = true;
        this.idActual = tarea.id;
        this.form.patchValue(tarea);
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
      this.tareaService.actualizarTarea(this.idActual, valores);
    } else {
      this.tareaService.agregarTarea(valores);
    }

    this.router.navigate(['/tareas']);
  }

  cancelar(): void {
    this.router.navigate(['/tareas']);
  }
}
