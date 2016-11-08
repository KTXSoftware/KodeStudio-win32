"use strict";
const path = require('path');
let korepath = path.join(__dirname, '..', '..', '..', 'Kore', 'Tools', 'koremake');
function init(options) {
    korepath = path.join(options.kha, 'Kore', 'Tools', 'koremake');
}
exports.init = init;
function get() {
    return korepath;
}
exports.get = get;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/90961d9c9e250262a6c80cc1f9b9928b265aa64e/extensions\kha\Kha\Tools\khamake\out/korepath.js.map
