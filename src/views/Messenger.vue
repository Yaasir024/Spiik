<template>
  <div class="app">
    <div class="header">
      <div class="logo">
        <svg
          viewBox="0 0 513 513"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
          />
        </svg>
      </div>
      <div class="user-settings">
        <img
          class="user-profile"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt=""
        />
      </div>
    </div>
    <div class="wrapper">
      <div class="conversation-area">
        <div class="msg">
          <img
            class="msg-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
            alt=""
          />
          <div class="msg-detail">
            <div class="msg-username">Madison Jones</div>
            <div class="msg-content">
              <span class="msg-message">What time was our meet</span>
              <span class="msg-date">20m</span>
            </div>
          </div>
        </div>
        <div class="msg active">
          <img
            class="msg-profile"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
            alt=""
          />
          <div class="msg-detail">
            <div class="msg-username">Miguel Cohen</div>
            <div class="msg-content">
              <span class="msg-message"
                >Adaptogen taiyaki austin jean shorts brunch</span
              >
              <span class="msg-date">20m</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-area">
        <div class="chat-area-header">
          <div class="chat-area-title">Miguel Cohen</div>
        </div>
        <div class="chat-area-main">
          <div class="chat-msg">
            <div class="chat-msg-text">
              <span
                >Neque gravida in fermentum et sollicitudin ac orci phasellus
                egestas. Pretium lectus quam id leo.</span
              >
              <div class="chat-msg-detail">
                <span>Miguel Cohen</span>
                <span>1.22pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg owner">
            <div class="chat-msg-text">
              <span> Hey </span>
              <div class="chat-msg-detail">
                <span>You</span>
                <span>1.40pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg owner">
            <div class="chat-msg-text">
              <span> How have you been </span>
              <div class="chat-msg-detail">
                <span>Y0u</span>
                <span>1.40pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg">
            <div class="chat-msg-text">
              <span>Hi</span>
              <div class="chat-msg-detail">
                <span>Miguel Cohen</span>
                <span>1.41pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg">
            <div class="chat-msg-text">
              <span>I've been cool man, Thing's been tough</span>
              <div class="chat-msg-detail">
                <span>Miguel Cohen</span>
                <span>1.41pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg">
            <div class="chat-msg-text">
              <span>You didn't even ask of me</span>
              <div class="chat-msg-detail">
                <span>Miguel Cohen</span>
                <span>1.42pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg owner">
            <div class="chat-msg-text">
              <span> Sorry </span>
              <div class="chat-msg-detail">
                <span>Y0u</span>
                <span>1.44pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg owner">
            <div class="chat-msg-text">
              <span>
                <img
                  src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&amp;rid=giphy.gif"
                />
              </span>
              <div class="chat-msg-detail">
                <span>Y0u</span>
                <span>1.45pm</span>
              </div>
            </div>
          </div>
          <div class="chat-msg owner">
            <div class="chat-msg-text">
              <span> Been out of town </span>
              <div class="chat-msg-detail">
                <span>Y0u</span>
                <span>1.45pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 1600px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}
.header {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.logo {
  color: var(--feature-color);
  width: 38px;
  flex-shrink: 0;
}
.logo svg {
  width: 100%;
}
.user-settings {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}
.user-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.wrapper {
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}
.conversation-area {
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
.conversation-area,
.detail-area {
  width: 340px;
  flex-shrink: 0;
}
.msg {
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
}
.msg.active {
  background: var(--active-conversation-bg);
  border-left: 4px solid var(--feature-color);
}
.msg-profile {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}
.msg-detail {
  overflow: hidden;
}
.msg-username {
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 15px;
}
.msg-content {
  font-weight: 500;
  font-size: 13px;
  display: flex;
}
.msg-message {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #969eaa;
}
.msg-date {
  font-size: 14px;
  color: var(--msg-date);
  margin-left: 3px;
}
.msg-date:before {
  content: "•";
  margin-right: 2px;
}

.chat-area {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.chat-area {
  flex-grow: 1;
}
.chat-area-header {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 78%,
    rgba(255, 255, 255, 0) 100%
  );
}
.chat-area-title {
  font-size: 18px;
  font-weight: 600;
}
.chat-area-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.chat-msg {
  display: flex;
  /* flex-direction: column; */
  padding: 0 20px 45px;
  position: relative;
}
.chat-msg-text {
  background-color: #f1f2f6;
  padding: 15px;
  border-radius: 20px 20px 20px 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  margin-left: 12px;
  max-width: 70%;
}
.chat-msg-text img {
    max-width: 300px;
    width: 100%;
}
.owner {
  flex-direction: row-reverse;
}
.owner .chat-msg-text {
  background-color: var(--feature-color);
  color: #fff;
  border-radius: 20px 20px 0 20px;
}
.owner .chat-msg-detail {
  position: absolute;
  bottom: -20px;
  right: 0;
  left: initial;
  font-size: 12px;
  font-weight: 600;
  color: #c0c7d2;
  white-space: nowrap;
}
.chat-msg-detail {
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 12px;
  font-weight: 600;
  color: #c0c7d2;
  white-space: nowrap;
}
</style>
