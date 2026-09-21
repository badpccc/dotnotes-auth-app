import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

export default async function RegisterController(
  usuario,
  email,
  senha,
  confsenha
) {
  if (
    !usuario.trim() ||
    !email.trim() ||
    !senha.trim() ||
    !confsenha.trim()
  ) {
    return {
      success: false,
      error: "Preencha todos os campos.",
    };
  }

  if (senha !== confsenha) {
    return {
      success: false,
      error: "As senhas não coincidem.",
    };
  }

  if (senha.length < 8) {
    return {
      success: false,
      error: "A senha deve ter no mínimo 8 caracteres.",
    };
  }

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      senha
    );

    return {
      success: true,
      user: response.user,
    };

  } catch (error) {
    console.log(error);

    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          success: false,
          error: "Esse email já está em uso.",
        };

      case "auth/invalid-email":
        return {
          success: false,
          error: "Email inválido.",
        };

      case "auth/weak-password":
        return {
          success: false,
          error: "A senha é muito fraca.",
        };

      case "auth/network-request-failed":
        return {
          success: false,
          error: "Sem conexão com a internet.",
        };

      default:
        return {
          success: false,
          error: "Não foi possível cadastrar o usuário.",
        };
    }
  }
}