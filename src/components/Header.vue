<script setup>
import ContactWrapper from "@/components/Contact.vue";
import { Button } from "@/components/ui/button";
import Link from "./Link.vue";
import ClImage from "@/components/ClImage.vue";

import { Instagram } from "lucide-vue-next";


</script>


<template>
  <header class="relative flex flex-col lg:flex-col">
    <div class="flex justify-center lg:flex">
      <img src="/logo.png" alt="logo" class="h-36 md:h-56 object-contain" />
    </div>
    <nav class="lg:block hidden items-center p-2 w-full">
      <div class="max-w-xl flex justify-around m-auto gap-8">
        <Link class="" variant="link" href="#quartet">Quartet</Link>
        <Link class="" variant="link" href="#termine">Termine</Link>
        <Link class="" variant="link" href="#media">Media</Link>
      </div>
    </nav>
    <div class="relative max-w-[120vh] m-auto">
      <ClImage class="w-full object-cover aspect-[1.6] md:aspect-[1.8]" id="Alou/xrvb2c83zcpfxhm6nwlj" pid="hero" />
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-between w-full items-end max-w-screen-3xl">


        <!-- <img :src="url" class="w-full object-cover aspect-[1.6] xl:aspect-[1.8]" id="Alou/xrvb2c83zcpfxhm6nwlj" /> -->

        <div class="opacity-0 lg:opacity-0">
          <img src="/logo.png" alt="logo" class="invert h-[20vw] object-contain" />
        </div>

        <div class="m-6 gap-4 flex">
          <ContactWrapper client:only>
            <!-- Standard Link Styling -->
            <Button class="text-white underline hover:text-blue-800" size="lg" variant="outline">
              <div class="text-xl">Kontakt</div>
            </Button>
          </ContactWrapper>
          <Button class="text-white underline hover:text-blue-800" size="icon_lg" variant="outline">
            <Instagram class="w-4" />
          </Button>
        </div>
      </div>
    </div>


    <nav class="lg:hidden bg-background1 bg-cover items-center p-2 w-full">
      <div class="max-w-xl flex justify-around m-auto gap-8">
        <Link class="" variant="link" href="#quartet">Quartet</Link>
        <Link class="" variant="link" href="#termine">Termine</Link>
        <Link class="" variant="link" href="#media">Media</Link>
      </div>
    </nav>
  </header>
</template>



