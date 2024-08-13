<script setup>
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { email } from "@/data/data.json"
import { useToast } from '@/components/ui/toast/use-toast'


import { Button } from './ui/button';
import { Send, Clipboard } from 'lucide-vue-next';

const { toast } = useToast();

async function copyURL(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to Clipboard',
    });
  } catch ($e) {
    toast({
      title: 'Couldnt Copy',
    });
  }
}
</script>


<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogContent class="p-8">
      <DialogHeader>
        <DialogTitle>Kontakt</DialogTitle>
        <DialogDescription class="font-bold text-xl mb-6">

	      Bei Konzertanfragen wenden Sie sich gern an: 
          {{ email }}
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button @click="() => { copyURL(email) }" class="opacity-90 hover:opacity-100" variant="secondary">
          <Clipboard />
        </Button>
        <Button as-child class="no-underline hover:underline">
          <a :href="`mailto:${email}`">
            <Send class="w-5 h-5 mr-4" />E-mail schreiben
          </a>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

