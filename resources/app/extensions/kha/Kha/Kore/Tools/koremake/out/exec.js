"use strict";
const os = require('os');
function sys() {
    if (os.platform() === 'linux') {
        if (os.arch() === 'arm')
            return '-linuxarm';
        else if (os.arch() === 'x64')
            return '-linux64';
        else
            return '-linux32';
    }
    else if (os.platform() === 'win32') {
        return '.exe';
    }
    else {
        return '-osx';
    }
}
exports.sys = sys;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/90961d9c9e250262a6c80cc1f9b9928b265aa64e/extensions\kha\Kha\Kore\Tools\koremake\out/exec.js.map
