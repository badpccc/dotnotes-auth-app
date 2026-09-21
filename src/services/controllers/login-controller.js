import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";

export default async function LoginController(email, senha) {

  if (!email || !senha) {
    return {
      success: false,
      error: "Preencha todos os campos",
    };
  }

  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      senha
    );

    return {
      success: true,
      user: response.user,
    };

  } catch (error) {
    return {
      success: false,
      error: "Email ou senha inválidos",
    };
  }
}