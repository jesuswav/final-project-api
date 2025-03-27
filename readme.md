Documentación de la API de Mediciones Ambientales
Esta API proporciona acceso a datos de mediciones ambientales, incluyendo temperatura, humedad y estado de válvulas.

🔧 Instalación y Configuración

Requisitos previos

Node.js (v16 o superior recomendado)
npm (v9 o superior)
Pasos para ejecutar el proyecto

Clonar el repositorio
bash
Copy
git clone [URL_DEL_REPOSITORIO]
Instalar dependencias
bash
Copy
npm install
Iniciar el servidor
bash
Copy
npm run dev
El servidor estará disponible en:
🔗 `
puedes crearme el archivo markdown como tal para copiar el contenido y llevarlo al repositorio
markdown
Copy
# 🌡️ API de Monitoreo Ambiental  

API para obtener datos de sensores ambientales (temperatura, humedad y estado de válvulas).

---

## 🚀 Requisitos e Instalación

### 📋 Prerrequisitos
- Node.js v16+
- npm v9+

### ⚙️ Configuración
```bash
# 1. Clonar repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor (modo desarrollo)
npm run dev
El servidor estará disponible en:
🔗 http://localhost:3008

📊 Endpoints Disponibles

1️⃣ Todas las mediciones

GET /api/mediciones

<details> <summary>📄 Ver respuesta de ejemplo</summary>
json
Copy
{
    "mediciones": [
        {
            "id": "2168",
            "humedad_ambiente": "12.10",
            "humedad_tierra": "0.00",
            "temperatura": "36.60",
            "hora": "2025-03-03 12:31:32",
            "estado_valvula": "1"
        },
        {
            "id": "2167",
            "humedad_ambiente": "12.10",
            "humedad_tierra": "0.00",
            "temperatura": "36.80",
            "hora": "2025-03-03 12:11:31",
            "estado_valvula": "1"
        }
    ]
}
</details>
2️⃣ Datos de temperatura

GET /api/temperatura

<details> <summary>📄 Ver respuesta de ejemplo</summary>
json
Copy
{
    "temperatura": [
        {
            "temperatura": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "temperatura": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
</details>
3️⃣ Datos de humedad ambiente

GET /api/humedad

<details> <summary>📄 Ver respuesta de ejemplo</summary>
json
Copy
{
    "humedad": [
        {
            "humedad": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "humedad": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
</details>
4️⃣ Datos de humedad de tierra

GET /api/humedad_tierra

<details> <summary>📄 Ver respuesta de ejemplo</summary>
json
Copy
{
    "humedadTierra": [
        {
            "humedad_tierra": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "humedad_tierra": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
</details>
📌 Estructura de Datos

Campo	Tipo	Descripción	Valores posibles
id	string	ID único de la medición	-
humedad_ambiente	string	Porcentaje de humedad ambiente	0.00 - 100.00
humedad_tierra	string	Porcentaje de humedad en el suelo	0.00 - 100.00
temperatura	string	Temperatura en °C	-40.00 - 85.00
hora/fecha	string	Fecha y hora de registro (YYYY-MM-DD HH:MM:SS)	-
estado_valvula	string	Estado de la válvula	0 (cerrada), 1 (abierta)