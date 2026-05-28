import usuarioController from "../controllers/usuario.controller.js";
import { Router } from "express";

const usuarioRouter = Router();

usuarioRouter.get("/usuario", usuarioController.findAllUsuarioController);
usuarioRouter.post("/usuario", usuarioController.createUsuarioController);

export default usuarioRouter;