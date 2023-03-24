<template>
  <form class="search" @submit.prevent="handleSubmit()">
    <input type="text" :class="{ error: hasError }" v-model="search" placeholder="Search for any word..." />
    <button type="submit"><Search /></button>
  </form>
</template>

<script setup>
  import Search from '@/components/icons/Search.vue'
  import { useDefinitions } from '@/stores/definitions.js'
  import { ref } from 'vue'

  const defStore = useDefinitions()
  const search = ref('')
  const hasError = ref(false)

  function handleSubmit() {
    hasError.value = false

    if (search.value.length < 1) {
      hasError.value = true
      return
    }

    defStore.fetchDefinition(search.value)
  }
</script>