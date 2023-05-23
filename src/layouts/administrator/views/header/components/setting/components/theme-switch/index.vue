<script setup lang="ts">
const setting = useSettingStore();
</script>

<template>
  <div class="theme-switch" @click="setting.darked = !setting.darked">
    <div class="sun">
      <i-fxemoji:sunrays class="align-middle" />
    </div>
    <div class="moon">
      <i-fxemoji:crescentmoon class="align-middle" />
    </div>
    <div class="mask" :class="[setting.darked ? 'dark' : 'light']"></div>
  </div>
</template>

<style lang="less" scoped>
.theme-switch {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  width: 52px;
  height: 28px;
  border: 1px solid var(--border-color);
  border-radius: 9999px;
  background-color: #151515;
  line-height: 1;
  cursor: pointer;

  .mask {
    position: absolute;
    top: 50%;
    left: 25%;
    width: 18px;
    height: 18px;
    transform: translate(-50%, -50%);
    transition: left 0.3s;
    border-radius: 9999px;
    background-color: white;

    &.light {
      left: 25%;
    }

    &.dark {
      left: 75%;
    }
  }
}
</style>
