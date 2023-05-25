<script setup lang="ts">
import { useRequest } from "vue-request";
import { iconesUrl } from "@/utils/icones";
import IError from "~icons/fluent/cloud-error-24-regular?raw";

const { name } = defineProps<{
  name: string;
}>();

const { data } = useRequest(
  async () => await fetch(iconesUrl(name)).then(response => response.text()),
);
</script>

<template>
  <n-icon v-html="data?.includes('svg') ? data : IError"></n-icon>
</template>

<style lang="less"></style>
