# 🎮 CheatMate - Game Cheats App

CheatMate is a React Native app built with Expo that provides cheat codes and tips for popular games across different platforms. It’s designed to be fast, fun, and user-friendly.

---

## 🚀 Features

- 🖼️ Intro slider with animations and icon-based navigation  
- 🔍 Animated search bar with game search capability  
- 🎮 Typewriter-style welcome message with pixelated font  
- 📱 Redux Toolkit and Thunk for state management  
- 📦 Fully styled screens with modular stylesheets  
- 🛑 Exit modal on Android back press  
- 💬 Floating joystick icon that reveals app info with animation  
- 📚 Smooth animated pop-up for app details  
- 💡 Clean, modern UI optimized for mobile experience  

---

## ✨ Tech Stack

- **React Native** with **Expo**  
- **Redux Toolkit** + **Thunk**  
- **React Navigation**  
- **Typewriter animation**  
- **Animated API**  
- **Custom Modal & Popups**  
- **Google Fonts (PressStart2P)**  
- **Ionicons** and **MaterialCommunityIcons**

---

## 📂 Project Structure

src/
├── components/
│ ├── ExitModal.js
│ ├── TypewriterText.js
│ └── AppInfoPopup.js
├── screens/
│ └── Home.js
├── styles/
│ ├── Home.styles.js
│ └── AppInfoPopup.styles.js
└── redux/
└── store.js

yaml
Copy
Edit

---

## 📌 Version History

### v0.5.0 — June 13, 2025

- 🖱️ Added platform card selector (PC, PS4, PS5) with animations
- 🎯 Single selection logic with visual feedback (grayed out unselected cards)
- 🌟 Platform icons now animate on selection (scale effect and glow)
- 📦 Game query and selected platform stored in Redux
- 🧪 Utility enhancements using `lodash` (`isEmpty`, `isNull`)

### v0.4.0 — June 1, 2025

- 💬 Added joystick icon at bottom right with 360° spin and animated popup info box  
- 🎮 Replaced user icon with gamepad variant for a fun touch  
- 🕹️ Added pixel-style typewriter welcome text animation  
- 🔄 Smooth show/hide animations for info popup  
- 🎨 Clean styling and icon polish  

### v0.3.0 — May 22, 2025

- ✅ Completed intro slides with animations and navigation controls.  
- 🐛 Fixed Android GIF support using `expo-image`.  
- 🎨 Enhanced UI with icon-based slide navigation buttons.  

### v0.2.0 — May 20, 2025

- 🧠 Set up Redux Toolkit and Thunk.  
- 🏠 Created initial app structure and home screen placeholder.  

---

## 🧑‍💻 Author

Made with ❤️ by Ankith Ranuva  
📧 ankithrao0005@email.com

---

## 📱 To Run the Project

```bash
npm install
npx expo start