<script setup>
import { ref } from 'vue'

const props = defineProps({
  post: {type: Object, required: true}
})

const post_modal = ref(null)

const parser = new DOMParser()


defineExpose({
  openModal
})

function openModal() {
  post_modal.value.showModal()
}

</script>

<template>
<!-- Open the modal using ID.showModal() method -->
<dialog v-show="post" id="post_modal" ref="post_modal" class="modal">
  <form method="dialog" class="modal-box max-w-4xl">
    <h3 class="font-bold text-lg">{{ post.title || ''}}</h3>
    <figure class="flex justify-center"><img src="../assets/Untitled.png" alt="Shoes" /></figure>
    <p class="py-4" v-html="parser.parseFromString(post.selftext_html || '', 'text/html').body.textContent"></p>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog> 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
