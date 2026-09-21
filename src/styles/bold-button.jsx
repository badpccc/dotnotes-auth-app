const getboldButtonStyle = (pressed) => ({
  
  width: 56,
  height: 56,
  borderRadius: 28,

  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#FFF",

  marginLeft: 12,

  // sombra Android
  elevation: pressed ? 3 : 8,

  // sombra IOS
  shadowColor: "#000",
  shadowOpacity: 0.22,
  shadowRadius: pressed ? 2 : 4,
  shadowOffset: {
    width: 0,
    height: pressed ? 2 : 4,
  },

  // efeito clique
  transform: [
    {
      translateY: pressed ? 2 : 0,
    },
  ],
});

export default getboldButtonStyle;