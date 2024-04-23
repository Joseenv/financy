import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isActive = ref(false)

  const toggleButtonStatus = () => {
    isActive.value = !isActive.value
  }

  return { isActive, toggleButtonStatus }
})
