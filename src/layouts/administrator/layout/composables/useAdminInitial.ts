import useAdminStore from "../stores/useAdminStore";
import { hexToRgb } from "../utils";

const html = document.documentElement;
export default () => {
  const admin = useAdminStore();
  // 设置css变量
  watchEffect(() => {
    for (const [k, v] of Object.entries(admin.cssVars))
      html.style.setProperty(k, String(v || ""));
  });
  // 设置主题
  watchEffect(() => {
    html.classList.remove("light", "dark");
    html.classList.add(admin.theme);
    html.setAttribute("theme", admin.theme);
  });
  // 设置布局
  watchEffect(() => {
    html.setAttribute("layout", admin.layout);
  });
  // 设置size
  watchEffect(() => {
    html.classList.remove("xxl", "xl", "lg", "md", "sm", "xs", "xxs");
    for (const item of ["xxl", "xl", "lg", "md", "sm", "xs", "xxs"]) {
      html.classList.add(item);
      if (item === admin.size) break;
    }
    html.setAttribute("size", admin.size);
  });

  window.addEventListener("resize", () =>
    admin.size
        = html.clientWidth >= 1400
        ? "xxl"
        : html.clientWidth >= 1200
          ? "xl"
          : html.clientWidth >= 992
            ? "lg"
            : html.clientWidth >= 768
              ? "md"
              : html.clientWidth >= 576
                ? "sm"
                : html.clientWidth >= 375
                  ? "xs"
                  : "xxs",
  );
  window.dispatchEvent(new Event("resize"));

  // 设置文字主题
  const setTextTheme = (attr: string, key: string, defaultTheme = "light") => {
    const rgb = hexToRgb(admin.cssVars[key]);
    html.setAttribute(attr, rgb ? (rgb.r + rgb.g + rgb.b > 384 ? "light" : "dark") : defaultTheme);
  };
  watchEffect(() => setTextTheme("aside-theme", "--aside-bg-color", "dark"));
  watchEffect(() => setTextTheme("header-theme", "--header-bg-color", ""));
  watchEffect(() => setTextTheme("tab-theme", "--tab-bg-color", ""));
  watchEffect(() => setTextTheme("footer-theme", "--footer-bg-color", ""));

  // 设置固定
  watchEffect(() => admin.fixed.aside ? html.setAttribute("aside-fixed", "") : html.removeAttribute("aside-fixed"));
  watchEffect(() => admin.fixed.header ? html.setAttribute("header-fixed", "") : html.removeAttribute("header-fixed"));
  watchEffect(() => admin.fixed.tab ? html.setAttribute("tab-fixed", "") : html.removeAttribute("tab-fixed"));
  watchEffect(() => admin.fixed.main ? html.setAttribute("main-fixed", "") : html.removeAttribute("main-fixed"));
  watchEffect(() => admin.fixed.footer ? html.setAttribute("footer-fixed", "") : html.removeAttribute("footer-fixed"));
  watchEffect(() => admin.mix.fixed ? html.setAttribute("mix-fixed", "") : html.removeAttribute("mix-fixed"));
  // 设置折叠
  watchEffect(() => admin.isCollapse ? html.setAttribute("collapse", "") : html.removeAttribute("collapse"));
  watchEffect(() => admin.mix.collapse ? html.setAttribute("mix-collapse", "") : html.removeAttribute("mix-collapse"));

  // size 到 md 以下时 设置布局为mobile
  watch(
    () => admin.size,
    () => {
      if (admin.isSize(">=")("md")) {
        if (admin.layoutHas("mini"))
          admin.layout = "left";
        admin.isCollapse = false;
      }
      else if (!admin.layoutHas("mini")) {
        admin.layout = "mini";
        admin.isCollapse = true;
      }
    },
    { immediate: true },
  );

  // tab全屏
  watchEffect(() => admin.isTabFull ? html.setAttribute("full", "") : html.removeAttribute("full"));
};
