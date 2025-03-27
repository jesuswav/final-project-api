import { Router } from 'express';
import { createReadStream } from 'fs';
import { parse } from 'csv';
const router = Router()
// const csv = require('jquery-csv')
// const datos = fs.readFile('../storage/datosRiego3.csv')

export async function getMediciones(req, res) {
    let results = []

    try {
        createReadStream("./datosRiego3.csv")
        .pipe(parse({trim: true, skip_empty_lines: true, columns: true}))
        .on("data", (row) => {
            results.push(row);
        })
        .on("end", () => {
            res.status(200).json({mediciones: results})
            console.log("CSV parsing complete");
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos'});
    }
}

export async function getTemperature(req, res) {
    let results = []

    try {
        createReadStream("./datosRiego3.csv")
        .pipe(parse({trim: true, skip_empty_lines: true, columns: true}))
        .on("data", (row) => {
            results.push(row);
        })
        .on("end", () => {

            const temperatura = []
            
            results.forEach((item) => {
                temperatura.push({
                    "temperatura": item.temperatura,
                    "fecha": item.hora
                })
            })

            res.status(200).json({temperatura})
            console.log("CSV parsing complete");
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos'});
    }
}


export async function getHumedad(req, res) {
    let results = []

    try {
        createReadStream("./datosRiego3.csv")
        .pipe(parse({trim: true, skip_empty_lines: true, columns: true}))
        .on("data", (row) => {
            results.push(row);
        })
        .on("end", () => {

            const humedad = []
            
            results.forEach((item) => {
                humedad.push({
                    "humedad": item.temperatura,
                    "fecha": item.hora
                })
            })

            res.status(200).json({humedad})
            console.log("CSV parsing complete");
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos'});
    }
}

export async function getHumedadTierra(req, res) {
    let results = []

    try {
        createReadStream("./datosRiego3.csv")
        .pipe(parse({trim: true, skip_empty_lines: true, columns: true}))
        .on("data", (row) => {
            results.push(row);
        })
        .on("end", () => {

            const humedad_tierra = []
            
            results.forEach((item) => {
                humedad_tierra.push({
                    "humedad_tierra": item.temperatura,
                    "fecha": item.hora
                })
            })

            res.status(200).json({humedad_tierra})
            console.log("CSV parsing complete");
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos'});
    }
}