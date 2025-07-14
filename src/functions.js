const { createReadStream } = require('fs');
const { parse } = require('csv-parse');

async function getMediciones(req, res) {
  let results = [];

  try {
    createReadStream('./datos_procesados.csv')
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        res.status(200).json({ mediciones: results });
        console.log('CSV parsing complete');
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

async function getTemperature(req, res) {
  let results = [];

  try {
    createReadStream('./datos_procesados.csv')
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        const temperatura = results.map((item) => ({
          temperatura: item.temperatura,
          fecha: item.hora,
        }));

        res.status(200).json({ temperatura });
        console.log('CSV parsing complete');
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

async function getHumedad(req, res) {
  let results = [];

  try {
    createReadStream('./datos_procesados.csv')
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        const humedad = results.map((item) => ({
          humedad: item.temperatura,
          fecha: item.hora,
        }));

        res.status(200).json({ humedad });
        console.log('CSV parsing complete');
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

async function getHumedadTierra(req, res) {
  let results = [];

  try {
    createReadStream('./datos_procesados.csv')
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        const humedad_tierra = results.map((item) => ({
          humedad_tierra: item.temperatura,
          fecha: item.hora,
        }));

        res.status(200).json({ humedad_tierra });
        console.log('CSV parsing complete');
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

module.exports = {
  getMediciones,
  getTemperature,
  getHumedad,
  getHumedadTierra,
};