import {
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import ForgotPassController from "@/services/controllers/forgotpass-controller";

import getButtonPrimaryStyle from "@/styles/button-primary";
import getButtonSecondaryStyle from "@/styles/button-secodary";
import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

export default function ForgotPass() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });

  const router = useRouter();

  async function handleResetPassword() {
    if (loading) return;

    setLoading(true);

    const result = await ForgotPassController(email.trim());

    setLoading(false);

    if (result.success) {
      setFeedback({
        message: "Email de recuperação enviado!",
        type: "success",
      });

      setTimeout(() => {
        router.back();
      }, 1200);
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
        <Text style={Styles.textTitle}>
          Recuperar senha
        </Text>

        <Text style={Styles.textForgetPass}>
          Insira o email da sua conta.
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
          autoCapitalize="none"
          keyboardType="email-address"
          style={Styles.textInput}
        />

        <Pressable
          onPress={handleResetPassword}
          disabled={loading}
          style={({ pressed }) =>
            getButtonPrimaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonW}>
            {loading ? "Enviando..." : "Continuar"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) =>
            getButtonSecondaryStyle(pressed)
          }
        >
          <Text style={Styles.textButtonB}>
            Voltar
          </Text>
        </Pressable>
      </View>
    </SafeArea>
  );
}