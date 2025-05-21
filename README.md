# 🎮 Game Cheats with AI

A React Native Expo app that provides AI-generated game cheats based on the game name and the console/platform selected by the user.

---

## 📁 Project Structure

```

/src
/redux
store.js          # Redux store configuration
/slices
testSlice.js    # Sample slice with Redux Toolkit + Thunk
/components
SlideControls.js  # Slide navigation buttons (Back, Next, Skip)
/screens
IntroSlides.js    # Intro slideshow screen
Home.js           # Home screen placeholder
/styles
SlideControls.styles.js   # Styles for SlideControls component
IntroSlides.styles.js     # Styles for IntroSlides screen
App.js                # Entry point with Redux Provider and Navigation

````

---

## 🚀 Technologies Used

- **React Native (Expo)**
- **Redux Toolkit**
- **Redux Thunk**
- **React Native for Web (Expo Web Support)**
- **react-native-swiper** (for intro slides)
- **expo-image** (for animated GIF support on Android)
- **react-native-vector-icons** (for icon buttons)

---

## 📦 Setup Instructions

```bash
# 1. Clone or download the project
git clone <your-repo-url>

# 2. Install dependencies
npm install

# 3. Run on web or mobile
npx expo start
````

Use the Expo Go app on iOS or Android to preview on device.

---

## ✅ Current Progress (as of May 2025)

* Project initialized with **Expo (JavaScript)**.
* Added **Redux Toolkit** for state management.
* Setup **Redux Thunk** with a basic async example (`fetchMessage`).
* Connected Redux to UI using `useDispatch` and `useSelector`.
* Initialized Git repository with `.gitignore` (ignoring `node_modules/`, `.expo/`, `package-lock.json`).
* Added animated **intro slides** using `react-native-swiper` with:

  * GIF animations via `expo-image` for cross-platform support.
  * Slide controls with **Skip**, **Back (arrow icon)**, and **Next/Start (arrow/checkmark icons)** buttons.
  * Buttons positioned as: Skip (top-right), Back (bottom-left), Next (bottom-right).
  * Responsive and visually aligned layout with centered images and text.
* Navigation flow from intro slides to home screen implemented.
* Modularized styles in `/src/styles` and separated components for cleaner structure.

---

## 🔜 Coming Next

* Input form for game name and platform selection.
* Integration with ChatGPT API to generate game cheats.
* Display cheats with graphical UI components.

---

## 📌 Version History

### v0.3.0 — May 22, 2025

* Completed intro slides with animations and navigation controls.
* Fixed Android GIF support using `expo-image`.
* Enhanced UI with icon-based slide navigation buttons.

### v0.2.0 — May 20, 2025

* Set up Redux Toolkit and Thunk.
* Created initial app structure and home screen placeholder.

---

## 🧑‍💻 Author

Built by Ankith Ranuva.
