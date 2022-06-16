<template>
  <div class="profile-form">
    <div class="profile-pic">
      <img src="../assets/avatar.png" alt="" />
      <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" />
    </div>
    <div class="details-container">
      <div class="name">
        <span class="title">Your Name:</span>
        <div class="detail">
          <h2 :class="editName ? 'hide' : 'show'">Yaasir Falana</h2>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editName = true"
            v-if="editName == false"
          >
            <path
              fill="currentColor"
              d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editName = false"
            v-if="editName == true"
          >
            <path
              fill="currentColor"
              d="m9 17.2-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
            ></path>
          </svg>
          <input
            type="text"
            :value="userDetails.name"
            :class="editName ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="username">
        <span class="title">Your Username:</span>
        <div class="detail">
          <h2 :class="editUsername ? 'hide' : 'show'">@user</h2>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editUsername = true"
            v-if="editUsername == false"
          >
            <path
              fill="currentColor"
              d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editUsername = false"
            v-if="editUsername == true"
          >
            <path
              fill="currentColor"
              d="m9 17.2-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
            ></path>
          </svg>
          <input
            type="text"
            :value="userDetails.username"
            :class="editUsername ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="about">
        <span class="title">About:</span>
        <div class="detail">
          <h2 :class="editAbout ? 'hide' : 'show'">Insert cool about here</h2>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editAbout = true"
            v-if="editAbout == false"
          >
            <path
              fill="currentColor"
              d="M3.95 16.7v3.4h3.4l9.8-9.9-3.4-3.4-9.8 9.9zm15.8-9.1c.4-.4.4-.9 0-1.3l-2.1-2.1c-.4-.4-.9-.4-1.3 0l-1.6 1.6 3.4 3.4 1.6-1.6z"
            ></path>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class=""
            @click="editAbout = false"
            v-if="editAbout == true"
          >
            <path
              fill="currentColor"
              d="m9 17.2-4-4-1.4 1.3L9 19.9 20.4 8.5 19 7.1 9 17.2z"
            ></path>
          </svg>
          <input
            type="text"
            :value="userDetails.about"
            max="140"
            :class="editAbout ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="btn-container">
        <button
          type="submit"
          class="login-btn green-btn"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  {{ editAbout }}
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      editName: false,
      editUsername: false,
      editAbout: false,
      userDetails: {
        profilePic: "",
        name: "user",
        username: "@user",
        about: "Insert cool about here",
      },
    };
  },
  computed: mapGetters(["users"]),
  methods: {
    openPalette(i) {
      this.showPalette = !this.showPalette;
      this.currentId = i;
    },
  },
  mounted() {
    console.log(this.users.uid);
  },
};
</script>

<style scoped>
.show {
  visibility: visible;
  opacity: 1;
}
.hide {
  visibility: hidden;
  opacity: 0;
}
.profile-form {
  /* text-align: center;
  display: flex;
  flex-direction: column; */
  max-width: 400px;
  margin: 0 auto;
}
.profile-pic {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  overflow: hidden;
}
.profile-pic img {
  width: 100%;
  border-radius: 50%;
}
.detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  position: relative;
}
.title {
  font-size: 14px;
  line-height: normal;
  color: var(--feature-color);
}
.detail h2 {
  font-size: 17px;
  line-height: 20px;
}
.detail svg {
  color: var(--feature-color);
  cursor: pointer;
}
.detail svg:hover {
  background: rgb(53, 109, 200);
}
.name,
.username,
.about {
  margin-bottom: 10px;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  padding-right: 10px;
}
.green-btn {
  background: rgba(43, 119, 43, 0.9);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 10px 10px;
  width: 150px;
  transition: all 0.3s ease-in-out;
}

.green-btn:hover {
  background: rgb(43, 119, 43);
}
.detail input {
  border: none;
  outline: none;
  width: 95%;
  font-size: 17px;
  line-height: 20px;
  background: none;
  border-bottom: 2px solid var(--feature-color);
  position: absolute;
  left: 0;
  top: 0;
  /* display: none; */
}
</style>
