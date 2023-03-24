<template>
  <div class="custom-select">
    <div class="selector" @click="toggle()">
      <div class="label">{{ value }}</div>
      <div class="arrow"><ArrowDown /></div>
      <div :class="{ hidden: !visible, visible }">
        <ul>
          <li
            :class="[{ current: font === value }, font.replace(/\s+/g, '-').toLowerCase()]"
            v-for="(font, i) in fontList"
            :key="i"
            @click="select(font)">{{ font }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ArrowDown from '@/components/icons/ArrowDown.vue'
  import { ref } from 'vue'

  const value = ref('Sans Serif')
  const visible = ref(false)
  const fontList = ref(['Sans Serif', 'Serif', 'Mono'])

  const toggle = () => {
    visible.value = !visible.value
  }

  const select = (font) => {
    value.value = font

    switch (font) {
      case 'Sans Serif':
        document.body.style.fontFamily = '"Inter", sans-serif'
        break
      case 'Serif':
        document.body.style.fontFamily = '"Inconsolata", serif'
        break
      case 'Mono':
        document.body.style.fontFamily = '"Lora", monospace'
        break
      default:
        document.body.style.fontFamily = '"Inter", sans-serif'
    }
  }
</script>

<style scoped>
  .custom-select {
    width: 20.9rem;
    margin-right: 2.6rem;
    padding-right: 2.6rem;
    border-right: 1px solid var(--color-gray-400);
  }
  
  .selector {
    position: relative;
    cursor: pointer;
    z-index: 1;
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .label {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.0;
    padding-left: 6.3rem;
  }

  ul {
    position: absolute;
    bottom: -2.4rem;
    transform: translateY(100%);
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    background-color: var(--body-background);
    width: 100%;
    padding: 2.4rem;
    box-shadow: var(--box-shadow);
    border-radius: 1.6rem;
  }

  li {
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    /* transition: all .15s; */
  }

  li:hover {
    color: var(--color-purple-400);
  }

  .sans-serif {
    font-family: "Inter", sans-serif !important;
  }

  .serif {
    font-family: "Inconsolata", serif !important;
  }

  .mono {
    font-family: "Lora", monospace !important;
  }

  .hidden {
    visibility: hidden;
  }

  .visible {
    visibility: visible;
  }
</style>