<script setup lang="ts">

import {ref} from "vue";

const inputValue = ref({inputValue: ""})

</script>

<template>
  <input class="input-field" type="text" v-model="inputValue.inputValue">
</template>

<style scoped>
.input-field {
  box-shadow: 0 0 5px var(--color-shadow);
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  width: 377px;
  height: 47px;
  font-size: var(--body-font-size);
}
</style>