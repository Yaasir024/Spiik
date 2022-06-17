<template>
  <div class="view">
    <div class="sidebar">
      <header>
        <p>Chats</p>
      </header>
      <div class="chats">
        <div class="chat">
          <div class="img-section">
            <div class="profile-img">
              <img src="../assets/Anos.jpeg" alt="" />
            </div>
          </div>
          <div class="details">
            <div class="top">
              <div class="name">
                <span>Anos Voldigoad</span>
              </div>
              <div class="time">
                <span>yesterday</span>
              </div>
            </div>
            <!-- <div class="bottom">
              <p>You coming today coz I've been waiting for your ret?</p>
            </div> -->
          </div>
        </div>
        <div class="chat">
          <div class="img-section">
            <div class="profile-img">
              <img src="../assets/Goku.jpeg" alt="" />
            </div>
          </div>
          <div class="details">
            <div class="top">
              <div class="name">
                <span>Goku bn Raditz</span>
              </div>
              <div class="time">
                <span>20:22</span>
              </div>
            </div>
            <!-- <div class="bottom">
              <p>You coming today coz I've been waiting for your ret?</p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="welcome-message">
        <h1>WELCOME TO SPIIK</h1>
        <p>🎉🎉🎉🎉</p>
      </div>
      <div class="chat-box">
        <header>
          <div class="details">
            <div class="profile-img">
            <img src="../assets/Anos.jpeg" alt="" />
          </div>
          <div class="name-user">
            <div class="name">
            <span>Anos Voldigoad</span>
          </div>
          <div class="username">
            <span>@anos_voldigoad</span>
            </div>
          </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main .welcome-message {
  width: 300px;
  margin: 20px auto;
  text-align: center;
}
.chat-box {
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(239, 235, 235);
  height: 100%;
  width: 100%;
}
.chat-box header {
  width: 100%;
  padding: 10px 16px;
  background: rgb(248, 249, 249);
}
.chat-box header .details {
    display: flex;
    align-items: center;
}
.chat-box header .profile-img {
  height: 49px;
  width: 49px;
}
.chat-box header .profile-img img {
  width: 100%;
  border-radius: 50%;
}
.chat-box header .details .name-user {
    margin-left: 20px;
}

.sidebar,
.main {
  min-height: 20px;
  position: relative;
}
.view {
  display: flex;
  height: calc(100vh - 100px);
}
.sidebar {
  flex: 0 0 35%;
  max-width: 35%;
  background: #e2e2e2;
  overflow-x: scroll;
}
.main {
  flex: 0 0 65%;
  max-width: 65%;
  background: rebeccapurple;
}
.sidebar header {
  padding: 10px 16px;
  background: rgb(248, 249, 249);
  margin-bottom: 10px;
}
.chats .chat {
  height: 72px;
  display: flex;
  align-items: center;

  border-top: 1px solid gray;
  cursor: pointer;
}
.img-section {
  margin-right: 8px;
}
.chat .profile-img {
  height: 49px;
  width: 49px;
}
.chat .profile-img img {
  width: 100%;
  border-radius: 50%;
}
.chats .chat .details {
  width: 100%;
  padding-right: 15px;
}
.chats .chat .details .top {
  display: flex;
  align-items: center;
}
.chats .chat .details .top .name {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
.chats .chat .details .top .time {
  padding-left: 4px;
}
.chats .chat .details .bottom {
  padding-left: 15px;
}
.details .top span {
  overflow: hidden;
  line-height: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.details .bottom p {
  overflow: hidden;
  line-height: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
