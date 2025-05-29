# 🎮 Game Cheats with AI

A React Native Expo app that provides AI-generated game cheats based on the game name and the console/platform selected by the user.

---

## 📁 Project Structure

```

/src
  /components
    ExitModal.js        # Custom modal shown on exit
  /redux
    store.js            # Redux store configuration
    /slices
      testSlice.js      # Sample slice with Redux Toolkit + Thunk
  /screens
    Home.js             # Main screen after intro
    IntroSlides.js      # Intro slides for first-time users
  /styles
    Home.styles.js      # Separated styles for Home
    IntroSlides.styles.js
App.js                  # Entry point with navigation & AsyncStorage
```

---

## 🚀 Technologies Used

- **React Native (Expo)**
- **Redux Toolkit**
- **Redux Thunk**
- **AsyncStorage**
- **react-native-swiper**
- **React Navigation**

---

## 📦 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/ankithrao/game-cheats-app.git
cd game-cheats-app

# 2. Install dependencies
npm install

# 3. Start the app
npx expo start
```

---

## ✅ Current Progress (as of May 2025)

- Project initialized with **Expo (JavaScript)**.
- Added **Redux Toolkit** and **Redux Thunk** for state management.
- Setup **AsyncStorage** to detect first-time launch.
- Implemented **intro slides** with animated GIFs using `react-native-swiper`.
- Slides are shown only **once** for first-time users.
- Designed a **custom Exit Modal** on back press with a GIF, cringe message, and cancel/continue buttons.
- Styled using separate modular **style files per screen**.
- Slide and modal UI tested on both **web and Android (via Expo Go)**.

---

## 📌 Version History

### v0.4.0 — May 30, 2025

* Added custom exit modal with cringe message, GIF, and Cancel/Continue buttons on app exit.
* Ensured exit modal only shows on back press from Home screen.
* Fixed first-time launch logic to show intro slides only once.

### v0.3.0 — May 22, 2025

* Completed intro slides with animations and navigation controls.
* Fixed Android GIF support using `expo-image`.
* Enhanced UI with icon-based slide navigation buttons.

### v0.2.0 — May 20, 2025

* Set up Redux Toolkit and Thunk.
* Created initial app structure and home screen placeholder.


---

## 🔜 Coming Next

- Input form for game name and platform.
- AI prompt generation using OpenAI (ChatGPT API).
- Display results in a visual format with styles/icons.
- Basic navigation and UI polish.

---

## 🧑‍💻 Author

Built by Ankith Ranuva.
