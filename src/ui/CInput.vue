<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import type { ValidationRule } from 'quasar'

defineProps<{
  modelValue: string | number | undefined,
  label?: string,
  type?: InputType,
  rules?: ValidationRule[] | undefined
  error?: boolean
  hint?: string
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
        :bg-color="modelValue ? 'secondary' : undefined"
        outlined
        :label="label"
        :type="type"
        :rules="rules"
        :error="error"
        :hint="hint"
        reactive-rules
    >
      <template v-if="modelValue" v-slot:append>
        <q-icon name="done" color="primary"/>
      </template>
    </q-input>
  </div>
</template>

<style scoped>
.configurator-text-input {
  width: 100%;
}
</style>
