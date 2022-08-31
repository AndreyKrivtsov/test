<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps<{
  modelValue: string | undefined,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void,
}>()

function handleInput(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="configurator-date-picker">
    <q-date
        :model-value="modelValue"
        @update:model-value="handleInput"
        :bg-color="modelValue ? 'secondary' : undefined"
        minimal
    />
  </div>
</template>

<style scoped>
.configurator-date-picker {
}
</style>
