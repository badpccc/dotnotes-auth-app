import Logo from "@/assets/svg/Logo.svg";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Linking,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import getButtonPrimaryStyle from "@/styles/button-primary";
import getButtonSecondaryStyle from "@/styles/button-secodary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

import { useState } from "react";
import { useRouter } from "expo-router";
import LoginController from "@/services/controllers/login-controller";
import { mensagemAleatoria } from "@/constants/messages";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    message: "",
    type: "", // "success" | "error"
  });

  const router = useRouter();

  const openInstagram = async () => {
    const url = "https://www.instagram.com/arcan_studio_tattoo/";
    await Linking.openURL(url);
  };

  async function handleLogin() {
    if (loading) return;

    setLoading(true);

    const result = await LoginController(email.trim(), senha);

    setLoading(false);

    if (result.success) {
      setFeedback({
        message: "Login realizado com sucesso!",
        type: "success",
      });

      setTimeout(() => {
        router.replace("/home");
      }, 1000);
    } else {
      setFeedback({
        message: result.error,
        type: "error",
      });
    }
  }

  return (
    <SafeArea>
      <View style={Styles.viewLogin}>
        <Logo width={100} height={100} />

        <Text style={Styles.textTitle}>DotNotes</Text>

        <Text style={Styles.textForgetPass}>
          {mensagemAleatoria}
        </Text>

        {feedback.message ? (
          <View
            style={{
              backgroundColor:
                feedback.type === "success"
                  ? "#d1fae5"
                  : "#fee2e2",
              padding: 10,
              borderRadius: 8,
              marginVertical: 10,
              width: "100%",
            }}
          >
            <Text
              style={{
                color:
                  feedback.type === "success"
                    ? "#065f46"
                    : "#991b1b",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {feedback.message}
            </Text>
          </View>
        ) : null}

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          style={Styles.textInput}
          autoCapitalize="none"
        />

        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          style={Styles.textInput}
        />

        <Pressable
          onPress={handleLogin}
          disabled={loading}
          style={({ pressed }) =>
            getButtonPrimaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonW}>
            {loading ? "Entrando..." : "Entrar"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/register")}
          style={({ pressed }) =>
            getButtonSecondaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonB}>
            Registrar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/forgotpass")}
        >
          <Text style={Styles.textForgetPass}>
            Esqueci minha senha
          </Text>
        </Pressable>
      </View>

      <View style={Styles.footer}>
        <View style={Styles.wrapper}>
          <Pressable onPress={openInstagram}>
            <FontAwesome
              name="instagram"
              size={28}
              color="#E4405F"
            />
          </Pressable>
        </View>

        <Text style={Styles.textForgetPass}>
          Copyright © 2026 CaravelCorp.
        </Text>
      </View>
    </SafeArea>
  );
}