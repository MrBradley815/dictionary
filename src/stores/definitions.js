import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDefinitions = defineStore('definitions', {
  state: () => {
    return {
      definition: null,
      error: null
    }
  },
  actions: {
    async fetchDefinition(word) {
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await res.json()
        this.definition = data[0]
        console.log(this.definition)
      } catch (err) {
        this.error = err
      }
    }
  }
})