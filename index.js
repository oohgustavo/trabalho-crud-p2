import express from "express";
import usuarioRouter from "./src/routes/usuario.routes.js";

const app = express();

app.use(express.json());
app.use(usuarioRouter);

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000....");
});