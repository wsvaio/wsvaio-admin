<script setup lang="ts">
import { useRequest } from "vue-request";
import { antDesignIconNameToUrl } from "@/utils/ant-design-icons";
import IError from "~icons/fluent/cloud-error-24-regular?raw";

const { name } = defineProps<{
  name: string;
}>();

const { data } = useRequest(
  async () => await fetch(antDesignIconNameToUrl(name)).then(response => response.text()),
);
</script>

<template>
  <n-icon v-html="data?.includes('svg') ? data : IError"></n-icon>
</template>

<style lang="less"></style>
