<script setup lang="ts">
import { ref } from 'vue'
import { putOrder } from '@/api/orders'
import CInput from '@/ui/CInput.vue'
import CButton from '@/ui/CButton.vue'
import CSelect from '@/ui/CSelect.vue'
import CSlider from '@/ui/CSlider.vue'
import type { SelectOption } from '@/types'

defineProps<{
  msg: string
}>()

const segments: SelectOption[] = [
  { value: '1', label: 'Серверы' },
  { value: '2', label: 'СХД' },
  { value: '3', label: 'Маршрутизаторы' },
]

const vendors: SelectOption[] = [
  {
    value: '1',
    label: 'IBM',
    description: 'Американская компания со штаб-квартирой в Армонке, один из крупнейших в мире производителей и поставщиков аппаратного и программного обеспечения, а также IТ-сервисов и консалтинговых услуг.'
  },
  {
    value: '2',
    label: 'Dell',
    description: 'Американская корпорация, одна из крупнейших компаний в области производства компьютеров.'
  },
  {
    value: '3',
    label: 'Cisco',
    description: 'Американская транснациональная компания, разрабатывающая и продающая сетевое оборудование, предназначенное в основном для крупных организаций и телекоммуникационных предприятий.'
  },
]

const terms: SelectOption[] = [
  { value: '1', label: 'DDP Москва' },
  { value: '2', label: 'ФОБ Шень-жень' },
  { value: '3', label: 'Казахстан/узбекистан' },
]

const phone = ref('')
const name = ref('')
const company = ref('')
const inn = ref('')
const selectedSegment = ref<SelectOption | undefined>()
const selectedVendor = ref<SelectOption | undefined>()
const selectedTerms = ref<SelectOption | undefined>()
const quantity = ref(1)
const prepayment = ref(50)
const date = ref('')
const additionalInfo = ref('')
const isSubmitLoading = ref(false)

function handleSelectSegment(event: Event) {
  console.log(event)
}

function handleSelectVendor(event: Event) {
  console.log(event)
}

function handleSelectTerms(event: Event) {
  console.log(event)
}

async function handleSubmit() {
  isSubmitLoading.value = true
  const result = await putOrder('тестовый запрос')
  isSubmitLoading.value = false
  console.log(result)
}

function fnMarkerLabel(value: string) {
  return `${value}%`
}
</script>

<template>
  <div class="configurator-form">
    <div class="configurator-form__group">
      <div class="configurator-form__title">
        Информация о заказчике
      </div>

      <div class="configurator-form__form-element">
        <CInput
            v-model="phone"
            label="Телефон"
        />
      </div>

      <div class="configurator-form__form-element">
        <CInput v-model="name" label="Имя"/>
      </div>

      <div class="configurator-form__form-element">
        <CInput v-model="company" label="Название компании"/>
      </div>

      <div class="configurator-form__form-element">
        <CInput v-model="inn" label="ИНН"/>
      </div>
    </div>

    <div class="configurator-form__group">
      <div class="configurator-form__title">
        Выберите продукт:
      </div>

      <div class="configurator-form__form-element">
        <CSelect
            v-model="selectedSegment"
            :options="segments"
            @input="handleSelectSegment"
            label="Продуктовый сегмент"
        />
      </div>

      <div class="configurator-form__form-element">
        <CSelect v-model="selectedVendor" :options="vendors" @input="handleSelectVendor" label="Вендор"/>
      </div>


      <div class="configurator-form__title" style="margin-top: 24px">
        Описание
      </div>
      <div class="configurator-form__form-element">
        <span v-if="selectedVendor">
          {{ selectedVendor.description }}
        </span>
        <span v-else>Описание появится после выбора продукта</span>
      </div>
    </div>


    <div class="configurator-form__group">
      <div class="configurator-form__form-element">
        <CInput type="number" v-model="quantity" label="Кол-во позиций"/>
      </div>
      <div class="configurator-form__form-element">
        <CSelect v-model="selectedTerms" :options="terms" @input="handleSelectTerms" label="Условия поставки"/>
      </div>

      <div class="configurator-form__title" style="margin-top: 24px">
        Ожидаемый срок поставки
      </div>
      <div class="configurator-form__form-element">
        <CInput type="date" v-model="date" />
      </div>

      <div class="configurator-form__title" style="margin-top: 24px">
        Размер предоплаты, {{ prepayment }}%
      </div>
      <div class="configurator-form__form-element" style="width: 90%; margin: auto auto 20px;">
        <div style="width: 100%">
          <CSlider
              v-model="prepayment"
              :min="30"
              :max="100"
              :markers="70"
              :marker-labels="fnMarkerLabel"
          />
        </div>
      </div>

      <div class="configurator-form__form-element">
        <CInput label="Дополнительная информация" v-model="additionalInfo" type="textarea" />
      </div>

    </div>

    <div class="configurator-form__submit">
      <CButton :loading="isSubmitLoading" @click="handleSubmit">Отправить</CButton>
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
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #9a9a9a;
}

.configurator-form__form-element {
  width: 100%;
  margin-bottom: 20px;
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
