<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{
  loading: boolean
  disable?: boolean
  disableText: string
}>()

const emit = defineEmits<{
  (e: 'click'): void,
}>()
</script>

<template>
  <div class="configurator-button">
    <q-btn
        @click="emit('click')"
        color="primary"
        :loading="loading"
        :disable="disable"
    >
      <slot></slot>
    </q-btn>
    <q-tooltip v-if="disable">
       {{ disableText }}
    </q-tooltip>
  </div>
</template>

<style scoped>
.configurator-button {
  width: 100%;
}
</style>
