"use strict";
const path = require('path');
const Html5Exporter_1 = require('./Html5Exporter');
class NodeExporter extends Html5Exporter_1.Html5Exporter {
    constructor(options) {
        super(options);
        this.removeSourceDirectory(path.join(options.kha, 'Backends', 'HTML5'));
        this.addSourceDirectory(path.join(options.kha, 'Backends', 'Node'));
    }
    sysdir() {
        return 'node';
    }
}
exports.NodeExporter = NodeExporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ff8f66382ad001a1938d7dbceada9ec9a6ab9411/extensions\kha\Kha\Tools\khamake\out/Exporters\NodeExporter.js.map
