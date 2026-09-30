import express from "express";

import candidatoRoutes from "./routes/candidato_routes.js";
import vacanteRoutes from "./routes/vacante_routes.js";
import postulacionRoutes from "./routes/postulacion_routes.js";

const app = express();

app.use(express.json());

app.use("/api/candidatos", candidatoRoutes);
app.use("/api/vacantes", vacanteRoutes);
app.use("/api/postulaciones", postulacionRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});