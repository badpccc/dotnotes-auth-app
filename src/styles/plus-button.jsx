const getplusButtonStyle = (pressed) => ({
  position: "absolute",

  right: 20,
  bottom: 30,

  width: 56,
  height: 56,
  borderRadius: 28,

  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#FFF",

  elevation: 5,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  // sombra padronizada ( Android & IOS )
  elevation: pressed ? 3 : 8,

  shadowColor: "#000",
  shadowOpacity: 0.22,
  shadowRadius: pressed ? 2 : 4,
  shadowOffset: {
    width: 0,
    height: pressed ? 2 : 4,
  },

  // efeito de clique
  transform: [{ translateY: pressed ? 2 : 0 }],
});

export default getplusButtonStyle;