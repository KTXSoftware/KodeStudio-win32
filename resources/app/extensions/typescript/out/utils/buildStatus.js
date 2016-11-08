/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require('vscode');
var statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, Number.MIN_VALUE);
function update(info) {
    if (info.queueLength === 0) {
        statusItem.hide();
        return;
    }
    statusItem.text = info.queueLength.toString();
    statusItem.show();
}
exports.update = update;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/90961d9c9e250262a6c80cc1f9b9928b265aa64e/extensions\typescript\out/utils\buildStatus.js.map