import {
  flowRendererV2,
  flowStyles
} from "./chunk-IB43RLFO.js";
import {
  flowDb,
  parser$1
} from "./chunk-J4FPLFPN.js";
import "./chunk-QVI2XWSA.js";
import "./chunk-EK6IBEJX.js";
import "./chunk-U62WQVF7.js";
import "./chunk-TDNRBMFB.js";
import "./chunk-RA43PT3W.js";
import "./chunk-ASWT726M.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-UI2RQF44.js";
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
//# sourceMappingURL=flowDiagram-v2-476db779-54ZAGKFR.js.map
