/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/workbench.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Use Regular Expression",
		"Match Whole Word",
		"Match Case",
		"input"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/browser/ui/messagelist/messageList": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}",
		"Error",
		"Warn",
		"Info",
		"Close"
	],
	"vs/base/browser/ui/resourceviewer/resourceViewer": [
		"Sorry but playback of audio files is not supported.",
		"Sorry but playback of video files is not supported.",
		"The file cannot be displayed in the editor because it is either binary, very large or uses an unsupported text encoding."
	],
	"vs/base/browser/ui/toolbar/toolbar": [
		"More"
	],
	"vs/base/common/errors": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occured ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details.",
		"Not Implemented",
		"Illegal argument: {0}",
		"Illegal argument",
		"Illegal state: {0}",
		"Illegal state",
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/base/common/json": [
		"Invalid symbol",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Value expected",
		"Comma expected",
		"Value expected",
		"Closing brace expected",
		"Value expected",
		"Comma expected",
		"Value expected",
		"Closing bracket expected",
		"Value expected",
		"End of content expected"
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows"
	],
	"vs/base/common/processes": [
		"Error: executable info must define a command of type string.",
		"Warning: isShellCommand must be of type boolean. Ignoring value {0}.",
		"Warning: args must be of type string[]. Ignoring value {0}.",
		"Warning: options.cwd must be of type string. Ignoring value {0}."
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/node/processes": [
		"Can't execute a shell command on an UNC drive."
	],
	"vs/base/node/zip": [
		"{0} not found inside zip."
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/editor/common/commonCodeEditor": [
		"Press {0} if you are using a screen reader."
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor configuration",
		"Controls the font family.",
		"Controls the font size.",
		"Controls the line height.",
		"Controls visibility of line numbers",
		"Controls visibility of the glyph margin",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Controls if quick suggestions should show up or not while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions.",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Controls the cursor blinking animation, accepted values are 'blink', 'visible', and 'hidden'",
		"Controls the cursor style, accepted values are 'block' and 'line'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls whether the editor should render whitespace characters",
		"Controls if the editor shows reference information for the modes that support it",
		"Controls whether the editor has code folding enabled",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}"
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"Invalid `contributes.{0}`. Expected an array."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"Please update your settings: `editor.detectIndentation` replaces `editor.tabSize`: \"auto\" or `editor.insertSpaces`: \"auto\""
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Show Accessibility Help",
		"Thank you for trying out VS Code's experimental accessibility options.",
		"Status:",
		"Pressing Tab in this editor will move focus to the next focusable element. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in this editor will insert the tab character. Toggle this behaviour by pressing {0}.",
		"Pressing Tab in this editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Experimental screen reader support is turned on due to editor.experimentalScreenReader settings key.",
		"Experimental screen reader support is turned on for this session. Toggle this behaviour by pressing {0}.",
		"Experimental screen reader support is turned on for this session. The command {0} is currently not triggerable by a keybinding.",
		"Experimental screen reader support is turned off. Turn it on for this session by pressing {0} or turn it on for all sessions by configuring the editor.experimentalScreenReader setting to true.",
		"Experimental screen reader support is turned off. The command {0} is currently not triggerable by a keybinding. Turn it on for all sessions by configuring the editor.experimentalScreenReader setting to true.",
		"You can dismiss this tooltip and return to the editor by pressing Escape."
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Define Keybinding",
		"Press desired key combination and ENTER",
		"Define Keybinding",
		"For your current keyboard layout press ",
		"You won't be able to produce this key combination under your current keyboard layout."
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Select All Occurences of Find Match",
		"Change All Occurrences",
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Move Last Selection To Next Find Match",
		"Add Selection To Next Find Match"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Fold",
		"Fold All",
		"Unfold All",
		"Fold Level 1",
		"Fold Level 2",
		"Fold Level 3",
		"Fold Level 4",
		"Fold Level 5"
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Format Code"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} definitions",
		"Click to show the {0} definitions found.",
		"Peek Definition",
		"Go to Definition",
		"Open Definition to the Side",
		"Go to Type Definition"
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Suggested fixes: ",
		"Suggested fix: ",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning"
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Indent Using Spaces",
		"Indent Using Tabs",
		"Detect Indentation from Content",
		"Toggle Render Whitespace"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Delete Line",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Move Line Down",
		"Move Line Up",
		"Copy Line Down",
		"Copy Line Up",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Invalid URI: cannot open {0}",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Create multiple cursors from selected lines"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Quick Fix"
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}, quick fix suggestion",
		"Loading...",
		"No fix suggestions.",
		"Quick Fix",
		"{0}, accepted"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		"Loading...",
		"No results",
		"Find All References",
		" – {0} references",
		"Show References"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearchWidget": [
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"References"
	],
	"vs/editor/contrib/rename/browser/rename2": [
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/rename/common/rename": [
		"No result."
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Go to Bracket"
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggest": [
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Go back",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Use of Tab Key for Setting Focus"
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"View: Toggle Word Wrap"
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/editor/node/languageConfiguration": [
		"Errors parsing {0}: {1}"
	],
	"vs/editor/node/textMate/TMSnippets": [
		"Contributes TextMate snippets.",
		"Language id for which this snippet is contributed to.",
		"Path of the snippets file. The path is relative to the extension folder and typically starts with './snippets/'.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/editor/node/textMate/TMSyntax": [
		"Contributes textmate tokenizers.",
		"Language id for which this syntax is contributed to.",
		"Textmate scope name used by the tmLanguage file.",
		"Path of the tmLanguage file. The path is relative to the extension folder and typically starts with './syntaxes/'.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.scopeName`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/languages/css/common/css.contribution": [
		"CSS configuration",
		"Controls CSS validation and problem severities."
	],
	"vs/languages/css/common/services/lintRules": [
		"When using a vendor-specific prefix make sure to also include all other vendor-specific properties",
		"When using a vendor-specific prefix also include the standard property",
		"Do not use duplicate style definitions",
		"Do not use empty rulesets",
		"Import statements do not load in parallel",
		"Do not use width or height when using padding or border",
		"The universal selector (*) is known to be slow",
		"No unit for zero needed",
		"@font-face rule must define 'src' and 'font-family' properties",
		"Hex colors must consist of three or six hex numbers",
		"Invalid number of parameters",
		"Unknown property.",
		"IE hacks are only necessary when supporting IE7 and older",
		"Unknown vendor specific property.",
		"Property is ignored due to the display. E.g. with 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect",
		"Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored.",
		"Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes.",
		"Selectors should not contain IDs because these rules are too tightly coupled with the HTML.",
		"Enables or disables all validations"
	],
	"vs/languages/html/common/html.contribution": [
		"HTML configuration",
		"Maximum amount of characters per line (0 = disable).",
		"List of tags, comma separated, that shouldn't be reformatted. 'null' defaults to all inline tags.",
		"Indent <head> and <body> sections.",
		"Whether existing line breaks before elements should be preserved. Only works before elements, not inside tags or for text.",
		"Maximum number of line breaks to be preserved in one chunk. Use 'null' for unlimited.",
		"Format and indent {{#foo}} and {{/foo}}.",
		"End with a newline.",
		"List of tags, comma separated, that should have an extra newline before them. 'null' defaults to \"head, body, /html\"."
	],
	"vs/languages/less/common/less.contribution": [
		"LESS configuration",
		"Controls LESS validation and problem severities."
	],
	"vs/languages/markdown/common/markdown.contribution": [
		"Markdown preview configuration",
		"A list of URLs or local paths to CSS style sheets to use from the markdown preview."
	],
	"vs/languages/sass/common/sass.contribution": [
		"Sass configuration",
		"Controls Sass validation and problem severities."
	],
	"vs/platform/actions/common/actionsService": [
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to execute",
		"Title by which the command is represented in the UI.",
		"(Optional) category string by the command is grouped in the UI",
		"Contributes commands to the command palette.",
		"{0}: {1}",
		"Invalid `contributes.{0}`: {1}"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"The publisher of the VS Code extension.",
		"Activation events for the VS Code extension.",
		"Dependencies to other extensions. The id of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"All contributions of the VS Code extension represented by this package."
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Could not parse `engines.vscode` value {0}. Please use, for example: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"Extension is not compatible with Code {0}. Extension requires: {1}.",
		"Extension version is not semver compatible."
	],
	"vs/platform/jsonschemas/common/jsonContributionRegistry": [
		"Describes a JSON file using a schema. See json-schema.org for more info.",
		"A unique identifier for the schema.",
		"The schema to verify this document against ",
		"A descriptive title of the element",
		"A long description of the element. Used in hover menus and suggestions.",
		"A default value. Used by suggestions.",
		"A number that should cleanly divide the current value (i.e. have no remainder)",
		"The maximum numerical value, inclusive by default.",
		"Makes the maximum property exclusive.",
		"The minimum numerical value, inclusive by default.",
		"Makes the minimum property exclusive.",
		"The maximum length of a string.",
		"The minimum length of a string.",
		"A regular expression to match the string against. It is not implicitly anchored.",
		"For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.",
		"For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.",
		"The maximum number of items that can be inside an array. Inclusive.",
		"The minimum number of items that can be inside an array. Inclusive.",
		"If all of the items in the array must be unique. Defaults to false.",
		"The maximum number of properties an object can have. Inclusive.",
		"The minimum number of properties an object can have. Inclusive.",
		"An array of strings that lists the names of all properties required on this object.",
		"Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.",
		"Not used for validation. Place subschemas here that you wish to reference inline with $ref",
		"A map of property names to schemas for each property.",
		"A map of regular expressions on property names to schemas for matching properties.",
		"A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.",
		"The set of literal values that are valid",
		"Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.",
		"Describes the format expected for the value.",
		"An array of schemas, all of which must match.",
		"An array of schemas, where at least one must match.",
		"An array of schemas, exactly one of which must match.",
		"A schema which must not match."
	],
	"vs/platform/jsonschemas/common/jsonValidationExtensionPoint": [
		"Contributes json schema configuration.",
		"The file pattern to match, for example \"package.json\" or \"*.launch\".",
		"A schema URL ('http:', 'https:') or relative path to the extension folder ('./').",
		"'configuration.jsonValidation' must be a array",
		"'configuration.jsonValidation.fileMatch' must be defined",
		"'configuration.jsonValidation.url' must be a URL or relative path",
		"'configuration.jsonValidation.url' is an invalid relative URL: {0}",
		"'configuration.jsonValidation.url' must start with 'http:', 'https:' or './' to reference schemas located in the extension"
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Here are other available commands: ",
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/markers/common/problemMatcher": [
		"Error: Invalid problemMatcher description. A matcher must at least define a pattern, owner and a file location. The problematic matcher is:\n{0}\n",
		"Info: unknown severity {0}. Valid values are error, warning and info.\n",
		"The loop property is only supported on the last line matcher.",
		"The loop property is only supported on multi line matchers.",
		"The problem pattern is missing a regular expression.",
		"The problem pattern is invalid. It must have at least a file, message and line or location match group.",
		"A problem matcher must define both a begin pattern and an end pattern for watching.",
		"Error: The string {0} is not a valid regular expression.\n"
	],
	"vs/platform/message/common/message": [
		"Close",
		"Cancel"
	],
	"vs/platform/telemetry/electron-browser/electronTelemetryService": [
		"Telemetry configuration",
		"Enable usage data and errors to be sent to Microsoft."
	],
	"vs/platform/theme/common/themes": [
		"Light (Visual Studio)",
		"Dark (Visual Studio)",
		"High Contrast"
	],
	"vs/workbench/api/node/extHostMessageService": [
		"Close"
	],
	"vs/workbench/browser/actions/configureLocale": [
		"Configure Language",
		"Defines VSCode's display language.",
		"See {0} for a list of supported languages.",
		"Changing the value requires to restart VSCode.",
		"Unable to create '{0}' ({1})."
	],
	"vs/workbench/browser/actions/openSettings": [
		"Unable to create '{0}' ({1}).",
		"Open User Settings",
		"The currently opened folder contains workspace settings that may override user settings",
		"Don't show again",
		"Open Workspace Settings",
		"Place your settings in this file to overwrite the default settings",
		"Open Keyboard Shortcuts",
		"Place your key bindings in this file to overwrite the defaults",
		"Open Workspace Settings",
		"Open a folder first to create workspace settings",
		"Place your settings in this file to overwrite default and user settings.",
		"Overwrite settings by placing them into your settings file.",
		"Default Settings",
		"Overwrite key bindings by placing them into your key bindings file.",
		"Default Keyboard Shortcuts",
		"Preferences"
	],
	"vs/workbench/browser/actions/toggleSidebarPosition": [
		"Toggle Side Bar Position",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarVisibility": [
		"Toggle Side Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/triggerEditorActions": [
		"Split Editor",
		"Cycle Between Opened Editors",
		"Focus into Left Hand Editor",
		"Focus into Side Editor",
		"Focus into Right Hand Editor",
		"Focus into Next Editor on the Left",
		"Focus into Next Editor on the Right",
		"Open to the Side",
		"Close All Editors",
		"Close Other Editors",
		"Move Active Editor Left",
		"Move Active Editor Right",
		"Minimize Other Editors",
		"Even Editor Widths",
		"Maximize Active Editor and Hide Sidebar",
		"View"
	],
	"vs/workbench/browser/actions/triggerNavigation": [
		"Go Forward",
		"Go Back"
	],
	"vs/workbench/browser/actions/triggerQuickOpen": [
		"Go to File...",
		"Navigate History",
		"Navigate Next in Quick Open",
		"Navigate Previous in Quick Open"
	],
	"vs/workbench/browser/parts/activitybar/activityAction": [
		"{0} ({1})"
	],
	"vs/workbench/browser/parts/activitybar/activitybarPart": [
		"Active View Switcher"
	],
	"vs/workbench/browser/parts/compositePart": [
		"{0} ({1})",
		"{0} actions"
	],
	"vs/workbench/browser/parts/editor/binaryDiffEditor": [
		"Binary Diff Viewer",
		"Comparing binary files to non binary files is currently not supported"
	],
	"vs/workbench/browser/parts/editor/binaryEditor": [
		"Binary Viewer"
	],
	"vs/workbench/browser/parts/editor/editor.contribution": [
		"Text Editor",
		"Text Diff Editor",
		"Binary Diff Editor",
		"IFrame Editor",
		"View Source",
		"Reload"
	],
	"vs/workbench/browser/parts/editor/editorPart": [
		"Unable to open '{0}': {1}."
	],
	"vs/workbench/browser/parts/editor/editorStatus": [
		"Ln {0}, Col {1} ({2} selected)",
		"Ln {0}, Col {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"LF",
		"CRLF",
		"Tab moves focus",
		"Disable Accessibility Mode",
		"Go to Line",
		"Indentation",
		"Select Encoding",
		"Select End of Line Sequence",
		"Select Language Mode",
		"Spaces: {0}",
		"Tab Size: {0}",
		"Change Language Mode",
		"No text editor active at this time",
		"Configured Language",
		"languages",
		"Configure File Associations...",
		"Configure File Association for '{0}'...",
		"Auto Detect",
		"Select Language Mode",
		"You can configure filename to language associations in the **files.associations** section. The changes may need a restart to take effect on already opened files.",
		"Change Indentation",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"change view",
		"convert file",
		"Select Action",
		"Change End of Line Sequence",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"Select End of Line Sequence",
		"Change File Encoding",
		"No text editor active at this time",
		"No file active at this time",
		"Save with Encoding",
		"Reopen with Encoding",
		"Select Action",
		"Select File Encoding to Reopen File",
		"Select File Encoding to Save with"
	],
	"vs/workbench/browser/parts/editor/iframeEditor": [
		"IFrame Viewer"
	],
	"vs/workbench/browser/parts/editor/sideBySideEditorControl": [
		"Close",
		"Split Editor",
		"{0} {1}",
		"Editor actions",
		"Loading..."
	],
	"vs/workbench/browser/parts/editor/stringEditor": [
		"Text Editor",
		"{0}. Readonly text editor.",
		"Readonly text editor.",
		"{0}. Untitled file text editor.",
		"Untitled file text editor."
	],
	"vs/workbench/browser/parts/editor/textDiffEditor": [
		"Text Diff Editor",
		"{0}. Readonly text compare editor.",
		"Readonly text compare editor.",
		"{0}. Text file compare editor.",
		"Text file compare editor.",
		"Switch to Inline View",
		"Switch to Side by Side View",
		"Next Change",
		"Previous Change"
	],
	"vs/workbench/browser/parts/panel/panelPart": [
		"Close",
		"Toggle Panel Visibility",
		"View"
	],
	"vs/workbench/browser/parts/quickopen/editorHistoryModel": [
		"{0}, recently opened"
	],
	"vs/workbench/browser/parts/quickopen/quickOpenController": [
		"{0} (Press 'Enter' to confirm or 'Escape' to cancel)",
		"Press 'Enter' to confirm your input or 'Escape' to cancel",
		"There are no entries to pick from",
		"Type '?' to get help on the actions you can take from here",
		"recently opened",
		"recently opened",
		"No results found",
		"This quick open handler can not be used in the current context"
	],
	"vs/workbench/browser/parts/sidebar/sidebarPart": [
		"Focus into Side Bar",
		"View"
	],
	"vs/workbench/browser/parts/statusbar/statusbarPart": [
		"Command '{0}' can not be run from here."
	],
	"vs/workbench/browser/quickopen": [
		"No results matching",
		"No results found",
		"{0}, command",
		"No commands matching"
	],
	"vs/workbench/browser/viewlet": [
		"Collapse",
		"{0} actions",
		"{0} actions"
	],
	"vs/workbench/common/editor/diffEditorInput": [
		"{0} ↔ {1}"
	],
	"vs/workbench/electron-browser/actions": [
		"Close Editor",
		"Close Window",
		"Close Folder",
		"There is currently no folder opened in this instance to close.",
		"New Window",
		"Toggle Full Screen",
		"Toggle Menu Bar",
		"Toggle Developer Tools",
		"Zoom in",
		"Zoom out",
		"Reset Zoom",
		"Startup Performance",
		"Reload Window",
		"Open Recent",
		"Select a path to open",
		"Close Notification Messages"
	],
	"vs/workbench/electron-browser/crashReporter": [
		"Telemetry configuration",
		"Enable crash reports to be sent to Microsoft.\n\t// This option requires restart to take effect."
	],
	"vs/workbench/electron-browser/darwin/cli.contribution": [
		"Install 'code' command in PATH",
		"Please remove the alias referencing '{0}' in '{1}' (line {2}) and retry this action.",
		"Edit '{0}'",
		"Please remove the '{0}' alias from '{1}' before continuing.",
		"Cancel",
		"Continue",
		"Shell command '{0}' successfully installed in PATH.",
		"Code will now prompt with 'osascript' for Administrator privileges to install the shell command.",
		"Cancel",
		"Aborted",
		"OK",
		"Unable to create '/usr/local/bin'.",
		"Uninstall 'code' command from PATH",
		"Shell command '{0}' successfully uninstalled from PATH.",
		"Code needs to change the '{0}' shell command. Would you like to do this now?",
		"Change Now",
		"Later",
		"Remember you can always run the '{0}' action from the Command Palette.",
		"Shell Command"
	],
	"vs/workbench/electron-browser/integration": [
		"Undo",
		"Redo",
		"Cut",
		"Copy",
		"Paste",
		"Select All"
	],
	"vs/workbench/electron-browser/main.contribution": [
		"View",
		"Developer",
		"File",
		"Window configuration",
		"When enabled, will open files in a new window instead of reusing an existing instance.",
		"Controls how folders are being reopened after a restart. Select 'none' to never reopen a folder, 'one' to reopen the last folder you worked on or 'all' to reopen all folders of your last session.",
		"Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.",
		"Update configuration",
		"Configure the update channel to receive updates from. Requires a restart after change."
	],
	"vs/workbench/electron-browser/shell": [
		"The shared process terminated unexpectedly. Please reload the window to recover."
	],
	"vs/workbench/electron-browser/update": [
		"Update Now",
		"Later",
		"Release Notes",
		"{0} will be updated after it restarts.",
		"There are no updates currently available.",
		"This version of {0} is outdated and can't be updated automatically. Please download and install the latest version manually.",
		"Download Latest",
		"Release Notes"
	],
	"vs/workbench/parts/debug/browser/breakpointWidget": [
		"Breakpoint on line {0} will only stop if this condition is true. 'Enter' to accept, 'esc' to cancel.",
		"Type the breakpoint condition for line {0}. The program will only stop here if this condition is true. Press Enter to accept or Escape to cancel."
	],
	"vs/workbench/parts/debug/browser/debugEditorContribution": [
		"Add Breakpoint"
	],
	"vs/workbench/parts/debug/browser/debugEditorModelManager": [
		"Breakpoint",
		"Disabled Breakpoint",
		"Unverified Breakpoint",
		"Unverified breakpoint. File is modified, please restart debug session.",
		"Conditional breakpoints not supported by this debug type"
	],
	"vs/workbench/parts/debug/browser/debugHover": [
		"Debug Hover"
	],
	"vs/workbench/parts/debug/browser/debugViewer": [
		"Thread {0}, callstack, debug",
		"Stack Frame {0} line {1} {2}, callstack, debug",
		"Scope {0}, variables, debug",
		"{0} value {1}, variables, debug",
		"Expression to watch",
		"Type watch expression",
		"{0} value {1}, watch, debug",
		"{0} value {1}, watch, debug",
		"Function to break on",
		"Type function breakpoint",
		"Breakpoint line {0} {1}, breakpoints, debug",
		"Function breakpoint {0}, breakpoints, debug",
		"Exception breakpoint {0}, breakpoints, debug"
	],
	"vs/workbench/parts/debug/common/debugModel": [
		"Please start a debug session to evaluate",
		"Unknown stack location",
		"Only primitive values are shown for this object."
	],
	"vs/workbench/parts/debug/electron-browser/debug.contribution": [
		"Show Debug",
		"Debug: Toggle Breakpoint",
		"Debug: Show Hover",
		"Debug: Conditional Breakpoint",
		"Debug: Evaluate",
		"Debug: Add to Watch",
		"Debug: Run to Cursor",
		"Debug",
		"Debug Console",
		"View",
		"Debug"
	],
	"vs/workbench/parts/debug/electron-browser/debugActions": [
		"{0} ({1})",
		"Open {0}",
		"Select Configuration",
		"Start",
		"Restart",
		"Reconnect",
		"Step Over",
		"Step Into",
		"Step Out",
		"Stop",
		"Disconnect",
		"Continue",
		"Pause",
		"Remove Breakpoint",
		"Remove All Breakpoints",
		"Enable/Disable Breakpoint",
		"Enable All Breakpoints",
		"Disable All Breakpoints",
		"Activate Breakpoints",
		"Deactivate Breakpoints",
		"Reapply All Breakpoints",
		"Add Function Breakpoint",
		"Rename Function Breakpoint",
		"Add Conditional Breakpoint",
		"Edit Breakpoint",
		"Copy Value",
		"Add Expression",
		"Add to Watch",
		"Rename Expression",
		"Remove Expression",
		"Remove All Expressions",
		"Clear Console",
		"Debug Console",
		"Run"
	],
	"vs/workbench/parts/debug/electron-browser/debugService": [
		"Debugging started.",
		"Debugging paused, reason {0}, {1} {2}",
		"Debugging continued.",
		"Debugging stopped.",
		"Did not get a thread from debug adapter with id {0}.",
		"Please set up the launch configuration file for your application.",
		"Configured debug type '{0}' is not supported.",
		"Missing property 'type' for the selected configuration in launch.json.",
		"Errors detected while running the preLaunchTask '{0}'.",
		"Error detected while running the preLaunchTask '{0}'.",
		"The preLaunchTask '{0}' terminated with exit code {1}.",
		"Continue",
		"Debug adapter process has terminated unexpectedly",
		"Could not find the preLaunchTask '{0}'.",
		"There is a task {0} running. Can not run pre launch task {1}.",
		"Source {0} is not available."
	],
	"vs/workbench/parts/debug/node/debugAdapter": [
		"Type of configuration.",
		"Name of configuration; appears in the launch configuration drop down menu.",
		"Request type of configuration. Can be \"launch\" or \"attach\".",
		"Task to run before debug session starts.",
		"Relative paths will no longer be automatically converted to absolute ones. Consider using ${workspaceRoot} as a prefix."
	],
	"vs/workbench/parts/debug/node/debugConfigurationManager": [
		"Contributes debug adapters.",
		"Unique identifier for this debug adapter.",
		"Display name for this debug adapter.",
		"Allow breakpoints for these languages.",
		"List of languages.",
		"Path to the debug adapter program. Path is either absolute or relative to the extension folder.",
		"Optional arguments to pass to the adapter.",
		"Optional runtime in case the program attribute is not an executable but requires a runtime.",
		"Optional runtime arguments.",
		"Configurations for generating the initial 'launch.json'.",
		"JSON schema configurations for validating 'launch.json'.",
		"Windows specific settings.",
		"Runtime used for Windows.",
		"OS X specific settings.",
		"Runtime used for OSX.",
		"Linux specific settings.",
		"Runtime used for Linux.",
		"Launch configuration",
		"Version of this file format.",
		"List of configurations. Add new configurations or edit existing ones.",
		"Debug adapter 'type' can not be omitted and must be of type 'string'.",
		"Debug type '{0}' is already registered and has attribute '{1}', ignoring attribute '{1}'.",
		"Unable to create 'launch.json' file inside the '.vscode' folder ({0}).",
		"Select Environment"
	],
	"vs/workbench/parts/debug/node/rawDebugSession": [
		"More Info",
		"No extension installed for '{0}' debugging.",
		"Unable to launch debug adapter from {0}.",
		"DebugAdapter bin folder not found on path {0}.",
		"{0}. Stopping the debug adapter.",
		"Debug adapter process has terminated unexpectedly"
	],
	"vs/workbench/parts/emmet/node/emmet.contribution": [
		"Emmet: Expand Abbreviation"
	],
	"vs/workbench/parts/errorList/browser/errorList.contribution": [
		"Toggle Error List",
		"Error List"
	],
	"vs/workbench/parts/execution/electron-browser/executionService": [
		"Press any key to continue..."
	],
	"vs/workbench/parts/execution/electron-browser/terminal.contribution": [
		"Open New Command Prompt",
		"Open New Terminal",
		"Open in Command Prompt",
		"Open in Terminal"
	],
	"vs/workbench/parts/extensions/common/extensions": [
		"Extensions"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsActions": [
		"Close",
		"Show Installed Extensions",
		"Install Extension",
		"Show Outdated Extensions",
		"Show Extension Recommendations",
		"'{0}' was successfully installed. Restart to enable it.",
		"Restart Now",
		"Uninstall Extension",
		"Are you sure you want to uninstall '{0}'?",
		"'{0}' was successfully uninstalled. Restart to deactivate it.",
		"Restart Now"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsQuickOpen": [
		"Install Extension",
		"Update Extension",
		"License",
		"Readme",
		"Would you like to install '{0}'?",
		"Cancel",
		"Install Now",
		"'{0}' is being installed...",
		"{0}, {1}, extensions picker",
		"{0} wasn't downloaded yet.",
		"{0} was downloaded once.",
		"{0} was downloaded {1} times.",
		"Type to narrow down the list of installed extensions",
		"No extensions found",
		"Type to narrow down the list of extensions from the gallery",
		"No extensions found",
		"Type to narrow down the list of outdated extensions",
		"No outdated extensions found",
		"No recommended extensions"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsWidgets": [
		"Extensions (1 issue)",
		"Extensions ({0} issues)",
		"Extensions ({0} installing...)",
		"Extensions (1 update available)",
		"Extensions ({0} updates available)",
		"Extensions"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsWorkbenchExtension": [
		"Show Local Extensions",
		"Install Gallery Extensions",
		"Update Outdated Extensions",
		"Show Extension Recommendations",
		"Extensions were successfully installed. Restart to enable them.",
		"{0} was successfully installed. Restart to enable it.",
		"Restart Now"
	],
	"vs/workbench/parts/extensions/node/extensionsService": [
		"Extension invalid: package.json is not a JSON file.",
		"Extension invalid: manifest name mismatch.",
		"Extension invalid: manifest publisher mismatch.",
		"Extension invalid: manifest version mismatch.",
		"Please restart Code before reinstalling {0}.",
		"Gallery information is missing",
		"Couldn't find a compatible version of {0} with this version of Code.",
		"Could not find extension"
	],
	"vs/workbench/parts/feedback/browser/feedback": [
		"Tweet Feedback",
		"Tweet us your feedback.",
		"How was your experience?",
		"Happy",
		"Sad",
		"Other ways to contact us",
		"Submit a bug",
		"Request a missing feature",
		"Tell us why?",
		"Comments",
		"Tweet",
		"character left",
		"characters left",
		"Sending",
		"Thanks",
		"Try again"
	],
	"vs/workbench/parts/files/browser/editors/binaryFileEditor": [
		"Binary File Viewer"
	],
	"vs/workbench/parts/files/browser/editors/fileEditorInput": [
		"Saved",
		"All changes saved",
		"Dirty",
		"Changes have been made to the file...",
		"Saving...",
		"Changes are currently being saved...",
		"Save error",
		"Sorry, we are having trouble saving your changes",
		"Conflict",
		"Changes cannot be saved because they conflict with the version on disk"
	],
	"vs/workbench/parts/files/browser/editors/textFileEditor": [
		"Text File Editor",
		"Create File",
		"We are sorry, but the file is too large to open it inside an editor.",
		"The folder '{0}' is outside the currently opened root folder and can not be opened in this instance.",
		"{0}. Text file editor.",
		"Text file editor."
	],
	"vs/workbench/parts/files/browser/fileActions": [
		"Retry",
		"Rename",
		"Rename",
		"File '{0}' is currently being saved, please try again later.",
		"New File",
		"New Folder",
		"New File",
		"New Folder",
		"New File",
		"New Folder",
		"Are you sure you want to delete '{0}' and its contents?",
		"Are you sure you want to delete '{0}'?",
		"You can restore from the recycle bin.",
		"You can restore from the trash.",
		"&&Move to Recycle Bin",
		"&&Move to Trash",
		"Are you sure you want to permanently delete '{0}' and its contents?",
		"Are you sure you want to permanently delete '{0}'?",
		"This action is irreversible!",
		"&&Delete",
		"File '{0}' is currently being saved, please try again later.",
		"Delete Permanently",
		"Delete",
		"Delete",
		"Import Files",
		"A file or folder with the same name already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace",
		"Copy",
		"Paste",
		"Duplicate",
		"Open to the Side",
		"Select for Compare",
		"Compare Active File With...",
		"The selected file can not be compared with '{0}'.",
		"Open a file first to compare it with another file.",
		"Compare with '{0}'",
		"Compare Files",
		"Refresh",
		"Save",
		"Save All",
		"Save Dirty Files",
		"Revert File",
		"Close All Files",
		"Close File",
		"Close Other Files",
		"Close File",
		"There is currently no file opened to close.",
		"Close Other Files",
		"Close All Files",
		"Open Next Working File",
		"Currently there are no working files.",
		"Open Previous Working File",
		"Currently there are no working files.",
		"Add Active File to Working Files",
		"Open a file first to add it to working files",
		"Focus on Working Files",
		"Focus on Files Explorer",
		"A file or folder name must be provided.",
		"A file or folder **{0}** already exists at this location. Please choose a different name.",
		"The name **{0}** is not valid as a file or folder name. Please choose a different name.",
		"The name **{0}** results in a path that is too long. Please choose a shorter name."
	],
	"vs/workbench/parts/files/browser/fileActions.contribution": [
		"Files"
	],
	"vs/workbench/parts/files/browser/fileTracker": [
		"{0} unsaved files"
	],
	"vs/workbench/parts/files/browser/files.contribution": [
		"Show Explorer",
		"Explorer",
		"View",
		"Text File Editor",
		"Binary File Editor",
		"Files configuration",
		"Configure glob patterns for excluding files and folders.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Configure file associations to languages (e.g. \"*.extension\": \"html\"). These have precedence over the default associations of the languages installed.",
		"The default character set encoding to use when reading and writing files.",
		"The default end of line character.",
		"When enabled, will trim trailing whitespace when you save a file.",
		"Controls auto save of dirty files. Accepted values:  \"{0}\", \"{1}\", \"{2}\". If set to \"{3}\" you can configure the delay in \"files.autoSaveDelay\".",
		"Controls the delay in ms after which a dirty file is saved automatically. Only applies when \"files.autoSave\" is set to \"{0}\"",
		"Configure glob patterns of file paths to exclude from file watching. Changing this setting requires a restart. When you experience Code consuming lots of cpu time on startup, you can exclude large folders to reduce the initial load.",
		"File Explorer configuration",
		"Maximum number of working files to show before scrollbars appear.",
		"Controls if the height of the working files section should adapt dynamically to the number of elements or not.",
		"Open Working File by Name",
		"Open Working File By Name",
		"Files"
	],
	"vs/workbench/parts/files/browser/saveErrorHandler": [
		"Overwrite",
		"Retry",
		"Discard",
		"Failed to save '{0}': File is write protected. Select 'Overwrite' to remove protection.",
		"Failed to save '{0}': {1}",
		"Failed to save '{0}': The content on disk is newer. Click on **Compare** to compare your version with the one on disk.",
		"Compare",
		"{0} - on disk ↔ in {1}",
		"{0} - Resolve save conflict",
		"Use the actions in the editor tool bar to either **undo** your changes or **overwrite** the content on disk with your changes",
		"Use local changes and overwrite disk contents",
		"The content of the file on disk has changed and the left hand side of the compare editor was refreshed. Please review and resolve again.",
		"Discard local changes and revert to content on disk"
	],
	"vs/workbench/parts/files/browser/views/emptyView": [
		"Files Explorer Section",
		"No Folder Opened",
		"You have not yet opened a folder.",
		"Open Folder"
	],
	"vs/workbench/parts/files/browser/views/explorerView": [
		"Files Explorer Section",
		"Files Explorer"
	],
	"vs/workbench/parts/files/browser/views/explorerViewer": [
		"Type file name. Press Enter to confirm or Escape to cancel.",
		"{0}, Files Explorer",
		"File '{0}' is currently being saved, please try again later.",
		"'{0}' already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace"
	],
	"vs/workbench/parts/files/browser/views/workingFilesView": [
		"Working Files Section",
		"Working Files",
		"{0} unsaved",
		"Working Files"
	],
	"vs/workbench/parts/files/browser/views/workingFilesViewer": [
		"{0}, Working Files"
	],
	"vs/workbench/parts/files/browser/workingFilesPicker": [
		"{0}, working file picker",
		"working files",
		"No matching working files found",
		"List of working files is currently empty"
	],
	"vs/workbench/parts/files/common/editors/textFileEditorModel": [
		"Failed to save '{0}': {1}",
		"An unexpected error was thrown from a file change listener of type: {0}",
		"The file is dirty. Please save it first before reopening it with another encoding."
	],
	"vs/workbench/parts/files/electron-browser/electronFileActions": [
		"Reveal in Explorer",
		"Reveal in Finder",
		"Open Containing Folder",
		"Reveal Active File in Windows Explorer",
		"Reveal Active File in Finder",
		"Open Containing Folder of Active File",
		"Open a file first to reveal",
		"Copy Path",
		"Copy Path of Active File",
		"Open a file first to copy its path",
		"Open File...",
		"Open Folder...",
		"Open...",
		"Open Active File in New Window",
		"Open a file first to open in new window"
	],
	"vs/workbench/parts/files/electron-browser/files.electron.contribution": [
		"Files"
	],
	"vs/workbench/parts/files/electron-browser/textFileServices": [
		"Do you want to save the changes you made to {0}?",
		"Do you want to save the changes to the following files?",
		"&&Save All",
		"&&Save",
		"Do&&n't Save",
		"Cancel",
		"Your changes will be lost if you don't save them.",
		"All Files"
	],
	"vs/workbench/parts/git/browser/gitActions": [
		"Open Change",
		"Open File",
		"Init",
		"Refresh",
		"Stage",
		"Stage All",
		"Are you sure you want to clean all changes?",
		"There are unstaged changes in {0} file.\n\nThis action is irreversible!",
		"There are unstaged changes in {0} files.\n\nThis action is irreversible!",
		"&&Clean Changes",
		"Are you sure you want to clean changes in '{0}'?",
		"This action is irreversible!",
		"&&Clean Changes",
		"Clean",
		"Clean All",
		"Unstage",
		"Unstage All",
		"Can't checkout. Please commit or stage your work first.",
		"Branch",
		"Commit Staged",
		"Commit All",
		"Commit All",
		"Commit Staged",
		"Pull",
		"Can't pull. Please commit or stage your work first.",
		"Authentication failed on the git remote.",
		"Pull (Rebase)",
		"Push",
		"Authentication failed on the git remote.",
		"Publish",
		"Are you sure you want to publish '{0}' to '{1}'?",
		"&&Publish",
		"Pick a remote to publish the branch '{0}' to:",
		"Authentication failed on the git remote.",
		"Authentication failed on the git remote.",
		"Sync",
		"Sync",
		"Synchronizing...",
		"Can't sync in detached mode.",
		"Current branch '{0} doesn't have an upstream branch configured.",
		"Current branch '{0}' is up to date.",
		"Please commit, undo or stash your changes before synchronizing.",
		"Current branch '{0}' is {1} commit behind and {2} commit ahead of '{3}'.",
		"Current branch '{0}' is {1} commit behind and {2} commits ahead of '{3}'.",
		"Current branch '{0}' is {1} commits behind and {2} commit ahead of '{3}'.",
		"Current branch '{0}' is {1} commits behind and {2} commits ahead of '{3}'.",
		"Undo Last Commit",
		"Checkout",
		"Branch"
	],
	"vs/workbench/parts/git/browser/gitActions.contribution": [
		"Switch to Changes View",
		"Switch to Editor View",
		"Stage Selected Lines",
		"Open Change",
		"Open File",
		"Git"
	],
	"vs/workbench/parts/git/browser/gitQuickOpen": [
		"{0}, git",
		"Branch at {0}",
		"Tag at {0}",
		"Branch {0} is already the current branch",
		"{0}, git branch",
		"Create branch {0}",
		"No other branches",
		"Please provide a valid branch name"
	],
	"vs/workbench/parts/git/browser/gitServices": [
		"Can't open this git resource.",
		"{0} - Changes on index",
		"{0} - Renamed - Changes on index",
		"{0} - Changes on working tree",
		"{0} - Merge changes",
		"You seem to have git {0} installed. Code works best with git >=2.0.0.",
		"Download",
		"Please configure your git user name and e-mail.",
		"Git {0}",
		"You should first resolve the unmerged changes before committing your changes.",
		"Show Output",
		"Cancel",
		"There was an issue running a git operation. Please review the output or use a console to check the state of your repository.",
		"{0} - Changes on index",
		"{0} - Changes on {1}",
		"Can't open this git resource."
	],
	"vs/workbench/parts/git/browser/gitWidgets": [
		"Publish Branch",
		"Synchronize Changes",
		"Git is not enabled in this workspace."
	],
	"vs/workbench/parts/git/browser/gitWorkbenchContributions": [
		"Running git status",
		"{0} pending changes",
		"Show Git",
		"Git",
		"View",
		"Git Commands",
		"Git configuration",
		"Is git enabled",
		"Path to the git executable",
		"Whether auto fetching is enabled."
	],
	"vs/workbench/parts/git/node/git.lib": [
		"File seems to be binary and cannot be opened as text"
	],
	"vs/workbench/parts/html/browser/html.contribution": [
		"Html Preview"
	],
	"vs/workbench/parts/html/browser/htmlPreviewPart": [
		"Preview Html",
		"Invalid editor input."
	],
	"vs/workbench/parts/markdown/browser/markdownActions": [
		"Toggle Preview",
		"Open a Markdown file first to show a preview.",
		"Open Preview to the Side",
		"Open a Markdown file first to show a preview.",
		"Open Preview",
		"Open Preview"
	],
	"vs/workbench/parts/markdown/browser/markdownActions.contribution": [
		"Markdown"
	],
	"vs/workbench/parts/markdown/common/markdownEditorInput": [
		"Preview '{0}'"
	],
	"vs/workbench/parts/markdown/common/markdownEditorModel": [
		"Unable to open '{0}' for Markdown rendering. Please make sure the file exists and that it is a valid Markdown file."
	],
	"vs/workbench/parts/output/browser/output.contribution": [
		"Output",
		"View",
		"Clear Output"
	],
	"vs/workbench/parts/output/browser/outputActions": [
		"Toggle Output",
		"Clear Output",
		"Switch to Output"
	],
	"vs/workbench/parts/output/common/outputEditorInput": [
		"Output",
		"for '{0}'"
	],
	"vs/workbench/parts/quickopen/browser/commandsHandler": [
		"Show All Commands",
		"{0}, {1}, commands",
		"{0}, commands",
		"Command '{0}' can not be run from here.",
		"Command '{0}' is not enabled in the current context.",
		"{0}: {1}",
		"No commands matching",
		"Show Editor Commands"
	],
	"vs/workbench/parts/quickopen/browser/gotoLineHandler": [
		"Go to Line...",
		"Type a line number between 1 and {0} to navigate to",
		"Type a line number to navigate to",
		"Go to line {0} and column {1}",
		"Go to line {0}",
		"Type a line number to navigate to.",
		"Open a text file first to go to a line"
	],
	"vs/workbench/parts/quickopen/browser/gotoSymbolHandler": [
		"Go to Symbol...",
		"symbols ({0})",
		"methods ({0})",
		"functions ({0})",
		"constructors ({0})",
		"variables ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"namespaces ({0})",
		"packages ({0})",
		"modules ({0})",
		"properties ({0})",
		"enumerations ({0})",
		"strings ({0})",
		"rules ({0})",
		"files ({0})",
		"arrays ({0})",
		"numbers ({0})",
		"booleans ({0})",
		"objects ({0})",
		"keys ({0})",
		"{0}, symbols",
		"No symbols matching",
		"No symbols found",
		"Type to narrow down symbols of the currently active editor.",
		"Unfortunately we have no symbol information for the file",
		"Open a text file first to go to a symbol"
	],
	"vs/workbench/parts/quickopen/browser/helpHandler": [
		"{0}, picker help",
		"global commands",
		"editor commands"
	],
	"vs/workbench/parts/quickopen/browser/markersHandler": [
		"[{0}] {1}",
		"{0}({1},{2})",
		"{0}, errors and warnings",
		"Type to narrow down errors and warnings",
		"No errors or warnings matching",
		"No errors or warnings",
		"Show Errors and Warnings"
	],
	"vs/workbench/parts/quickopen/browser/quickopen.contribution": [
		"Show Errors or Warnings",
		"Show Errors and Warnings",
		"Show and Run Commands",
		"Go to Line",
		"Go to Line",
		"Go to Symbol",
		"Go to Symbol",
		"Go to Symbol by Category",
		"Show Help"
	],
	"vs/workbench/parts/search/browser/search.contribution": [
		"Show Search",
		"Find in Folder",
		"Show All Symbols",
		"Search",
		"View",
		"Open Files and Symbols by Name",
		"Open Symbol By Name",
		"Search configuration",
		"Configure glob patterns for excluding files and folders in searches. Inherits all glob patterns from the file.exclude setting.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name."
	],
	"vs/workbench/parts/snippets/electron-browser/snippets.contribution": [
		"Snippets",
		"Select Language for Snippet",
		"Unable to create {0}",
		"Preferences",
		"Empty snippet",
		"User snippet configuration",
		"The prefix to used when selecting the snippet in intellisense",
		"The snippet content. Use '${id}', '${id:label}', '${1:label}' for variables and '$0', '$1' for the cursor positions",
		"The snippet description."
	],
	"vs/workbench/parts/tasks/browser/taskQuickOpen": [
		"{0}, tasks",
		"Type the name of a task to run",
		"No tasks matching",
		"No tasks found"
	],
	"vs/workbench/parts/tasks/common/taskTemplates": [
		"Compiles a TypeScript project",
		"Compiles a TypeScript project in watch mode",
		"Executes .NET Core build command",
		"Executes the build target",
		"Example to run an arbitrary external command"
	],
	"vs/workbench/parts/tasks/electron-browser/task.contribution": [
		"Run Build Task",
		"Run Test Task",
		"Run Rebuild Task",
		"Run Clean Task",
		"Configure Task Runner",
		"Tasks are only available on a workspace folder.",
		"Select a Task Runner",
		"Auto detecting tasks for {0}",
		"Auto detecting the task system failed. Using default template. Consult the task output for details.",
		"Unable to create the 'tasks.json' file inside the '.vscode' folder. Consult the task output for details.",
		"Close",
		"Terminate Running Task",
		"Failed to terminate running task",
		"Show Task Log",
		"Run Task",
		"99+",
		"Error: The content of the tasks.json file has syntax errors. Please correct them before executing a task.\n",
		"No task runner configured.",
		"No valid task runner configured. Supported task runners are 'service' and 'program'.",
		"There is an active running task right now. Terminate it first before executing another task.",
		"There is a task running. Do you want to terminate it?",
		"&&Terminate Task",
		"An error has occurred while running a task. See task log for details.",
		"Tasks",
		"Run Task",
		"The regular expression to find an error, warning or info in the output.",
		"The match group index of the filename. If omitted 1 is used.",
		"The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted line and column is assumed.",
		"The match group index of the problem's line. Defaults to 2",
		"The match group index of the problem's column. Defaults to 3",
		"The match group index of the problem's end line. Defaults to undefined",
		"The match group index of the problem's end column. Defaults to undefined",
		"The match group index of the problem's severity. Defaults to undefined",
		"The match group index of the problem's code. Defaults to undefined",
		"The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.",
		"In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.",
		"The regular expression to detect the begin or end of a watching task.",
		"The match group index of the filename. Can be omitted.",
		"The name of a base problem matcher to use.",
		"The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.",
		"The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.",
		"Controls if a problem reported on a text document is applied only to open, closed or all documents.",
		"A problem pattern or the name of a predefined problem pattern. Can be omitted if base is specified.",
		"Defines how file names reported in a problem pattern should be interpreted.",
		"If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a watching task is signaled.",
		"If matched in the output the end of a watching task is signaled.",
		"A regular expression signaling that a watched tasks begins executing triggered through file watching.",
		"A regular expression signaling that a watched tasks ends executing.",
		"The command to be executed. Can be an external program or a shell command.",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"Additional arguments passed to the command.",
		"Additional command options",
		"The current working directory of the executed program or script. If omitted Code's current workspace root is used.",
		"The environment of the executed program or shell. If omitted the parent process' environment is used.",
		"Controls whether the output of the running task is shown or not. If omitted 'always' is used.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the user is prompted when VS Code closes with a running background task.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Controls whether the task name is added as an argument to the command. Default is false.",
		"Prefix to indicate that an argument is task.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The task configurations. Usually these are enrichments of task already defined in the external task runner.",
		"The task's name",
		"Additional arguments passed to the command when this task is invoked.",
		"Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.",
		"Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Maps this task to Code's default build command.",
		"Maps this task to Code's default test command.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The config's version number",
		"Windows specific build configuration",
		"Mac specific build configuration",
		"Linux specific build configuration"
	],
	"vs/workbench/parts/tasks/node/processRunnerConfiguration": [
		"Error: no valid command name provided.",
		"Error: command arguments must be an array of strings. Provided value is:\n{0}",
		"Warning: global matchers and tasks can't be mixed. Ignoring global matchers.",
		"Warning: options.cwd must be of type string. Ignoring value {0}\n",
		"Error: Problem Matcher in declare scope must have a name:\n{0}\n",
		"Error: tasks must provide a taskName property. The task will be ignored.\n{0}\n",
		"Warning: the defined problem matcher is unknown. Supported types are string | ProblemMatcher | (string | ProblemMatcher)[].\n{0}\n",
		"Error: Invalid problemMatcher reference: {0}\n"
	],
	"vs/workbench/parts/tasks/node/processRunnerDetector": [
		"Running gulp --tasks-simple didn't list any tasks. Did you run npm install?",
		"Running jake --tasks didn't list any tasks. Did you run npm install?",
		"Gulp is not installed on your system. Run npm install -g gulp to install it.",
		"Jake is not installed on your system. Run npm install -g jake to install it.",
		"Grunt is not installed on your system. Run npm install -g grunt to install it.",
		"Program {0} was not found. Message is {1}",
		"Build task named '{0}' detected.",
		"Test task named '{0}' detected."
	],
	"vs/workbench/parts/tasks/node/processRunnerSystem": [
		"No build task configured.",
		"No test task configured.",
		"The provided task configuration has validation errors. See tasks output log for details.",
		"No task to execute found.",
		"A unknown error has occurred while executing a task. See task output log for details.",
		"\nWatching build tasks has finished.",
		"Failed to launch external program {0} {1}.",
		"\nThe task '{0}' was terminated per user request."
	],
	"vs/workbench/parts/themes/electron-browser/themes.contribution": [
		"Color Theme",
		"Problem loading theme: {0}",
		"Select Color Theme",
		"Preferences"
	],
	"vs/workbench/parts/update/electron-browser/update.contribution": [
		"Close",
		"Read License",
		"Welcome to {0} v{1}! Would you like to read the Release Notes?",
		"Our license terms have changed, please go through them."
	],
	"vs/workbench/services/files/electron-browser/fileService": [
		"Failed to move '{0}' to the trash"
	],
	"vs/workbench/services/files/node/fileService": [
		"File seems to be binary and cannot be opened as text",
		"File not found ({0})",
		"File is directory ({0})",
		"Unable to move/copy. File would replace folder it is contained in.",
		"Folders cannot be copied into the workspace. Please select individual files to copy them.",
		"File is Read Only"
	],
	"vs/workbench/services/history/browser/history": [
		"[Extension Development Host] - {0}",
		"{0} {1}",
		"{0} - {1}",
		"{0} - {1} - {2}",
		"{0} - {1}",
		"{0} - {1}"
	],
	"vs/workbench/services/keybinding/electron-browser/keybindingService": [
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to run when keybinding is triggered.",
		"Key or key sequence (separate keys with plus-sign and sequences with space, e.g Ctrl+O and Ctrl+L L for a chord",
		"Mac specific key or key sequence.",
		"Linux specific key or key sequence.",
		"Windows specific key or key sequence.",
		"Condition when the key is active.",
		"Contributes keybindings.",
		"Invalid `contributes.{0}`: {1}",
		"Keybindings configuration",
		"Key or key sequence (separated by space)",
		"Name of the command to execute",
		"Condition when the key is active."
	],
	"vs/workbench/services/message/electron-browser/messageService": [
		"&&Yes",
		"Cancel"
	],
	"vs/workbench/services/request/node/requestService": [
		"File not found.",
		"HTTP configuration",
		"The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables",
		"Whether the proxy server certificate should be verified against the list of supplied CAs."
	],
	"vs/workbench/services/themes/node/themeService": [
		"Contributes textmate color themes.",
		"Label of the color theme as shown in the UI.",
		"Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme.",
		"Path of the tmTheme file. The path is relative to the extension folder and is typically './themes/themeFile.tmTheme'.",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Unable to load {0}",
		"Problems parsing JSON theme file: {0}",
		"Problems parsing plist file: {0}"
	],
	"vs/workbench/services/thread/electron-browser/threadService": [
		"Extension host did not start in 10 seconds, it might be stopped on the first line and needs a debugger to continue.",
		"Extension host did not start in 10 seconds, that might be a problem.",
		"Error from the extension host: {0}",
		"Extension host terminated unexpectedly. Please reload the window to recover.",
		"Reload Window"
	]
});