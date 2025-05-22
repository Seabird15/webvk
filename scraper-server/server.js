const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

app.get("/api/tabla", async (req, res) => {
  const url = "https://trotamundos.cl/index.php/apertura-2025-jueves/";

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    // Espera a que la tabla esté en el DOM
    await page.waitForSelector('div[data-id="577311e"]');

    const tablaHtml = await page.$eval(
      'div[data-id="577311e"]',
      (el) => el.outerHTML
    );

    await browser.close();

    res.json({ tabla: tablaHtml });
  } catch (error) {
    console.error("Error en puppeteer:", error);
    res.status(500).json({ error: "Error al obtener la tabla" });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
