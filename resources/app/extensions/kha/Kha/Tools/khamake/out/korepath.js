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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ff8f66382ad001a1938d7dbceada9ec9a6ab9411/extensions\kha\Kha\Tools\khamake\out/korepath.js.map
