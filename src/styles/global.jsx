import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({

  // =========================
  // LAYOUT BASE
  // =========================
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
  },

  viewLogin: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#FFF",
  },

  viewLayout: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    paddingBottom: 15,
  },

  headerHome: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  // =========================
  // TEXTOS
  // =========================
  textTitle: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#000",
  },

  textTitleHome: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    opacity: 0.6,
    color: "#000",
  },

  textSubTitle: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 25,
    color: "#666",
  },

  textSubTitleHome: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 25,
    color: "#777",
    opacity: 0.8,
  },

  textForgetPass: {
    color: "#888",
    fontSize: 15,
    margin: 15,
    textAlign: "center",
  },

  textButtonW: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },

  textButtonB: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },

  // =========================
  // HOME MENU BUTTON
  // =========================
  menuButton: {
    position: "absolute",
    left: 20,
    top: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    zIndex: 10,
  },

  // =========================
  // NOTE EDIT SCREEN
  // =========================
  noteTitle: {
    marginTop: 90,
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    paddingVertical: 10,
  },

  noteContent: {
    flex: 1,
    marginTop: 15,
    fontSize: 18,
    color: "#000",
    textAlignVertical: "top",
  },

  notesListContent: {
    paddingTop: 80,
    paddingBottom: 120,
  },

  toolbar: {
    position: "absolute",
    top: 30,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    zIndex: 10,
  },

  // =========================
  // INPUT
  // =========================
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginTop: 15,
    backgroundColor: "#FFF",
  },

  // =========================
  // ICONS
  // =========================
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    elevation: 5,
  },

  iconText: {
    fontSize: 18,
    color: "#000",
  },

  tooltip: {
    position: "absolute",
    top: -45,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },

  tooltipText: {
    color: "#fff",
    fontSize: 12,
  },
});


// =========================
// NAVIGATION CONFIG
// =========================
export const drawerScreenOptions = {
  headerShown: false,

  sceneStyle: {
    backgroundColor: "#fff",
  },

  drawerStyle: {
    backgroundColor: "#fff",
    width: 250,
  },

  drawerActiveTintColor: "#000",
  drawerInactiveTintColor: "#666",
};

export default Styles;