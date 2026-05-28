import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err.message);
    } else {
        console.log("Conectado ao banco de dados com sucesso.");
    }
});

// Criando a tabela de Usuários
db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,
        foto TEXT
    )
`);

export default db;