<script setup lang="ts">
import StudentCouncilText from "@/components/texts/StudentCouncilText.vue";
import InputField from "@/components/InputField.vue";
import StyleClickButton from "@/components/StyleClickButton.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

const InputLoginPassword = ref({login: "login", password: "password"});


async function OnEnterButtonClick(Input: any) {

  let response = await fetch("/api/authorise", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      login: Input.login,
      password: Input.password
    })
  })
  if (response.ok) {
    await router.push("/news");
  }

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
      <InputField v-model="InputLoginPassword.login"/>
      <h3 class="login-password">Пароль</h3>
      <InputField v-model="InputLoginPassword.password" type="password"/>
      <StyleClickButton @click="OnEnterButtonClick(InputLoginPassword)" class="style-button"/>
    </div>
  </div>
</template>

<style scoped>

.icon {
  width: 145px;
  box-shadow: 0 0 3px var(--color-shadow);
}

.header-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
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
  border-radius: 25px;
  padding: 10px 20px;
  background: var(--color-item-background);
  box-shadow: 0 0 5px var(--color-shadow);
}

.enter-text {
  text-align: center;
}

.style-button {
  margin: 70px 0;
  box-shadow: 0 0 2px var(--color-shadow);
}

.logo img {
  border-radius: 20px;
}
</style>