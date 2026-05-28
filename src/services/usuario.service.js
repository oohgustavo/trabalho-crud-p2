import usuarioRepository from "../repositories/usuario.repository.js";

async function findAllUsuarioService() {
    return await usuarioRepository.findAllUsuarioRepository();
}

async function createUsuarioService(usuario) {
    return await usuarioRepository.createUsuarioRepository(usuario);
}

export default {
    findAllUsuarioService,
    createUsuarioService
};