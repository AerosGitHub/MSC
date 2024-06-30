<script setup lang="ts">
import StudentCouncilText from "@/components/texts/StudentCouncilText.vue";
import InputField from "@/components/InputField.vue";
import StyleClickButton from "@/components/StyleClickButton.vue";
import {useRouter} from "vue-router";

const router = useRouter();

function OnEnterButtonClick() {
  router.push("/news")
}

</script>

<template>
  <header class="header-group">
    <div class="logo">
      <img class="icon" src="../assets/img/STSpic.jpg" alt="Sts logo">
      <StudentCouncilText/>
    </div>
  </header>
  <div class="sign-in-container">
    <div class="sign-in-block">
      <h2 class="enter-text">Вход</h2>
      <h3 class="login-password">Логин</h3>
      <InputField/>
      <h3 class="login-password">Пароль</h3>
      <InputField type="password"/>
      <StyleClickButton @click="OnEnterButtonClick" class="style-button"/>
    </div>
  </div>
</template>

<style scoped>

.icon {
  width: 145px;
}

.header-group {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.logo {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in-container {
  margin: 100px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign-in-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px 20px;
}

.enter-text {
  text-align: center;
}

.style-button {
  margin: 70px 0;
}
</style>