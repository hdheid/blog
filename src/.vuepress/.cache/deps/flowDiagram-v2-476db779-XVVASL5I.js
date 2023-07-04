import {
  flowRendererV2,
  flowStyles
} from "./chunk-NNFG7E7K.js";
import {
  flowDb,
  parser$1
} from "./chunk-ZW6SQ2FH.js";
import "./chunk-XF6T7I2V.js";
import "./chunk-3UUN4EUV.js";
import "./chunk-RH54MSYU.js";
import "./chunk-OU4SG23S.js";
import "./chunk-JG6PYOOG.js";
import "./chunk-CUEZNAXZ.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-ZDUQQWEU.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-476db779.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-476db779-XVVASL5I.js.map
