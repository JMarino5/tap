import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_rTSPZp8j-08VbxHn3tWFx95zY3waylU",
  authDomain: "threeacespress.firebaseapp.com",
  projectId: "threeacespress",
  storageBucket: "threeacespress.appspot.com",
  messagingSenderId: "242693564357",
  appId: "1:242693564357:web:c4acbbf2d4bf44080c4dac",
  measurementId: "G-LFT6K88R3T"
};

// Initializes Firebase - visualizing the analytics as graphs in the MPage will be an excellent addition

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    app, firebaseConfig,
}