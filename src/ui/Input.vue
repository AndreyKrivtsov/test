<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()

function handleInput($event) {
  console.log($event)
  this.$emit('input', '')
}
</script>

<template>
  <div class="configurator-text-input">
    <label>{{ label }}</label>
    <input :value="value" @input="handleInput" />
  </div>
</template>

<style scoped>
.configurator-text-input {
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
}

.configurator-text-input label {
  flex-grow: 1;
  color: #505050;
}
</style>
