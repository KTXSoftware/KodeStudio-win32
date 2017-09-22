"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Html5Exporter_1 = require("./Html5Exporter");
class NodeExporter extends Html5Exporter_1.Html5Exporter {
    constructor(options) {
        super(options);
    }
    backend() {
        return 'Node';
    }
}
exports.NodeExporter = NodeExporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3176c3de349aff5ca5407ebef0ae77aed5806604/extensions\kha\Kha\Tools\khamake\out/Exporters\NodeExporter.js.map
