import { defineClientConfig } from "@vuepress/client";
import ChartJS from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/my_blog/my_blog/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "E:/my_blog/my_blog/node_modules/reveal.js/dist/reveal.css";
import Presentation from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "E:/my_blog/my_blog/node_modules/katex/dist/katex.min.css";
import "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("E:/my_blog/my_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
