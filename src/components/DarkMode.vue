<template>
  <div>
    <label class="switch">
      <input type="checkbox" @click="toggleDark()">
      <span class="slider round"></span>
    </label>
    <Moon />
  </div>
</template>

<script setup>
  import Moon from '@/components/icons/Moon.vue'
  import { useDark, useToggle } from '@vueuse/core'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 2rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--dark-mode-background);
    border-radius: 34px;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:hover {
    background-color: var(--color-purple-400);
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    left: 0.3rem;
    bottom: 0.3rem;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--color-purple-400);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--color-purple-400);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(2rem);
    -ms-transform: translateX(2rem);
    transform: translateX(2rem);
  }
</style>