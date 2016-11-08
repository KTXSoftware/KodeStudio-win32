"use strict";
const path = require('path');
const Html5Exporter_1 = require('./Html5Exporter');
class Html5WorkerExporter extends Html5Exporter_1.Html5Exporter {
    constructor(options) {
        super(options);
        this.sources.pop();
        this.addSourceDirectory(path.join(options.kha, 'Backends', 'HTML5-Worker'));
    }
    sysdir() {
        return 'html5-worker';
    }
}
exports.Html5WorkerExporter = Html5WorkerExporter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/90961d9c9e250262a6c80cc1f9b9928b265aa64e/extensions\kha\Kha\Tools\khamake\out/Exporters\Html5WorkerExporter.js.map
