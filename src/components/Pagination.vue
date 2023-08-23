<script setup>
import {
 ChevronRightIcon,
 ChevronLeftIcon
} from "@heroicons/vue/24/outline";

const props = defineProps({
  page: {type: Number, default: 1}
})

defineEmits(['previous', 'next'])

</script>

<template>
  <div class="join">
    <button :disabled="page == 1" @click="$emit('previous')" class="join-item btn"><ChevronLeftIcon class="w-6 h-6" /></button>
    <button class="join-item btn">Page {{ page }}</button>
    <button @click="$emit('next')" class="join-item btn"><ChevronRightIcon class="w-6 h-6"/></button>
  </div>
</template>