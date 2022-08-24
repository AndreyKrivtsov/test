<script setup lang="ts">
import { defineEmits } from 'vue'
import type { SelectOption } from '@/types'

defineProps<{
  modelValue: SelectOption | undefined
  options: SelectOption[]
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: SelectOption): void,
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
