<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "./ui/button/Button.vue";

export interface LinkProps extends ButtonProps {
  href?: string;
}

const { href, asChild: _, ...props } = defineProps<LinkProps>()
console.log("link", props)

const buttonProps = props as ButtonProps

</script>

<template>
  <Button v-bind="buttonProps" as-child>
    <a :href=href><slot /></a>
  </Button>
</template>
