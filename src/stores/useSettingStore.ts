import { defineStore } from "pinia";

export default defineStore("setting", {
  state: () => ({
    layout: "left" as "left" | "top" | "top-mix" | "left-mix" | "mini",
    collapsed: false,
    darked: false,
    headerHeight: 64,
    tabHeight: 44,
    footerHeight: 48,
  }),
  actions: {

  },
  getters: {

  },

});
