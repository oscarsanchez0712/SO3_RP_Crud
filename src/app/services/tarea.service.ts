import { Injectable, signal } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas = signal<Tarea[]>([
    { id: 1, titulo: 'Diseñar interfaz del CRUD', descripcion: 'Bocetar las pantallas principales en Figma', prioridad: 'Alta', estado: 'Completada', fechaLimite: '2026-08-20' },
    { id: 2, titulo: 'Crear componentes Angular', descripcion: 'Generar componentes de lista, formulario y detalle', prioridad: 'Alta', estado: 'En proceso', fechaLimite: '2026-08-28' },
    { id: 3, titulo: 'Conectar datos locales', descripcion: 'Implementar servicio con signals para libros y tareas', prioridad: 'Media', estado: 'En proceso', fechaLimite: '2026-08-29' },
    { id: 4, titulo: 'Aplicar estilos personalizados', descripcion: 'Definir paleta de colores y tipografía propia', prioridad: 'Media', estado: 'Pendiente', fechaLimite: '2026-09-01' },
    { id: 5, titulo: 'Subir proyecto a GitHub', descripcion: 'Crear repositorio y hacer el push final', prioridad: 'Baja', estado: 'Pendiente', fechaLimite: '2026-09-03' },
    { id: 6, titulo: 'Redactar README', descripcion: 'Documentar instalación y uso del proyecto', prioridad: 'Baja', estado: 'Pendiente', fechaLimite: '2026-09-03' }
  ]);

  private nextId = 7;

  getTareas() {
    return this.tareas.asReadonly();
  }

  getTareaPorId(id: number): Tarea | undefined {
    return this.tareas().find(t => t.id === id);
  }

  agregarTarea(tarea: Omit<Tarea, 'id'>): void {
    const nueva: Tarea = { ...tarea, id: this.nextId++ };
    this.tareas.update(lista => [...lista, nueva]);
  }

  actualizarTarea(id: number, cambios: Omit<Tarea, 'id'>): void {
    this.tareas.update(lista =>
      lista.map(t => (t.id === id ? { ...cambios, id } : t))
    );
  }

  eliminarTarea(id: number): void {
    this.tareas.update(lista => lista.filter(t => t.id !== id));
  }
}
