import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("notes.db");

export const initDB = async () => {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS notas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      conteudo TEXT,
      data TEXT
    );
  `);
};

export const salvarNota = async (titulo = "", conteudo = "") => {
  const data = new Date().toISOString();

  const result = await db.runAsync(
    `
      INSERT INTO notas (titulo, conteudo, data)
      VALUES (?, ?, ?)
    `,
    [titulo, conteudo, data]
  );

  return { insertId: result.lastInsertRowId };
};

export const buscarNotas = async () => {
  return await db.getAllAsync(`
    SELECT * FROM notas ORDER BY id DESC
  `);
};

export const buscarNotaPorId = async (id) => {
  return await db.getFirstAsync(
    `
      SELECT * FROM notas WHERE id = ?
    `,
    [id]
  );
};

export const atualizarNota = async (id, titulo = "", conteudo = "") => {
  await db.runAsync(
    `
      UPDATE notas
      SET titulo = ?, conteudo = ?, data = ?
      WHERE id = ?
    `,
    [titulo, conteudo, new Date().toISOString(), id]
  );
};

export const deletarNota = async (id) => {
  await db.runAsync(
    `
      DELETE FROM notas WHERE id = ?
    `,
    [id]
  );
};