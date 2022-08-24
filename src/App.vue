<script setup lang="ts">
import {  RouterView } from 'vue-router'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
if (prefersDarkScheme.matches) {
  $q.dark.set(true)
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
