<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# CRUD Backend

Este proyecto es el backend de una aplicación CRUD para la gestión de empleados, proyectos y tareas. Cada tarea está relacionada con un empleado y un proyecto. Está construido con NestJS y usa MongoDB como base de datos.

🔗 **Despliegue:** [https://crud-employees.onrender.com](https://crud-employees.onrender.com)

## Tecnologías usadas

- NestJS 11
- MongoDB + Mongoose
- TypeScript
- RxJS

## Instalación y uso

```bash
# 1. Clonar el proyecto
git clone https://github.com/Dairymateo/crud-employees.git
cd crud-employees

# 2. Instalar dependencias
npm install para cada dependencia

### Dependencias principales

- @nestjs/common ^11.0.1
- @nestjs/core ^11.0.1
- @nestjs/mapped-types *
- @nestjs/mongoose ^11.0.3
- @nestjs/platform-express ^11.0.1
- class ^0.1.4
- class-transformer ^0.5.1
- class-validator ^0.14.1
- mongoose ^8.13.2
- reflect-metadata ^0.2.2
- rxjs ^7.8.1
- validator ^13.15.0
"""

# 3. Iniciar el servidor en modo desarrollo
npm run start:dev
```

## Estructura del proyecto

```
crud-employees/
├── src/
│   ├── employees/
│   ├── projects/
│   ├── task/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── .env
├── package.json
└── README.md
```

## Endpoints disponibles

| Método | Ruta             | Descripción                |
|--------|------------------|----------------------------|
| GET    | /employees       | Obtener todos los empleados |
| POST   | /employees       | Crear un nuevo empleado     |
| PATCH  | /employees/:id   | Actualizar un empleado      |
| DELETE | /employees/:id   | Eliminar un empleado        |
| ...    | ...              | Similar para proyectos y tareas |
