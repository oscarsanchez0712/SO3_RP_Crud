import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tarea-lista.component.html',
  styleUrl: './tarea-lista.component.css'
})
export class TareaListaComponent {
  tareas;

  constructor(private tareaService: TareaService) {
    this.tareas = this.tareaService.getTareas();
  }

  eliminar(id: number, titulo: string): void {
    if (confirm(`¿Eliminar la tarea "${titulo}"?`)) {
      this.tareaService.eliminarTarea(id);
    }
  }
}
