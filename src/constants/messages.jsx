export const mensagensDia = [
  "Bom dia! Hoje é um ótimo dia para produzir.",
  "Bom dia, organize suas ideias e comece bem.",
  "Bom dia! Pequenas anotações, grandes resultados.",
  "Bom dia, pronto para mais um dia produtivo?",
];

export const mensagensTarde = [
  "Boa tarde! Continue seu dia com produtividade.",
  "Boa tarde, siga firme nos seus objetivos.",
  "Boa tarde! Mantenha suas ideias organizadas.",
];

export const mensagensNoite = [
  "Boa noite! Hora de revisar suas ideias.",
  "Boa noite, organize hoje para facilitar amanhã.",
  "Boa noite! Termine o dia com tudo em ordem.",
];

const hora = new Date().getHours();

let listaMensagens = [];

if (hora < 12) {
  listaMensagens = mensagensDia;
} else if (hora < 18) {
  listaMensagens = mensagensTarde;
} else {
  listaMensagens = mensagensNoite;
}

export const mensagemAleatoria =
  listaMensagens[
    Math.floor(Math.random() * listaMensagens.length)
  ];