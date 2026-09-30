# API REST - Gestión de Postulaciones

API REST desarrollada con **Node.js, Express y MySQL** para gestionar candidatos, vacantes y postulaciones laborales.

El sistema permite registrar candidatos, crear vacantes, almacenar postulaciones, consultar su estado y calcular automáticamente un puntaje de prioridad utilizando reglas de negocio.

## Tecnologías

* Node.js
* Express
* MySQL
* mysql2
* dotenv
* JavaScript
* ES Modules

## Arquitectura

El proyecto utiliza una arquitectura por capas:

```text
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
MySQL
```

### Estructura

```text
src/
│
├── app.js
│
├── config/
│   └── db.js
│
├── models/
│   ├── Candidato.js
│   ├── Vacante.js
│   └── Postulacion.js
│
├── repositories/
│   ├── CandidatoRepository.js
│   ├── VacanteRepository.js
│   └── PostulacionRepository.js
│
├── services/
│   ├── CandidatoService.js
│   ├── VacanteService.js
│   └── PostulacionService.js
│
├── controllers/
│   ├── CandidatoController.js
│   ├── VacanteController.js
│   └── PostulacionController.js
│
└── routes/
    ├── candidato.routes.js
    ├── vacante.routes.js
    └── postulacion.routes.js
```

## Instalación

Clonar el proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar al proyecto:

```bash
cd api-postulaciones
```

Instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=prueba_api
DB_PORT=3306
```

No subir el archivo `.env` al repositorio.

## Ejecución

Iniciar el servidor:

```bash
npm start
```

El servidor estará disponible en:

```text
http://localhost:3000
```

## Endpoints

### Candidatos

| Método | Endpoint              | Descripción          |
| ------ | --------------------- | -------------------- |
| POST   | `/api/candidatos`     | Crear candidato      |
| GET    | `/api/candidatos`     | Listar candidatos    |
| PUT    | `/api/candidatos/:id` | Actualizar candidato |
| DELETE | `/api/candidatos/:id` | Eliminar candidato   |

### Vacantes

| Método | Endpoint            | Descripción        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/vacantes`     | Crear vacante      |
| GET    | `/api/vacantes`     | Listar vacantes    |
| PUT    | `/api/vacantes/:id` | Actualizar vacante |
| DELETE | `/api/vacantes/:id` | Eliminar vacante   |

### Postulaciones

| Método | Endpoint                 | Descripción            |
| ------ | ------------------------ | ---------------------- |
| POST   | `/api/postulaciones`     | Crear postulación      |
| GET    | `/api/postulaciones`     | Listar postulaciones   |
| PUT    | `/api/postulaciones/:id` | Actualizar postulación |
| DELETE | `/api/postulaciones/:id` | Eliminar postulación   |

## Reglas de negocio

### Postulación

1. El candidato debe existir.
2. La vacante debe existir.
3. La vacante debe estar activa.
4. Un candidato no puede postularse dos veces a la misma vacante.
5. Toda nueva postulación comienza con estado `pendiente`.
6. El puntaje de prioridad se calcula automáticamente.
7. El estado de la postulación puede cambiar durante el proceso de selección.

### Cálculo de prioridad

El sistema utiliza un puntaje de 0 a 100.

Ejemplo de reglas:

```text
Cumple experiencia mínima       +50
Tiene experiencia adicional     +20
Postulación reciente             +10
Carta de presentación            +10
Fuente recomendada               +10
```

La prioridad se determina de acuerdo con el puntaje:

```text
80 - 100 → ALTA
50 - 79  → MEDIA
0 - 49   → BAJA
```

El usuario que realiza la solicitud no establece directamente el puntaje; este es calculado por las reglas de negocio.

## Estados de una postulación

```text
pendiente
en_revision
aceptada
rechazada
```

## Ejemplo de creación de candidato

```json
{
    "identificador": "CAND-001",
    "nombre": "Juan Pérez",
    "correo_electronico": "juan@example.com",
    "experiencia": 4
}
```

## Ejemplo de creación de vacante

```json
{
    "identificador": "VAC-001",
    "cargo": "Desarrollador Backend",
    "experiencia_minima": 2,
    "estado_vacante": "activa"
}
```

## Ejemplo de postulación

```json
{
    "id_candidato": 1,
    "id_vacante": 1,
    "carta_presentacion": "Estoy interesado en formar parte del equipo.",
    "fuente_postulacion": "recomendacion"
}
```

El sistema deberá calcular automáticamente el puntaje y establecer el estado inicial de la postulación.

## Objetivo del proyecto

El objetivo es desarrollar una API REST que permita gestionar el proceso básico de postulación laboral, aplicando una arquitectura por capas y separando:

* Acceso a datos.
* Lógica de negocio.
* Manejo de peticiones HTTP.
* Rutas de la API.
* Modelos de datos.


## enlace al chat 
https://chatgpt.com/share/6abd9870-92e8-83e8-be39-cf74b1547e03