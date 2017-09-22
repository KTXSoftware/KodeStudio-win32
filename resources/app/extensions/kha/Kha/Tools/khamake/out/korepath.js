"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
let korepath = path.join(__dirname, '..', '..', '..', 'Kore', 'Tools', 'koremake');
function init(options) {
    korepath = path.join(options.kha, 'Kore', 'Tools', 'koremake');
}
exports.init = init;
function get() {
    return korepath;
}
exports.get = get;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/3176c3de349aff5ca5407ebef0ae77aed5806604/extensions\kha\Kha\Tools\khamake\out/korepath.js.map
