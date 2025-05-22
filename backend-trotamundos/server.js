// server.js
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/tabla", async (req, res) => {
  try {
    const url =
      "https://trotamundos.cl/index.php/ligadobleve-apertura-2025-domingo/";
    const response = await axios.get(url);
    console.log(response.data, "datareal");
    const $ = cheerio.load(response.data);

    const tablaHtml = $('table[id="jstable_1"]').html();

    if (!tablaHtml) {
      return res.status(404).json({ error: "Tabla no encontrada" });
    }

    res.json({ tabla: tablaHtml });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la tabla" });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
