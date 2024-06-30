<script setup lang="ts">

import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

function ChangePage(pageLink: string): void {
  router.push(pageLink);
}
</script>

<template>
  <div class="header-container">
    <div class="logo-container">
      <img @click="ChangePage('/news')" src="../assets/img/STSpic.jpg" alt="STS logo">
    </div>
    <div class="linked-text-buttons">
      <h2 @click="ChangePage('/news')">Новости</h2>
      <h2 @click="ChangePage('/department')">Отдел</h2>
    </div>

  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 150px;
}

.logo-container img {
  width: 100px;
  padding: 25px 10px;
}
.linked-text-buttons {
  display: flex;
  justify-content: space-between;
}

.linked-text-buttons h2, .logo-container img {
  cursor: pointer;
}
</style>