<script setup>
import Modal from "./components/Modal.vue"
import Post from "./components/Post.vue"
import { ref } from "vue"
import Pagination from "./components/Pagination.vue";

/**
 * thumbnail => tom sträng om det inte finns en bild
 * created => UNIX-timestamp
 * num_comments => number
 * author => Specialare
 * score => numbers
 * permalink => http-länk
 * title => Vanlig sträng
 */
let config = {
  after: null,
  before: null,
  limit: 10,
  count: 0,
  page: 1
}

const redditResponse = ref(null)
const selectedPost = ref({})
const modalRef = ref(null)

fetchData()

async function fetchData() {
  redditResponse.value = null
  const redditcall = await fetch(`https://www.reddit.com/r/javascript.json?limit=${config.limit}&after=${config.after}&count=${config.count}&before=${config.before}`)
  redditResponse.value = await redditcall.json()
}

function previousPage() {
  config.page--
  if (config.count % 2 == 0) {
    config.count++
  } else {
    config.count = config.count - config.limit
  }
  config.before = redditResponse.value.data.children[0].data.name
  config.after = null
  fetchData()
  scrollToTop()
}

function nextPage() {
  config.page++
  if (config.count % 2 != 0) {
    config.count--
  } else {
    config.count = config.count + config.limit
  }
  config.after = redditResponse.value.data.after
  if (redditResponse.value.data.after == null) {
    lastPage = true;
  }
  config.before = null
  fetchData()
  scrollToTop()
}

function scrollToTop(){
  window.scrollTo(0,0)
}
</script>

<template>
  <div class="flex flex-col mx-auto items-center">
    <Modal ref="modalRef"></Modal>
    <Post 
      v-if="redditResponse != null"
      v-for="post in redditResponse.data.children"
      :key="post.data.id"
      :post="post.data"
      @openPost="modalRef.openModal(post.data)"
    />
    <div v-else><span class="loading loading-dots loading-md"></span></div>
    <Pagination :page="config.page" @previous="previousPage" @next="nextPage"/>
  </div>
</template>
