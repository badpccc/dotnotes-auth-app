import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/services/firebase";

export default async function ForgotPassController(email) {
  if (!email.trim()) {
    return {
      success: false,
      error: "Digite seu email.",
    };
  }

  try {
    await sendPasswordResetEmail(auth, email.trim());

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    switch (error.code) {
      case "auth/user-not-found":
        return {
          success: false,
          error: "Nenhuma conta encontrada com esse email.",
        };

      case "auth/invalid-email":
        return {
          success: false,
          error: "Email inválido.",
        };

      case "auth/too-many-requests":
        return {
          success: false,
          error: "Muitas tentativas. Tente novamente mais tarde.",
        };

      case "auth/network-request-failed":
        return {
          success: false,
          error: "Sem conexão com a internet.",
        };

      default:
        return {
          success: false,
          error: "Não foi possível enviar o email.",
        };
    }
  }
}