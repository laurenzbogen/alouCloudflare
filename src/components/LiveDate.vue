<script setup lang="ts">

import { Button } from "@/components/ui/button";

import { Ticket } from "lucide-vue-next"

const { data } = defineProps(['data'])
if (data === undefined) {

}

const { date, venue, city, mainLink, comment, commentLink } = data;

const formattedDate = new Date(date).toLocaleDateString("de-DE", {
  month: "short",
  day: "2-digit",
})
const parsedDate = new Date(date)
// hacky solution because of utc problems
const formattedTime = parsedDate.getUTCHours().toString().padStart(2, '0') + ":" + parsedDate.getUTCMinutes().toString().padStart(2, '0');


function checkStringSet(str: string) {
  return str != undefined && str.length > 0
}

</script>
<template>
  <li class="font-serif list-none mb-4">
    <div class="flex flex-col xs:flex-row justify-between items-center">
      <div class="text-2xl font-semibold">{{ formattedDate }}</div>
      <div>{{ formattedTime }}</div>
    </div>
    <div class="flex flex-col xs:flex-row justify-between items-center">
      <div class="font-bold">{{ city }}</div>
      <div class="text-right">{{ venue }}</div>
    </div>

    <div v-if="checkStringSet(comment) || checkStringSet(mainLink)"
      class="flex flex-col xs:flex-row justify-between items-center">
      <div v-if="commentLink == undefined">{{ comment }}</div>
      <Button as-child v-else variant="header" class="h-8 p-0 m-0 underline">
        <a class="block text-inherit text-lg py-4 font-normal" :href="commentLink">
          {{ comment }}
        </a>
      </Button>
      <Button v-if="mainLink !== undefined && mainLink !== ''" variant="header"
        class="h-8 p-0 m-0 underline font-semibold">
        <Ticket class="w-5 h-5 mr-2" /> <a :href=mainLink>Veranstaltung</a>
      </Button>
    </div>
  </li>



  <!--   <li class="mb-8 list-none"> -->
  <!--     <h3>{d.city}</h3> -->
  <!--     <h4>{d.venue}</h4> -->
  <!--     {d.comment != undefined && -->
  <!--     ))} -->
  <!--     {new Date(d.date).toLocaleDateString("de-DE", { -->
  <!--     month: "short", -->
  <!--     day: "2-digit", -->
  <!--     })} -->
  <!-- {new Date(d.date).toLocaleTimeString("de-DE", { -->
  <!-- hour: "2-digit", -->
  <!-- minute: "2-digit", -->
  <!-- })} -->
  <!--     {d.mainLink && ( -->
  <!--     <a class="block" href={d.mainLink}> -->
  <!--       Ticket -->
  <!--     </a> -->
  <!--     )} -->
  <!--   </li> --></template>
