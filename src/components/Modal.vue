<script setup>
import { ref } from 'vue'

const post = ref({})
const modalRef = ref(null)
const parser = new DOMParser()

defineExpose({
  openModal
})

function openModal(newPost) {
  post.value = newPost
  modalRef.value.showModal()
}

</script>

<template>
<!-- Open the modal using ID.showModal() method -->
<dialog v-show="post" id="post-modal" ref="modalRef" class="modal">
  <form method="dialog" class="modal-box max-w-4xl">
    <h3 class="font-bold text-lg">{{ post.title || ''}}</h3>
    <figure v-if="post.thumbnail" class="flex justify-center"><img :src="post.thumbnail" /></figure>
    <p class="py-4" v-html="parser.parseFromString(post.selftext_html || '', 'text/html').body.textContent"></p>
  </form>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog> 
</template>

