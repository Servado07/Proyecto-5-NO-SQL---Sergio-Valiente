const express = require('express');
const { connect } = require('./utils/db');
const moviesRouter = require('./routes/movie.routes');
const cinemasRouter = require('./routes/cinema.routes');
const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

connect();

server.use('/movies', moviesRouter);
server.use('/cinemas', cinemasRouter);
server.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});
server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Error inesperado');
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});