<script setup lang="ts">
import ConfiguratorForm from '../components/ConfiguratorForm.vue'
</script>

<template>
  <div class="configurator">
    <h4>
      Создание нового заказа
    </h4>
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
