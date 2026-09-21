import {
  View,
  Pressable,
  Text,
  FlatList,
  Alert,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigation,
  useRouter,
} from "expo-router";

import { Feather } from "@expo/vector-icons";

import { DrawerActions } from "@react-navigation/native";

import {
  listenNotes,
  deleteNote,
} from "@/services/controllers/notes-controller";

import Styles from "@/styles/global";

import SafeArea from "@/components/safe-area";

import getplusButtonStyle from "@/styles/plus-button";
import getmenuButtonStyle from "@/styles/menu-button";
import getNoteButtonStyles from "@/styles/note-button";

export default function Home() {
  const navigation =
    useNavigation();

  const router =
    useRouter();

  const [
    notes,
    setNotes,
  ] = useState([]);

  useEffect(() => {
    const unsubscribe =
      listenNotes(
        null,
        setNotes
      );

    return unsubscribe;
  }, []);

  function handleDelete(
    id
  ) {
    Alert.alert(
      "Apagar nota",
      "Tem certeza que deseja apagar esta nota?",
      [
        {
          text:
            "Cancelar",
          style:
            "cancel",
        },
        {
          text:
            "Apagar",
          style:
            "destructive",
          onPress:
            async () => {
              await deleteNote(
                null,
                id
              );
            },
        },
      ]
    );
  }

  function renderItem({
    item,
  }) {
    return (
      <Pressable
        style={[
          getNoteButtonStyles,
          {
            flexDirection:
              "row",
            alignItems:
              "center",
            paddingVertical:
              8,
            paddingHorizontal:
              10,
          },
        ]}
        onPress={() =>
          router.push({
            pathname:
              "/create-note",
            params: {
              id:
                item.id,
            },
          })
        }
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={[
              Styles.textTitle,
              {
                textAlign:
                  "left",
                fontSize:
                  16,
              },
            ]}
          >
            {item.titulo ||
              "Sem título"}
          </Text>

          <Text
            numberOfLines={2}
            style={[
              Styles.textSubTitle,
              {
                textAlign:
                  "left",
                marginTop: 0,
                marginBottom: 0,
              },
            ]}
          >
            {item.conteudo?.replace(
              /<[^>]*>/g,
              ""
            ) ||
              "Nota vazia"}
          </Text>
        </View>

        <Pressable
          onPress={() =>
            handleDelete(
              item.id
            )
          }
          hitSlop={8}
          style={{
            paddingLeft: 12,
          }}
        >
          <Feather
            name="trash-2"
            size={18}
            color="#e05252"
          />
        </Pressable>
      </Pressable>
    );
  }

  return (
    <SafeArea>
      <Pressable
        style={({
          pressed,
        }) => [
          getmenuButtonStyle(
            pressed
          ),
        ]}
        onPress={() =>
          navigation.dispatch(
            DrawerActions.openDrawer()
          )
        }
      >
        <Feather
          name="menu"
          size={24}
          color="#000"
        />
      </Pressable>

      <View
        style={
          Styles.container
        }
      >
        {notes.length ===
        0 ? (
          <View
            style={
              Styles.content
            }
          >
            <Text
              style={
                Styles.textTitleHome
              }
            >
              Notas
            </Text>

            <Text
              style={
                Styles.textSubTitleHome
              }
            >
              Você não possui
              nenhuma anotação,
              crie sua primeira
              anotação clicando
              no botão abaixo!
            </Text>
          </View>
        ) : (
          <FlatList
            data={
              notes
            }
            keyExtractor={(
              item
            ) =>
              item.id.toString()
            }
            renderItem={
              renderItem
            }
            contentContainerStyle={
              Styles.notesListContent
            }
            showsVerticalScrollIndicator={
              false
            }
          />
        )}
      </View>

      <Pressable
        style={({
          pressed,
        }) =>
          getplusButtonStyle(
            pressed
          )
        }
        onPress={() =>
          router.push(
            "/create-note"
          )
        }
      >
        <Feather
          name="plus"
          size={28}
          color="#000"
        />
      </Pressable>
    </SafeArea>
  );
}