import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYG27l-C2RTnpQ192oxSF4S7jf1IsKJeg",
  authDomain: "tenniscup.firebaseapp.com",
  projectId: "tenniscup",
  storageBucket: "tenniscup.appspot.com",
  messagingSenderId: "865279148325",
  appId: "1:865279148325:web:231b7d6732c476b7e69acc",
  measurementId: "G-MJNFXYN3KV",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleAnalytics = getAnalytics(firebaseApp);

export default firebaseApp;
