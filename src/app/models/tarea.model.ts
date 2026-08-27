export type PrioridadTarea = 'Alta' | 'Media' | 'Baja';
export type EstadoTarea = 'Pendiente' | 'En proceso' | 'Completada';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: PrioridadTarea;
  estado: EstadoTarea;
  fechaLimite: string; // formato YYYY-MM-DD
}
