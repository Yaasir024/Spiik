import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/aauth";
const firebaseConfig = {
  apiKey: "AIzaSyBdt8cn_DL35yES3kVNTROaNbSMpnYQgb4",
  authDomain: "spiik-b1f7c.firebaseapp.com",
  projectId: "spiik-b1f7c",
  storageBucket: "spiik-b1f7c.appspot.com",
  messagingSenderId: "1055529186688",
  appId: "1:1055529186688:web:334cabdab6d22e8a7a7d65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
