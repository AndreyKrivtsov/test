<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import type { ValidationRule } from 'quasar'

defineProps<{
  modelValue: string | number | undefined,
  label?: string,
  type?: InputType,
  rules?: ValidationRule[] | undefined
}>()

type InputType =
    'text'
    | 'password'
    | 'textarea'
    | 'email'
    | 'search'
    | 'tel'
    | 'file'
    | 'number'
    | 'url'
    | 'time'
    | 'date'

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void,
}>()

function handleInput(value: string | number | null) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="configurator-text-input">
    <q-input
        :model-value="modelValue"
        @update:modelValue="handleInput"
        outlined
        :label="label"
        :type="type"
        :rules="rules"
    />
  </div>
</template>

<style scoped>
.configurator-text-input {
  width: 100%;
}
</style>
