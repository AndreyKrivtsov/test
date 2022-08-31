<script setup lang="ts">
import { defineEmits } from 'vue'
import type { SelectOption } from '@/types'
import type { ValidationRule } from 'quasar'

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
        :bg-color="modelValue ? 'secondary' : undefined"
        outlined
    >
      <template v-if="modelValue" v-slot:append>
        <q-icon name="done" color="primary"/>
      </template>
    </q-select>
  </div>
</template>

<style scoped>
.configurator-select {
  width: 100%;
}
</style>
