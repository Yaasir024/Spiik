import { createStore } from "vuex";
import router from "../router";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auths from "./modules/auth";
import user from "./modules/user";

const store = createStore({
  modules: {
    auths,
    user,
  },
});

export default store;
