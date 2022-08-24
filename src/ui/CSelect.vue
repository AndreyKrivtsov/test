<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{
  modelValue: SelectOption | undefined
  options: SelectOption[]
  label?: string
}>()

export interface SelectOption {
  label: string
  value: string
  [key: string]: string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void,
}>()

// const double = computed<number>(() => {
//   // type error if this doesn't return a number
// })

function handleInput(event: SelectOption) {
  emit('update:modelValue', event)
}
</script>

<template>
  <div class="configurator-select">
    <q-select outlined :model-value="modelValue" :options="options" @update:model-value="handleInput" :label="label" />
  </div>
</template>

<style scoped>
.configurator-select {
  width: 100%;
}
</style>
