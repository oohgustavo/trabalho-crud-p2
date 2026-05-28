import db from "../config/database.js";

function findAllUsuarioRepository() {
    return new Promise((resolve, reject) => {
        // Trocado de err para error aqui dentro do parêntese
        db.all("SELECT id, login, email, foto FROM usuario", [], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

function createUsuarioRepository(usuario) {
    const { login, email, senha, foto } = usuario;
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO usuario (login, email, senha, foto) VALUES (?, ?, ?, ?)",
            [login, email, senha, foto],
            // Trocado de err para error aqui dentro do parêntese também
            function (error) {
                if (error) {
                    reject(error);
                } else {
                    resolve({ id: this.lastID, login, email, foto });
                }
            }
        );
    });
}

export default {
    findAllUsuarioRepository,
    createUsuarioRepository
};