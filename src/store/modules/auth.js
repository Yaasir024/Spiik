import router from "../../router";
import { auth, db } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
const state = {
  user: null,
};
const getters = {
  users: (state) => state.user,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
};

const actions = {
  async login({ commit }, details) {
    const { email, password } = details;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        default:
          alert("Something went wrong");
      }

      return;
    }

    commit("SET_USER", auth.currentUser);

    router.push("/");
  },

  async register({ commit }, details) {
    const { name, username, email, password } = details;

    try {
      await Promise.allSettled([
        createUserWithEmailAndPassword(auth, email, password),
        addDoc(collection(db, "users"), { name:name, username:username, email:email }),
      ]);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email already in use");
          break;
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/operation-not-allowed":
          alert("Operation not allowed");
          break;
        case "auth/weak-password":
          alert("Weak password");
          break;
        case "Error adding document":
            alert("Error adding document");
            break;
        default:
          alert("Something went wrong");
      }

      return;
    }

    commit("SET_USER", auth.currentUser);

    router.push("/profile-form");
  },

  async logout({ commit }) {
    await signOut(auth);

    commit("CLEAR_USER");

    router.push("/login");
  },
  fetchUser({ commit }) {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        commit("CLEAR_USER");
      } else {
        commit("SET_USER", user);

        if (router.isReady() && router.currentRoute.value.path === "/login") {
          router.push("/");
        }
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
