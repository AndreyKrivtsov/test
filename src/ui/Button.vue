<script setup lang="ts">
function handleSubmit() {
  this.$emit('button')
}
</script>

<template>
  <div class="configurator-button">
    <button @click="handleSubmit">
      Отправить
    </button>
  </div>
</template>

<style scoped>
.configurator-button {
  margin-top: 20px;
}
</style>
