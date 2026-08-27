# CRUD Angular — Libros y Tareas

Aplicación desarrollada con **Angular 19** que implementa dos módulos CRUD completos (Libros y Tareas) usando componentes standalone, formularios reactivos y datos locales gestionados con `signals`.

## Requisitos
- Angular 19+
- Node.js 22.14.0+

## Estructura de componentes
- `navbar` — navegación entre secciones
- `home` — pantalla de bienvenida
- `libro-lista`, `libro-formulario`, `libro-detalle` — CRUD de libros
- `tarea-lista`, `tarea-formulario`, `tarea-detalle` — CRUD de tareas

## Instalación y ejecución
```bash
npm install
ng serve
```
Luego abre `http://localhost:4200/`.

## Funcionalidad
- Crear, ver, editar y eliminar registros (libros y tareas), con datos locales precargados (6 registros por entidad).
- Validaciones con Reactive Forms.
- Diseño personalizado con CSS propio (sin frameworks de UI).
