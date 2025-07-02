
# 🎮 CheatMate - Game Cheats App

CheatMate is a React Native app built with Expo that provides cheat codes and tips for popular games across different platforms. It’s designed to be fast, fun, and user-friendly.

---

## 🚀 Features

- 🖼️ Intro slider with animations and icon-based navigation  
- 🔍 Animated search bar with game query input  
- 🎮 Typewriter-style welcome message with pixelated font  
- 🕹️ Platform selector (PC, PS4, PS5) with animations and multiselect  
- 💬 AI-generated cheats using DeepSeek (free tier)  
- 📱 Redux Toolkit and Thunk for global state management  
- 📦 Modular, reusable components and stylesheets  
- 🛑 Exit modal on Android back press  
- 🎮 Floating joystick icon with animated app info popup  
- ⚠️ Full error handling, loading indicators, and retry option  
- 🧠 Neatly formatted cheat output with section titles and clean display  
- 💡 Clean, modern dark UI optimized for mobile  

---

## ✨ Tech Stack

- **React Native** with **Expo**  
- **Redux Toolkit** + **Redux Thunk**  
- **React Navigation**  
- **DeepSeek LLM API**  
- **Lodash** utilities  
- **Typewriter animation**  
- **Animated API**  
- **Custom modals & animated popups**  
- **Google Fonts (PressStart2P)**  
- **Ionicons**, **MaterialCommunityIcons**

---

## 📂 Project Structure

```
src/
├── api/
│   └── chatgpt.js (now using DeepSeek)
├── components/
│   ├── AppInfoPopup.js
│   ├── ExitModal.js
│   ├── PlatformCards.js
│   └── TypewriterText.js
├── redux/
│   ├── slices/
│   │   └── searchSlice.js
│   └── store.js
├── screens/
│   ├── Home.js
│   └── CheatResults.js
├── styles/
│   ├── AppInfoPopup.styles.js
│   ├── CheatResults.styles.js
│   ├── Home.styles.js
│   └── PlatformCards.styles.js
```

---

## 📌 Version History

### ✅ v0.6.0 — June 13, 2025  
- 🤖 Integrated DeepSeek AI to fetch cheat codes by query and platform  
- 📄 Created CheatResults screen with markdown-style formatting  
- 🔁 Error/retry UI and graceful fallback for failed requests  
- ⏳ Added loading indicators and loader UI state  

### v0.5.0 — June 13, 2025  
- 🖱️ Added platform card selector (PC, PS4, PS5) with animations  
- 🧠 Multi-selection with icon and glow on selection  
- 🎯 Platform & game search query stored in Redux  
- 🧪 Used `lodash` for utility validations (`isEmpty`, `isNull`)  

### v0.4.0 — June 1, 2025  
- 💬 Added joystick icon at bottom right with 360° spin and popup info  
- 🎮 Replaced user icon with gamepad variant  
- 🕹️ Added pixel-style typewriter welcome animation  
- 🔄 Smooth show/hide for app info popup  

### v0.3.0 — May 22, 2025  
- ✅ Completed intro slides with animations  
- 🐛 Fixed Android GIF support  
- 🎨 Icon-based navigation for slider  

### v0.2.0 — May 20, 2025  
- 🧠 Redux Toolkit and Thunk set up  
- 🏠 Initial home screen UI  

---

## 🧑‍💻 Author

Made with ❤️ by Ankith Ranuva  
📧 ankithrao0005@email.com

---

## 📱 To Run the Project

```bash
npm install
npx expo start
```

---

## 🧊 Status

🚧 Codebase frozen @ v0.6.0  
✨ UI/UX and sidebar enhancements coming next!
