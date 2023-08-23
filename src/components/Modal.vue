<script setup>
import { ref } from "vue";
import {
  LinkIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  PencilSquareIcon,
} from "@heroicons/vue/24/outline";
const post = ref({});
const modalRef = ref(null);
const parser = new DOMParser();

defineExpose({
  openModal,
});

function openModal(newPost) {
  post.value = newPost;
  modalRef.value.showModal();
}
</script>

<template>
  <dialog v-show="post" id="post-modal" ref="modalRef" class="modal">
    <form method="dialog" class="modal-box max-w-4xl">
      <p class="flex text-sm items-center pb-2">
        <UserCircleIcon class="w-4 h-4 mr-2" />
        <span class="">{{ post.author }}</span>
      </p>
      <h3 class="font-bold text-lg">{{ post.title || "" }}</h3>
      <p class="flex pt-2">
        <LinkIcon class="w-6 h-6" />
        <a
          class="inline-block w-[274px] link link-hover link-primary text-ellipsis overflow-hidden whitespace-nowrap"
          target="_blank"
          rel="noreferrer noopener"
          :href="post.url"
          >{{ post.permalink }}</a
        >
      </p>
      <figure class="flex justify-center">
        <img :src="post.thumbnail" />
      </figure>
      <p
        class="py-4"
        v-html="
          parser.parseFromString(post.selftext_html || '', 'text/html').body
            .textContent
        "
      ></p>

      <div class="flex justify-between">
        <p class="flex grow-0">
          <StarIcon class="w-6 h-6 mr-2" />
          {{ post.score }}
        </p>
        <p class="flex grow-0">
          <ChatBubbleBottomCenterTextIcon class="w-6 h-6 mr-2" />
          {{ post.num_comments }}
        </p>
        <p class="flex grow-0">
          <PencilSquareIcon class="w-6 h-6 mr-2" />
          {{ new Date(post.created * 1000).toLocaleDateString("sv-se") }}
        </p>
      </div>
    </form>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
