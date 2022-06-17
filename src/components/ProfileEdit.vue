<template>
  <div class="profile-form">
    <div class="profile-pic">
      <img :src="userDetails.profilePic" :alt="userDetails.name" />

      <div class="overlay">
        <span>
          <p>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              @change="previewImage"
              style="display: none"
            />
          </p>
          <p>
            <label for="file" style="cursor: pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24"
                height="24"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"
                />
              </svg>
              CHANGE PROFILE PICTURE</label
            >
          </p>
        </span>
      </div>
    </div>
    <div class="details-container">
      <div class="name">
        <span class="title">Your Name:</span>
        <div class="detail">
          <h2 :class="editName ? 'hide' : 'show'">{{ userDetails.name }}</h2>
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
            v-model="userDetails.name"
            :class="editName ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="username">
        <span class="title">Your Username:</span>
        <div class="detail">
          <h2 :class="editUsername ? 'hide' : 'show'">
            {{ userDetails.username }}
          </h2>
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
            v-model="userDetails.username"
            :class="editUsername ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="about">
        <span class="title">About:</span>
        <div class="detail">
          <h2 :class="editAbout ? 'hide' : 'show'">{{ userDetails.about }}</h2>
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
            v-model="userDetails.about"
            max="140"
            :class="editAbout ? 'show' : 'hide'"
          />
        </div>
      </div>
      <div class="btn-container">
        <button
          type="submit"
          class="login-btn green-btn"
          @click="submit(userDetails, allUsers)"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
  <div class="modal-container" :class="showModal ? 'show' : 'hide'">
    <div class="modal">
      <h1>Are You Sure you want to submit</h1>
      <div class="button-container">
        <button @click="showModal = false">No</button>
        <button @click="pushSubmit(userDetails)">
          <div class="button-backdrop" @click="showModal = false"></div>
          Yes
        </button>
      </div>
    </div>
  </div>
  <div class="modal-backdrop" :class="showModal ? 'show' : 'hide'"></div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { useStore } from "vuex";
import { onBeforeMount, computed } from "vue";
import { mapMutations } from "vuex";

export default {
  props: ["register_form"],
  data() {
    return {
      image: null,
      editName: false,
      editUsername: false,
      editAbout: false,
      userDetails: {
        profilePic: null,
        name: "user",
        username: "@user",
        about: "Insert cool about here",
        email: "",
        uid: "",
      },
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["users", "user", "allUsers"]),
  },
  methods: {
    previewImage(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.userDetails.profilePic = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    submit(userDetails) {
      let allUsername = [];
      this.allUsers.forEach((element, index) => {
        allUsername.push(element.username);
      });
      if (allUsername.includes(this.userDetails.username)) {
        alert("Username already in use");
      } else {
        this.showModal = true;
      }
    },
  },
  mounted() {
    this.userDetails.name = this.register_form.name;
    this.userDetails.username = this.register_form.username;
    this.userDetails.email = this.register_form.email;
    this.userDetails.uid = this.users.uid;
  },
  setup() {
    const store = useStore();

    const user = computed(() => store.getters.users);
    const allUsers = computed(() => store.getters.allUsers);
    const pushSubmit = (data) => {
      store.dispatch("addUser", data);
    };

    return {
      allUsers,
      store,
      user,
      pushSubmit,
    };
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
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: grey;
}
.profile-pic:hover .overlay {
  opacity: 0.8;
}
.profile-pic .overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.766);
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 50px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.profile-pic .overlay svg {
  fill: #fff;
  display: block;
  margin: 0 auto;
}
.profile-pic .overlay span {
  color: #fff;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-pic img {
  width: 100%;
  /* height: 100%; */
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
  fill: var(--feature-color);
  cursor: pointer;
}
.detail svg:hover {
  fill: rgb(53, 109, 200);
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

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 200;
}
.modal-backdrop {
  background: rgba(0, 0, 0, 0.566);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
}
.modal {
  background: rgb(248, 249, 249);
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  z-index: 200;
}
.modal .button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.modal .button-container button {
  background: rgb(128, 128, 128);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 10px 10px;
  width: 80px;
  transition: all 0.3s ease-in-out;
  margin-right: 5px;
  position: relative;
}
.modal .button-container button:hover {
  background: rgba(128, 128, 128, 0.881);
}
.modal .button-container button .button-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  background: green;
  width: 80px;
  height: 40px;
  opacity: 0;
}
</style>
