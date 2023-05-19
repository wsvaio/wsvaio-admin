// import ECharts from "vue-echarts";
// import type { ComposeOption } from "echarts/core";
// import { use } from "echarts/core";
// import type { App } from "vue";

// // 手动引入 ECharts 各模块来减小打包体积
// import { CanvasRenderer } from "echarts/renderers";
// import type {
//   BarSeriesOption,
//   LineSeriesOption,
//   PieSeriesOption,
// } from "echarts/charts";
// import {
//   BarChart,
//   LineChart,
//   PieChart,
// } from "echarts/charts";
// import type {
//   DatasetComponentOption,
//   GridComponentOption,
//   LegendComponentOption,
//   TooltipComponentOption,
// } from "echarts/components";
// import {
//   DatasetComponent,
//   GridComponent,
//   LegendComponent,
//   TooltipComponent,
// } from "echarts/components";

// use([
//   DatasetComponent,
//   TooltipComponent,
//   GridComponent,
//   LegendComponent,
//   CanvasRenderer,

//   PieChart,
//   LineChart,
//   BarChart,
// ]);

// declare module "vue" {
//   export interface GlobalComponents {
//     VChart: typeof ECharts;
//   }
// }

// declare global {
//   type ECOption = ComposeOption<
//     | LineSeriesOption
//     | PieSeriesOption
//     | DatasetComponentOption
//     | TooltipComponentOption
//     | GridComponentOption
//     | LegendComponentOption
//     | BarSeriesOption
//   >;
// }

// export default (app: App) => {
//   // 全局注册组件（也可以使用局部注册）
//   app.component("VChart", ECharts);
// };
export {};
