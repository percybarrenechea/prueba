<template>
  <div v-if="message" :class="`p-4 mb-4 rounded-md border ${typeClasses}`">
    <p class="font-medium">{{ title }}</p>
    <p class="text-sm">{{ message }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  type: { type: String, default: 'info' },
  message: String,
});
const typeClasses = computed(() => {
  switch (props.type) {
    case 'error': return 'bg-red-50 border-red-200 text-red-700';
    case 'success': return 'bg-green-50 border-green-200 text-green-700';
    default: return 'bg-blue-50 border-blue-200 text-blue-700';
  }
});
const title = computed(() => {
  if (props.type === 'error') return 'Error';
  if (props.type === 'success') return 'Éxito';
  return 'Información';
});
</script>