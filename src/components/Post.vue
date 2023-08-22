<script setup>
import {
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  PencilSquareIcon,
  LinkIcon,
  PhotoIcon,
} from "@heroicons/vue/24/outline";
import { useLimitString } from '../composables/limitString'

const props = defineProps({
  post: { type: Object, required: true },
});

defineEmits(["openPost"]);

</script>

<template>
  <div
    class="flex card max-w-96 lg:w-1/3 w-full bg-base-100 shadow-md my-2 overflow-hidden"
    @click="$emit('openPost')"
  >
    <div class="flex">
      <figure class="w-1/3">
        <img v-if="post.thumbnail" :src="post.thumbnail" />
        <PhotoIcon v-else class="text-gray-200" />
      </figure>
      <div class="flex-col w-2/3 self-center">
        <p class="flex text-sm items-center pb-2">
          <UserCircleIcon class="w-4 h-4 mr-2" />
          <span class="">{{ post.author }}</span>
        </p>
        <h2 class="hidden md:block card-title pr-4">
          {{ useLimitString(post.title, 200) }}
        </h2>
        <h2 class="block md:hidden card-title pr-4">
          {{ useLimitString(post.title, 50) }}
        </h2>
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
      </div>
    </div>
    <div class="card-body py-2 justify-between">
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
    </div>
  </div>
</template>
