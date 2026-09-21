import {
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

import { useEffect, useRef, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";

import {
  createNote,
  updateNote,
  getNoteById,
} from "@/services/controllers/notes-controller";

import Styles from "@/styles/global";
import SafeArea from "@/components/safe-area";

import getbackButtonStyle from "@/styles/back-button";
import getboldButtonStyle from "@/styles/bold-button";
import getitalicButtonStyle from "@/styles/italic-button";

let RichEditor;
let actions;

if (Platform.OS !== "web") {
  const rich = require("react-native-pell-rich-editor");
  RichEditor = rich.RichEditor;
  actions = rich.actions;
}

function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function CreateNote() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const editor = useRef(null);

  const [noteId, setNoteId] = useState(id || null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  useEffect(() => {
    async function load() {
      if (!id) return;

      const res = await getNoteById(null, id);

      if (res?.note) {
        setTitle(res.note.titulo || "");
        setContent(res.note.conteudo || "");

        setTimeout(() => {
          editor.current?.setContentHTML(res.note.conteudo || "");
        }, 100);
      }
    }

    load();
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const emptyTitle = !title.trim();
      const emptyContent = !stripHtml(content);

      if (emptyTitle && emptyContent) return;

      if (!noteId) {
        const res = await createNote(null, title, content);

        if (res.insertId) setNoteId(res.insertId);

        return;
      }

      await updateNote(null, noteId, {
        title,
        content,
      });
    }, 600);

    return () => clearTimeout(timer);
  }, [title, content, noteId]);

  function handleBold() {
    setBold(!bold);
    editor.current?.sendAction(actions.setBold, "result");
  }

  function handleItalic() {
    setItalic(!italic);
    editor.current?.sendAction(actions.setItalic, "result");
  }

  return (
    <SafeArea>
      <View style={Styles.container}>

        <Pressable
          style={({ pressed }) => getbackButtonStyle(pressed)}
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={24} color="#000" />
        </Pressable>

        <View style={Styles.toolbar}>
          <Pressable
            style={() => getboldButtonStyle(bold)}
            onPress={handleBold}
          >
            <Feather name="bold" size={20} color="#000" />
          </Pressable>

          <Pressable
            style={() => getitalicButtonStyle(italic)}
            onPress={handleItalic}
          >
            <Feather name="italic" size={20} color="#000" />
          </Pressable>
        </View>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Título"
          placeholderTextColor="#999"
          style={Styles.noteTitle}
        />

        {Platform.OS !== "web" && RichEditor && (
          <RichEditor
            ref={editor}
            initialContentHTML={content}
            placeholder="Comece a escrever..."
            style={Styles.noteContent}
            onChange={setContent}
          />
        )}

      </View>
    </SafeArea>
  );
}