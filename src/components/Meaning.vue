<template>
  <div class="meaning">
    <h2>{{ props.meaning.partOfSpeech }}<span></span></h2>
    <h3>Meaning</h3>
    <ul>
      <li v-for="def in props.meaning.definitions" :key="def">{{ def.definition }}<span v-if="def.example">"{{ def.example }}"</span></li>
    </ul>
    <h3 v-if="props.meaning.antonyms.length > 0" class="antonyms">
      <span>Antonyms</span>
      <span v-for="ant in props.meaning.antonyms" :key="ant" class="antonym"><button @click="handleClick(syn)">{{ ant }}</button></span>
    </h3>
    <h3 v-if="props.meaning.synonyms.length > 0" class="synonyms">
      <span>Synonyms</span>
      <span v-for="syn in props.meaning.synonyms" :key="syn" class="synonym"><button @click="handleClick(syn)">{{ syn }}</button></span>
    </h3>
  </div>
</template>

<script setup>
  import { useDefinitions } from '@/stores/definitions.js'

  const props = defineProps(['meaning'])
  const defStore = useDefinitions()

  function handleClick(word) {
    defStore.fetchDefinition(word)
  }
</script>