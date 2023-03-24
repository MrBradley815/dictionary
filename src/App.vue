<template>
  <header>
    <div class="container">
      <nav>
        <img src="@/assets/images/logo.svg" class="logo" alt="Logo" />
        <div>
          <FontSelect />
          <DarkMode />
        </div>
      </nav>
      <Search />
    </div>
  </header>
  <main v-if="definition">
    <div class="container">
      <div class="def-heading">
        <div>
          <h1>{{ definition.word }}</h1>
          <h2>{{ definition.phonetic }}</h2>
        </div>
        <button class="play" @click="handlePlay(definition.phonetics[0].audio)"><Play /></button>
      </div>
      <div class="def-body">
        <MeaningsList :meanings="definition.meanings" />
      </div>
    </div>
  </main>
  <footer v-if="definition">
    <div class="container">
      <div class="footer-inner">
        <p class="small">Source<a :href="definition.sourceUrls[0]" target="_blank">{{ definition.sourceUrls[0] }}</a>&nbsp;&nbsp;<a :href="definition.sourceUrls[0]" target="_blank"><NewWindow /></a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import Search from '@/components/Search.vue'
  import FontSelect from '@/components/FontSelect.vue'
  import DarkMode from '@/components/DarkMode.vue'
  import Play from '@/components/icons/Play.vue'
  import NewWindow from '@/components/icons/NewWindow.vue'
  import MeaningsList from '@/components/MeaningsList.vue'
  import { useDefinitions } from '@/stores/definitions.js'
  import { storeToRefs } from 'pinia'

  const store = useDefinitions()
  const { definition } = storeToRefs(store)

  function handlePlay(url) {
    const audio = new Audio(url)
    audio.play()
  }
</script>

<style scoped>
  
</style>
