"use strict";
let myInfo = function (text) {
    console.log(text);
};
let myError = function (text) {
    console.log(text);
};
function set(log) {
    myInfo = log.info;
    myError = log.error;
}
exports.set = set;
function silent() {
    myInfo = function () { };
    myError = function () { };
}
exports.silent = silent;
function info(text) {
    myInfo(text);
}
exports.info = info;
function error(text) {
    myError(text);
}
exports.error = error;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/90961d9c9e250262a6c80cc1f9b9928b265aa64e/extensions\kha\Kha\Tools\khamake\out/log.js.map
