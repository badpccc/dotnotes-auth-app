const getButtonPrimaryStyle = (pressed) => ({
  width: "80%",
  backgroundColor: "#000",
  borderRadius: 10,
  padding: 12,
  marginTop: 15,
  alignItems: "center",

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

export default getButtonPrimaryStyle;