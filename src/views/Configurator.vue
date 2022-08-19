<script setup lang="ts">
import ConfiguratorForm from '../components/ConfiguratorForm.vue'
</script>

<template>
  <div class="configurator">
    <h1>
      Конфигуратор
    </h1>
    <ConfiguratorForm  msg=""/>
  </div>
</template>

<style scoped>
.configurator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
