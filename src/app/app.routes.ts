import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibroListaComponent } from './components/libro-lista/libro-lista.component';
import { LibroFormularioComponent } from './components/libro-formulario/libro-formulario.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';
import { TareaFormularioComponent } from './components/tarea-formulario/tarea-formulario.component';
import { TareaDetalleComponent } from './components/tarea-detalle/tarea-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'libros', component: LibroListaComponent },
  { path: 'libros/nuevo', component: LibroFormularioComponent },
  { path: 'libros/editar/:id', component: LibroFormularioComponent },
  { path: 'libros/:id', component: LibroDetalleComponent },

  { path: 'tareas', component: TareaListaComponent },
  { path: 'tareas/nueva', component: TareaFormularioComponent },
  { path: 'tareas/editar/:id', component: TareaFormularioComponent },
  { path: 'tareas/:id', component: TareaDetalleComponent },

  { path: '**', redirectTo: '' }
];
