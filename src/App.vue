<script setup lang="ts">
import {  RouterView } from 'vue-router'
import { useQuasar } from 'quasar'
import { nextTick } from 'vue'

// ОТКЛЮЧЕНИЕ ТЕМНОГО РЕЖИМА
nextTick(() => {
  document.body.classList.remove('body--dark')
})

const $q = useQuasar()

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
if (prefersDarkScheme.matches) {
  $q.dark.set(false) // should TRUE
} else {
  $q.dark.set(false)
}
</script>

<template>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Заказы</RouterLink>-->
<!--        <RouterLink to="/new">Новый заказ</RouterLink>-->
<!--        <RouterLink to="/clients">Клиенты</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
