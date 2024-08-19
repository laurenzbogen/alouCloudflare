<script setup>

import { Instagram, AudioLines, Youtube } from "lucide-vue-next";
import { instagram, youtube, soundcloud } from "@/data/data.json"
import Link from "@/components/Link.vue"

const socials = [
  { icon: Instagram, link: instagram },
  { icon: AudioLines, link: soundcloud },
  { icon: Youtube, link: youtube },
]

</script>


<template>
  <Link v-for="{link, icon} in socials" :href=link variant="link" size="icon">
    <component :is="icon" />
  </Link>
</template>
