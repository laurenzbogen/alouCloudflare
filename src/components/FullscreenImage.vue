<script setup lang="ts">
import ClImage from "@/components/ClImage.vue";
import { twMerge } from "tailwind-merge";

const { image } = defineProps(["image"])
const { id, ratio } = image

const base = "object-cover max-w-none"

const sizing = ratio > 1 ? 
	"w-[90vw] md:w-[70vw] 2xl:w-[55vw] max-w-[1400px] aspect-[1.5] max-h-[80vh]" 
	: "w-[53.9vh] aspect-[0.77] max-w-[90vw] md:max-w-[70vw]"


const className = twMerge(base, sizing)
</script>

<template>
	<ClImage :class="className" :id="id" />
</template>
