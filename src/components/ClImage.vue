<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { onMounted, ref } from "vue";
import { getCldSourcset, getSizes, getCldSource } from "@/imageUtilities"

import * as thumb from "thumbhash"
import placeholders from "@/data/placeholders.json"

const testURL = `https://picsum.photos/seed/${Math.random()}/800`;

const { id, aspectRatio, cropRatio, height, width, className, placeholder } = defineProps({
  id: String,
  height: Number,
  width: Number,
  aspectRatio: Number,
  cropRatio: Number,
  className: String,
  // Todo Typescript support for ImageSizes
  sizes: Array,
  loading: String,
  placeholder: Uint8Array,

  pid: String,
})

// const placeholderBinary = placeholder
const placeholderBinary = [215, 247, 21, 13, 130, 151, 151, 135, 127, 119, 135, 138, 135, 135, 120, 136, 112, 142, 9, 211, 166]

const placeholderURL = placeholderBinary === undefined ?
  ""
  : thumb.thumbHashToDataURL(placeholderBinary)

console.log("PPP", placeholderURL)





const srcSet = getCldSourcset({
  id: id as string,
  widths: undefined,
  cropRatio: cropRatio,
})



const img = ref(null);
const imgLoading = ref(true);

function loadedCallback() {
  imgLoading.value = false;
  console.log(imgLoading.value, id)
}
const bassCl = "relative"
const cl = twMerge(bassCl, className, getRatio())
function getRatio() {
  const ratio = aspectRatio === undefined ? cropRatio : aspectRatio
  if (ratio === undefined) return ""
  if (ratio > 1) return `w-full h-auto aspect-[${ratio}]`
  return `w-auto h-full aspect-[${ratio}]`
}

const source = getCldSource(id as string)
</script>

<template>
  <div :class="cl">
    <img :src="placeholderURL" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
    <img ref="img" class="relative w-full h-full object-cover" :src="source" :loading="loading ? loading : 'lazy'" alt="test"
      :sizes="getSizes(sizes)" @load="imgLoading = false" :srcset="srcSet" />
  </div>
</template>
