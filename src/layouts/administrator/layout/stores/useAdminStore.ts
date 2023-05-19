import { defineStore } from "pinia";

export type Layout = "left" | "top" | "mini" | "left-mix" | "top-mix";
export type Size = "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
export type Theme = "light" | "dark";
export default defineStore("administrator", {
  state: () => ({
    theme: "light" as Theme,
    size: "xxl" as Size,
    layout: "left" as Layout,

    isCollapse: false,
    isSplitMenu: false,
    isAccordion: false,
    fixed: {
      aside: false,
      header: false,
      tab: false,
      main: true,
      footer: false,
    },

    isBreadCrumbIcon: false,
    isBreadCrumb: true,
    isTab: true,
    isTabBorder: true,
    isTabRefresh: true,
    isTabDropdown: true,
    isTabFullscreen: true,
    isLogo: true,
    isTopCollapse: true,
    isBottomCollapse: true,
    isFooter: false,

    isTabFull: false,

    switchAnimation: "fade-right",
    isSwitchAnimation: true,

    mix: {
      active: "",
      fixed: false,
      collapse: false,
    },

    cssVars: {
      "--header-height": "48px",
      "--menu-max-width": "300px",
      "--menu-width": "210px",
      "--menu-top-justify-content": "flex-start",
      "--global-brightness": "100%",
      "--global-contrast": "100%",
      "--global-saturation": "100%",
      "--global-invert": "0%",
      "--global-opacity": "100%",
      "--global-blur": "0px",
      "--global-grayscale": "0%",
      "--global-hue-rotate": "0deg",
      "--global-sepia": "0%",
      "--switch-duration": "300ms",
      "--aside-bg-color": "",
      "--header-bg-color": "",
      "--tab-bg-color": "",
      "--footer-bg-color": "",
      "--main-bg-color": "",
      "--primary-color": "",
      "--switch-power": 10,
    },

  }),
  actions: {
    layoutHas(...names: Layout[]) {
      return names.some(item => item == this.layout);
    },

    isSize(what: ">" | "<" | "==" | ">=" | "<=") {
      return (size: Size) => {
        const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
        if (what == ">") return sizes.indexOf(this.size) > sizes.indexOf(size);
        if (what == ">=") return sizes.indexOf(this.size) >= sizes.indexOf(size);
        if (what == "<") return sizes.indexOf(this.size) < sizes.indexOf(size);
        if (what == "<=") return sizes.indexOf(this.size) <= sizes.indexOf(size);
        if (what == "==") return sizes.indexOf(this.size) == sizes.indexOf(size);
        return false;
      };
    },

  },
  getters: {

  },
  persist: true,
});
