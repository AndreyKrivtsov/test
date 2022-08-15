<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const segments = [
  { id: 0, title: 'Не выбрано' },
  { id: 1, title: 'Серверы' },
  { id: 2, title: 'СХД' },
  { id: 3, title: 'Маршрутизаторы' },
]

const vendors = [
  { id: 0, title: 'Не выбрано', description: 'Выберите вендора' },
  { id: 1, title: 'IBM', description: 'Американская компания со штаб-квартирой в Армонке, один из крупнейших в мире производителей и поставщиков аппаратного и программного обеспечения, а также IТ-сервисов и консалтинговых услуг.' },
  { id: 2, title: 'Dell', description: 'Американская корпорация, одна из крупнейших компаний в области производства компьютеров.' },
  { id: 3, title: 'Cisco', description: 'Американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий.' },
]

const terms = [
  { id: 0, title: 'Не выбрано' },
  { id: 0, title: 'DDP Москва' },
  { id: 0, title: 'ФОБ Шень-жень' },
  { id: 0, title: 'Казахстан/узбекистан' },
]

const selectedSegment = ref({ id: 0, title: 'Не выбрано' })
const selectedVendor = ref({ id: 0, title: 'Не выбрано', description: 'Выберите вендора' })

function handleSelectSegment($event: any) {
  const value = $event.target.value
  selectedSegment.value = segments.find(item => value === item.title) ?? segments[0]
}

function handleSelectVendor($event: any) {
  const value = $event.target.value
  selectedVendor.value = vendors.find(item => value === item.title) ?? vendors[0]
}
</script>

<template>
  <div class="configurator-form">

    <div class="configurator-form__group">
      <div style="margin-bottom: 24px">
        <div class="configurator-form__title">
          Контактная информация
        </div>
        <div class="configurator-form__form-element">
          <label>Телефон</label>
          <input/>
        </div>
        <div class="configurator-form__form-element">
          <label>Имя</label>
          <input/>
        </div>
      </div>

      <div class="configurator-form__title">
        Информация о конечном заказчике
      </div>
      <div class="configurator-form__form-element">
        <label>Название компании</label>
        <input/>
      </div>
      <div class="configurator-form__form-element">
        <label>ИНН</label>
        <input/>
      </div>
    </div>


    <div class="configurator-form__group">
      <div class="configurator-form__title">
        Продуктовый сегмент
      </div>
      <div class="configurator-form__form-element">
        <select :value="selectedSegment.title" @input="handleSelectSegment">
          <option v-for="item in segments">{{ item.title }}</option>
        </select>
      </div>

      <div class="configurator-form__title" style="margin-top: 24px">
        Вендор
      </div>
      <div class="configurator-form__form-element">
        <select :value="selectedVendor.title" @input="handleSelectVendor">
          <option v-for="item in vendors">{{ item.title }}</option>
        </select>
      </div>


      <div class="configurator-form__title" style="margin-top: 24px">
        Описание
      </div>
      <div class="configurator-form__form-element">
        {{ selectedVendor.description }}
      </div>
    </div>


    <div class="configurator-form__group">
      <div class="configurator-form__title">
        Кол-во позиций
      </div>
      <div class="configurator-form__form-element">
        <input type="number" step="1" :value="1" />
      </div>

      <div class="configurator-form__title" style="margin-top: 24px">
        Условия поставки
      </div>
      <div class="configurator-form__form-element">
        <select :value="terms.title">
          <option v-for="item in terms">{{ item.title }}</option>
        </select>
      </div>

      <div class="configurator-form__title" style="margin-top: 24px">
        Ожидаемый срок поставки
      </div>
      <div class="configurator-form__form-element">
        <input/>
      </div>
    </div>

    <div class="configurator-form__submit">
      <button>Отправить</button>
    </div>

  </div>
</template>

<style scoped>
.configurator-form {
  width: 100%;
  max-width: 500px;
  text-align: left;
}

.configurator-form__group {
  border: 1px solid #bebebe;
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}

.configurator-form__title {
  font-size: 16px;
  font-weight: bold;
  color: #9a9a9a;
}

.configurator-form__form-element {
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
}

.configurator-form__form-element label {
  flex-grow: 1;
  color: #505050;
  /*font-weight: bold;*/
}

.configurator-form__submit {
  margin-top: 20px;
}
</style>
