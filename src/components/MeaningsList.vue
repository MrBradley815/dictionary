<template>
  <div class="meanings-list">
    <Meaning v-for="meaning in props.meanings" :key="meaning" :meaning="meaning" />
  </div>
</template>

<script setup>
  import Meaning from '@/components/Meaning.vue'

  const props = defineProps(['meanings'])
</script>