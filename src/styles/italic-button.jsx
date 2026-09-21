const getitalicButtonStyle = (pressed) => ({
  width: 56,
  height: 56,
  borderRadius: 28,

  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "#FFF",

  marginLeft: 12,

  elevation: pressed ? 3 : 8,

  shadowColor: "#000",
  shadowOpacity: 0.22,
  shadowRadius: pressed ? 2 : 4,
  shadowOffset: {
    width: 0,
    height: pressed ? 2 : 4,
  },

  transform: [
    {
      translateY: pressed ? 2 : 0,
    },
  ],
});

export default getitalicButtonStyle;