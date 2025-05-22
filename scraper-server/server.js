const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.use(cors());

app.get("/api/tabla", async (req, res) => {
  const url = "https://trotamundos.cl/index.php/apertura-2025-jueves/";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Selecciona el contenido del div con el atributo data-id="577311e"
    const tablaHtml = $('div[data-id="577311e"]').html();

    if (tablaHtml) {
      res.json({ tabla: tablaHtml });
    } else {
      res.status(404).json({ error: "Tabla no encontrada en el HTML" });
    }
  } catch (error) {
    console.error("Error al obtener la tabla:", error.message);
    res.status(500).json({ error: "Error al obtener la tabla" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
