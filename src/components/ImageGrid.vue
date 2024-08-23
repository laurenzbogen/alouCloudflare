<script setup lang="ts">
import ClImage from "@/components/ClImage.vue";
import FullscreenImage from "@/components/FullscreenImage.vue"
import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogTrigger,
} from '@/components/ui/galleryDialog'

// TODO dynamic row size (prop)

import { X } from 'lucide-vue-next'
// import {
// 	Dialog,
// 	DialogContent,
// 	DialogTrigger,
// } from '@/components/ui/dialog'

const { ids } = defineProps(["ids"])
</script>

<template>
	<div class="p-0 sm:px-4 md:px-12 m-auto">
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-1 p-1 cursor-auto">
			<Dialog v-for="(image, i) in ids" class="">
				<DialogTrigger >
					<ClImage class="align-middle w-full cursor-pointer" :id="image.id" :crop-ratio="1" :placeholder="image.placeholder"
						:sizes="[[['sm', '33vw']], '50vw']" />
				</DialogTrigger>
				<DialogContent @close-auto-focus="(e) => {}"
					class="flex bg-transparent items-center pointer-events-none">
					<!-- <ClImage class="h-screen max-h-[80vh] object-cover max-w-[50vw] m-auto" :id="id" /> -->
					<FullscreenImage :image="image" />
				</DialogContent>
			</Dialog>
		</div>
	</div>
</template>
