import {
  salvarNota,
  buscarNotas,
  buscarNotaPorId,
  atualizarNota,
  deletarNota,
} from "@/database/notesDB";

let listeners = [];

async function notify() {
  const notes = await buscarNotas();
  listeners.forEach((cb) => cb(notes));
}

export async function createNote(uid, title, content) {
  const result = await salvarNota(title, content);
  await notify();

  return {
    success: true,
    insertId: result.insertId,
  };
}

export async function updateNote(uid, id, data) {
  await atualizarNota(id, data.title, data.content);
  await notify();

  return { success: true };
}

export async function deleteNote(uid, id) {
  await deletarNota(id);
  await notify();

  return { success: true };
}

export async function getNoteById(uid, id) {
  const note = await buscarNotaPorId(id);

  return {
    success: true,
    note,
  };
}

export function listenNotes(uid, callback) {
  listeners.push(callback);

  buscarNotas().then(callback);

  return () => {
    listeners = listeners.filter((cb) => cb !== callback);
  };
}