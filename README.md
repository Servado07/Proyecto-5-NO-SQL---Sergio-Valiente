# 🎬 Proyecto 5: NoSQL - API REST de Cine y Películas

![NoSQL](https://img.shields.io/badge/NoSQL-Non--Relational-green?style=for-the-badge&logo=mongodb)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)


Este repositorio contiene la resolución técnica del **Proyecto 5 de NoSQL**, enfocado en la creación de una API REST funcional utilizando **Node.js** y **MongoDB**. El proyecto demuestra habilidades en el modelado de datos no relacionales, gestión de rutas y operaciones CRUD completas.

---

## 🎯 Objetivo del Proyecto

El propósito de este proyecto es construir un servidor robusto para gestionar una base de datos de cine. Se han implementado modelos complejos con **Mongoose**, permitiendo no solo el almacenamiento de información, sino también la relación entre colecciones mediante **referencias** (Populate) para conectar cines con sus respectivas películas.

---

## 📊 Endpoints y Operaciones Realizadas

Se han diseñado rutas específicas para interactuar con los recursos de la base de datos de forma eficiente:

| Entidad | Acción / Endpoint | Operación NoSQL |
| :--- | :--- | :--- |
| **Movies** | `GET /movies` | Recuperar todas las películas |
| **Movies** | `POST /movies` | Creación de nuevos documentos |
| **Movies** | `PUT /movies/:id` | Actualización de datos existentes |
| **Movies** | `DELETE /movies/:id` | Eliminación lógica/física de registros |
| **Cinemas** | `GET /cinemas` | Listado con `populate('movies')` |

---

## 📂 Estructura del Repositorio

* **`models/`**: Definición de los esquemas de Mongoose (`Movie.js`, `Cinema.js`).
* **`routes/`**: Lógica de enrutamiento para cada entidad.
* **`utils/`**: Configuración y conexión a la base de datos de MongoDB.
* **`index.js`**: Punto de entrada de la aplicación y configuración del servidor Express.
* **`package.json`**: Gestión de dependencias y scripts de ejecución.

---

## ✒️ Autor

**Sergio Valiente**
* [Perfil de GitHub](https://github.com/servado07)

---
*Este proyecto forma parte del Máster en Ciberseguridad (UCAM) / ThePower Pometeo.*
