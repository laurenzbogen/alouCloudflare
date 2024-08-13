<script setup>
import { twMerge } from "tailwind-merge";
import { ref } from "vue";
import { getCldSourcset, getSizes } from "@/imageUtilities"

const testURL = `https://picsum.photos/seed/${Math.random()}/800`;

const { id, aspectRatio, cropRatio, height, width, className } = defineProps({
  id: String,
  height: Number,
  width: Number,
  aspectRatio: Number,
  cropRatio: Number,
  className: String,
  // Todo Typescript support for ImageSizes
  sizes: Array,
  loading: String,
})


const srcSet = getCldSourcset({
  id: id,
  widths: undefined,
  cropRatio: cropRatio,
})



const img = ref(null);

const bassCl = ""
const cl = twMerge(bassCl, className, getRatio())
function getRatio() {
  const ratio = aspectRatio === undefined ? cropRatio : aspectRatio
  if (ratio === undefined) return ""
  if (ratio > 1) return `w-full h-auto aspect-[${ratio}]`
  return `w-auto h-full aspect-[${ratio}]`
}

function get_fallback(id) {
  return ""
  if (id == "test") return testURL
  const img = get_cloudinary_image(id);
  return img.toURL();
}
</script>

<template>
  <img ref="img" :class="cl" :src="get_fallback(src)" :loading="loading? loading : 'lazy'" alt="test" :sizes="getSizes(sizes)"
    :srcset="srcSet" />
</template>
