<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'



const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function handleClick(e: PointerEvent) {
  const el = e.target as HTMLElement
  if (el !== null) {
    if (el.tagName !== "IMG") {

    }
  }
}

</script>

<template>
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 bg-black/80  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
    </DialogOverlay>

    <DialogContent @click="handleClick" v-bind="forwarded" :class="cn(
      'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 shadow-lg data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      props.class,
    )">
      <slot />

      <!-- <DialogClose -->
      <!--   class="fixed right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"> -->
      <!--   <X class="w-12 h-12 text-accent-300 cursor-pointer bg-background/20" /> -->
      <!--   <span class="sr-only">Close</span> -->
      <!-- </DialogClose> -->
    </DialogContent>
  </DialogPortal>
</template>
