<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps<{
  modelValue: number,
  min: number,
  max: number,
  markers: number,
  markerLabels: (value: string) => string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void,
}>()

function handleInput(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="configurator-slider">
    <q-slider
        :model-value="modelValue"
        color="secondary"
        :min="min"
        :max="max"
        :markers="markers"
        :marker-labels="markerLabels"
        @update:model-value="handleInput"
    />
  </div>
</template>

<style scoped>
.configurator-slider {
}
</style>
