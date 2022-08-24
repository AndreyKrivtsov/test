<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'click'): void,
}>()
</script>

<template>
  <div class="configurator-button">
    <q-btn @click="emit('click')" :loading="loading"><slot></slot></q-btn>
  </div>
</template>

<style scoped>
.configurator-button {
}
</style>
