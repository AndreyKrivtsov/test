<script setup lang="ts">
import { defineEmits } from 'vue'
import type { SelectOption } from '@/types'
import { ValidationRule } from 'quasar'

defineProps<{
  modelValue: SelectOption | undefined
  options: SelectOption[]
  label?: string
  rules?: ValidationRule[] | undefined
  error?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: SelectOption): void,
}>()

function handleInput(event: SelectOption) {
  emit('update:modelValue', event)
}
</script>

<template>
  <div class="configurator-select">
    <q-select
        :label="label"
        :model-value="modelValue"
        :options="options"
        @update:model-value="handleInput"
        :rules="rules"
        :error="error"
        :bg-color="modelValue ? 'secondary' : null"
        outlined
    />
  </div>
</template>

<style scoped>
.configurator-select {
  width: 100%;
}
</style>
