<script setup>

const props = defineProps({
  page: {type: Number, default: 1}
})

defineEmits(['previous', 'next'])

</script>

<template>
  <div class="join">
    <button :disabled="page == 1" @click="$emit('previous')" class="join-item btn">«</button>
    <button class="join-item btn">Page {{ page }}</button>
    <button @click="$emit('next')" class="join-item btn">»</button>
  </div>
</template>