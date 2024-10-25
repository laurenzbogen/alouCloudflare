<script setup>
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/galleryDialog'
</script>


<template>
  <Dialog>
    <DialogTrigger class="">
      <slot name="Trigger"/>
    </DialogTrigger>
    <DialogContent class="flex bg-transparent items-center pointer-events-none">
      <slot name="Fullscreen"/>
    </DialogContent>
  </Dialog>
</template>
