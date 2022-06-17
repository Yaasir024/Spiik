import router from "../../router";
import { auth, db } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const state = {
  currentUserId: null,
};

const getters = {
  currentUserId: (state) => state.currentUserId,
};

const mutations = {
  SET_USER_ID(state, id) {
    state.currentUserId = id;
  },
};
const actions = {
  async addUser({ commit }, details) {
    const { profilePic, name, username, about, email, uid} = details;
    console.log(profilePic, name, username, about, email, uid, 'action called')
    try {
      const docRef =await addDoc(collection(db, "users"), {
        profilepic: profilePic,
        name: name,
        username: username,
        about: about,
        email: email,
        uid: uid,
      });
      console.log(docRef.id)
      commit("SET_USER_ID", docRef.id);
    } catch (error) {
      switch (error.code) {
        case "Error adding document":
          alert("Error adding document");
          break;
        default:
          alert("Something went wrong");
      }

      console.log('Added docref',docRef.id)
      return;
    }
    // commit("SET_NEW_USER", details);
    console.log('Added', state.currentUserId,)
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
