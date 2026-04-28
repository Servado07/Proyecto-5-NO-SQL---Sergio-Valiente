const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/proyecto-peliculas';

const connect = async () => {
    try {
        // Intentamos conectar
        await mongoose.connect(DB_URL);
        console.log('Conectado a MongoDB correctamente ✅');
    } catch (error) {
        console.error('No se ha podido conectar a la BBDD correctamente ❌', error);
    }
};

module.exports = { connect };