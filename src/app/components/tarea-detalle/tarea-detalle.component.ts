import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tarea-detalle.component.html',
  styleUrl: './tarea-detalle.component.css'
})
export class TareaDetalleComponent implements OnInit {
  tarea?: Tarea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tareaService: TareaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tarea = this.tareaService.getTareaPorId(id);
  }

  eliminar(): void {
    if (this.tarea && confirm(`¿Eliminar la tarea "${this.tarea.titulo}"?`)) {
      this.tareaService.eliminarTarea(this.tarea.id);
      this.router.navigate(['/tareas']);
    }
  }
}
