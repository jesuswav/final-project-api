const express = require('express')
const bodyParser = require('body-parser')
const { getTemperature, getHumedad, getHumedadTierra, getMediciones } = require('./src/functions')

const app = express();
const PORT = 3008;

// Midelwares
app.use(bodyParser.json())

// routes
app.use('/api/mediciones', getMediciones)
app.use('/api/temperatura', getTemperature)
app.use('/api/humedad', getHumedad)
app.use('/api/humedad_tierra', getHumedadTierra)

// endpoint por defecto
app.get("/", (req, res) => {
    res.send("API para registrar datos de mediciones con MySQL");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});