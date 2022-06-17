import router from "../../router";
import { auth, db } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";

const state = {
  currentUserId: null,
  allUsers: null,
};

const getters = {
  currentUserId: (state) => state.currentUserId,
  allUsers: (state) => state.allUsers,
};

const mutations = {
  SET_USER_ID(state, id) {
    state.currentUserId = id;
  },
  SET_ALL_USER(state, data) {
    state.allUsers = null;
    state.allUsers = data;
  },
};
const actions = {
  async addUser({ commit }, details) {
    const { profilePic, name, username, about, email, uid } = details;
    try {
      const docRef = await addDoc(collection(db, "users"), {
        profilepic: profilePic,
        name: name,
        username: username,
        about: about,
        email: email,
        uid: uid,
      });
      commit("SET_USER_ID", docRef.id);
    } catch (error) {
      switch (error.code) {
        case "Error adding document":
          alert("Error adding document");
          break;
        default:
          alert("Something went wrong");
      }

      return;
    }
    router.push("/");
  },
  getAllUsers({ commit }) {
    const colRef = collection(db, "users");

    getDocs(colRef)
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        commit("SET_ALL_USER", users);
      })
      .catch((err) => {
        console.log(err.message);
      });
      
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
