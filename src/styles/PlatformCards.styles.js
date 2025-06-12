// src/styles/PlatformCards.styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 12,
    width: 100,
    marginHorizontal: 5,
  },
  consoleImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  label: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  selected: {
    borderColor: "#00FFAA",
    borderWidth: 2,
  },

  // 🔴 PS4 Fire shadow
  ps4Shadow: {
    shadowColor: "#FF4500",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 12,
  },

  // 🔵 PS5 Snow shadow
  ps5Shadow: {
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 12,
  },

  // ⚡ PC Thunder shadow
  pcShadow: {
    shadowColor: "#00BFFF",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 12,
  },
  iconOverlay: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 2,
    zIndex: 1,
  },

  unselectedCard: {
    opacity: 0.4,
  },

  selectedIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#1e1e1e",
    borderRadius: 999,
    padding: 4,
    zIndex: 2,
  },

  selectedIcon: {
    width: 16,
    height: 16,
    tintColor: "#00FFAA",
  },
});
