!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("path")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,i,a,s,u=t(0),l=t(5),c=Object.prototype.toString;function f(e){return void 0!==e}function d(e){return"[object String]"===c.call(e)}function p(e){return JSON.parse(l.readFileSync(e,"utf8"))}function g(e,n){return s&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,function(e,t){var r=t[0],o=n[r],i=e;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&void 0!==o&&null!==o||(i=String(o)),i})}function h(e){return function(n,t){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return function(e){return"[object Number]"===c.call(e)}(n)?n>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):g(e[n],r):d(t)?(console.warn("Message "+t+" didn't get externalized correctly."),g(t,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function m(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];return g(n,t)}function v(e,n){return i[e]=n,n}function b(e,n){var t,r=u.join(a.cacheRoot,e.id+"-"+e.hash+".json"),o=!1,i=!1;try{return t=JSON.parse(l.readFileSync(r,{encoding:"utf8",flag:"r"})),function(e){var n=new Date;l.utimes(e,n,n,function(){})}(r),t}catch(e){if("ENOENT"===e.code)i=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),l.unlink(r,function(e){e&&console.error("Deleting corrupted bundle "+r+" failed.")}),o=!0}}if(!(t=function(e,n){var t=a.translationsConfig[e.id];if(t){var r=p(t).contents,o=p(u.join(n,"nls.metadata.json")),i=Object.create(null);for(var s in o){var l=o[s],c=r[e.outDir+"/"+s];if(c){for(var f=[],g=0;g<l.keys.length;g++){var h=l.keys[g],m=c[d(h)?h:h.key];void 0===m&&(m=l.messages[g]),f.push(m)}i[s]=f}else i[s]=l.messages}return i}}(e,n))||o)return t;if(i)try{l.writeFileSync(r,JSON.stringify(t),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return t;throw e}return t}function y(e){try{return function(e){var n=p(u.join(e,"nls.metadata.json")),t=Object.create(null);for(var r in n){var o=n[r];t[r]=o.messages}return t}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function w(e,n){var t;if(!0===a.languagePackSupport&&void 0!==a.cacheRoot&&void 0!==a.languagePackId&&void 0!==a.translationsConfigFile&&void 0!==a.translationsConfig)try{t=b(e,n)}catch(e){console.log("Load or create bundle failed ",e)}if(!t){if(a.languagePackSupport)return y(n);var r=function(e){for(var n=a.locale;n;){var t=u.join(e,"nls.bundle."+n+".json");if(l.existsSync(t))return t;var r=n.lastIndexOf("-");n=r>0?n.substring(0,r):void 0}if(void 0===n&&(t=u.join(e,"nls.bundle.json"),l.existsSync(t)))return t}(n);if(r)try{return p(r)}catch(e){console.log("Loading in the box message bundle failed.",e)}t=y(n)}return t}function C(e){if(!e)return m;var n=u.extname(e);if(n&&(e=e.substr(0,e.length-n.length)),a.messageFormat===r.both||a.messageFormat===r.bundle){var t=function(e){for(var n,t=u.dirname(e);n=u.join(t,"nls.metadata.header.json"),!l.existsSync(n);){var r=u.dirname(t);if(r===t){n=void 0;break}t=r}return n}(e);if(t){var o=u.dirname(t),c=i[o];if(void 0===c)try{var d=JSON.parse(l.readFileSync(t,"utf8"));try{var g=w(d,o);c=v(o,g?{header:d,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),c=v(o,null)}}catch(e){console.error("Failed to read header file",e),c=v(o,null)}if(c){var b=e.substr(o.length+1).replace(/\\/g,"/"),y=c.nlsBundle[b];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):h(y)}}}if(a.messageFormat===r.both||a.messageFormat===r.file)try{var C=p(function(e){var n;if(a.cacheLanguageResolution&&n)n=n;else{if(s||!a.locale)n=".nls.json";else for(var t=a.locale;t;){var r=".nls."+t+".json";if(l.existsSync(e+r)){n=r;break}var o=t.lastIndexOf("-");o>0?t=t.substring(0,o):(n=".nls.json",t=null)}a.cacheLanguageResolution&&(n=n)}return e+n}(e));return Array.isArray(C)?h(C):f(C.messages)&&f(C.keys)?h(C.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(r=n.MessageFormat||(n.MessageFormat={})),function(e){e.is=function(e){var n=e;return n&&f(n.key)&&f(n.comment)}}(o||(o={})),function(){if(a={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:r.bundle},d(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(d(e.locale)&&(a.locale=e.locale.toLowerCase()),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(a.languagePackSupport=e._languagePackSupport),d(e._cacheRoot)&&(a.cacheRoot=e._cacheRoot),d(e._languagePackId)&&(a.languagePackId=e._languagePackId),d(e._translationsConfigFile)){a.translationsConfigFile=e._translationsConfigFile;try{a.translationsConfig=p(a.translationsConfigFile)}catch(n){e._corruptedFile&&l.writeFile(e._corruptedFile,"corrupted","utf8",function(e){console.error(e)})}}}catch(e){}s="pseudo"===a.locale,void 0,i=Object.create(null)}(),n.loadMessageBundle=C,n.config=function(e){return e&&(d(e.locale)&&(a.locale=e.locale.toLowerCase(),void 0,i=Object.create(null)),void 0!==e.messageFormat&&(a.messageFormat=e.messageFormat)),s="pseudo"===a.locale,C}},function(e,n){e.exports=require("vscode")},function(e,n,t){"use strict";function r(e,n){void 0===n&&(n=!1);var t=0,r=e.length,s="",u=0,l=16,c=0;function f(n,r){for(var o=0,i=0;o<n||!r;){var a=e.charCodeAt(t);if(a>=48&&a<=57)i=16*i+a-48;else if(a>=65&&a<=70)i=16*i+a-65+10;else{if(!(a>=97&&a<=102))break;i=16*i+a-97+10}t++,o++}return o<n&&(i=-1),i}function d(){if(s="",c=0,u=t,t>=r)return u=r,l=17;var n=e.charCodeAt(t);if(o(n)){do{t++,s+=String.fromCharCode(n),n=e.charCodeAt(t)}while(o(n));return l=15}if(i(n))return t++,s+=String.fromCharCode(n),13===n&&10===e.charCodeAt(t)&&(t++,s+="\n"),l=14;switch(n){case 123:return t++,l=1;case 125:return t++,l=2;case 91:return t++,l=3;case 93:return t++,l=4;case 58:return t++,l=6;case 44:return t++,l=5;case 34:return t++,s=function(){for(var n="",o=t;;){if(t>=r){n+=e.substring(o,t),c=2;break}var a=e.charCodeAt(t);if(34===a){n+=e.substring(o,t),t++;break}if(92!==a){if(a>=0&&a<=31){if(i(a)){n+=e.substring(o,t),c=2;break}c=6}t++}else{if(n+=e.substring(o,t),++t>=r){c=2;break}switch(a=e.charCodeAt(t++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var s=f(4,!0);s>=0?n+=String.fromCharCode(s):c=4;break;default:c=5}o=t}}return n}(),l=10;case 47:var d=t-1;if(47===e.charCodeAt(t+1)){for(t+=2;t<r&&!i(e.charCodeAt(t));)t++;return s=e.substring(d,t),l=12}if(42===e.charCodeAt(t+1)){t+=2;for(var g=!1;t<r;){if(42===e.charCodeAt(t)&&t+1<r&&47===e.charCodeAt(t+1)){t+=2,g=!0;break}t++}return g||(t++,c=1),s=e.substring(d,t),l=13}return s+=String.fromCharCode(n),t++,l=16;case 45:if(s+=String.fromCharCode(n),++t===r||!a(e.charCodeAt(t)))return l=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var n=t;if(48===e.charCodeAt(t))t++;else for(t++;t<e.length&&a(e.charCodeAt(t));)t++;if(t<e.length&&46===e.charCodeAt(t)){if(!(++t<e.length&&a(e.charCodeAt(t))))return c=3,e.substring(n,t);for(t++;t<e.length&&a(e.charCodeAt(t));)t++}var r=t;if(t<e.length&&(69===e.charCodeAt(t)||101===e.charCodeAt(t)))if((++t<e.length&&43===e.charCodeAt(t)||45===e.charCodeAt(t))&&t++,t<e.length&&a(e.charCodeAt(t))){for(t++;t<e.length&&a(e.charCodeAt(t));)t++;r=t}else c=3;return e.substring(n,r)}(),l=11;default:for(;t<r&&p(n);)t++,n=e.charCodeAt(t);if(u!==t){switch(s=e.substring(u,t)){case"true":return l=8;case"false":return l=9;case"null":return l=7}return l=16}return s+=String.fromCharCode(n),t++,l=16}}function p(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){t=e,s="",u=0,l=16,c=0},getPosition:function(){return t},scan:n?function(){var e;do{e=d()}while(e>=12&&e<=15);return e}:d,getToken:function(){return l},getTokenValue:function(){return s},getTokenOffset:function(){return u},getTokenLength:function(){return t-u},getTokenError:function(){return c}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}function s(e,n,t){var o,i,a,s,c;if(n){for(s=n.offset,c=s+n.length,a=s;a>0&&!l(e,a-1);)a--;for(var f=c;f<e.length&&!l(e,f);)f++;i=e.substring(a,f),o=function(e,n){var t=0,r=0,o=n.tabSize||4;for(;t<e.length;){var i=e.charAt(t);if(" "===i)r++;else{if("\t"!==i)break;r+=o}t++}return Math.floor(r/o)}(i,t)}else i=e,o=0,a=0,s=0,c=e.length;var d,p=function(e,n){for(var t=0;t<n.length;t++){var r=n.charAt(t);if("\r"===r)return t+1<n.length&&"\n"===n.charAt(t+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(t,e),g=!1,h=0;d=t.insertSpaces?u(" ",t.tabSize||4):"\t";var m=r(i,!1),v=!1;function b(){return p+u(d,o+h)}function y(){var e=m.scan();for(g=!1;15===e||14===e;)g=g||14===e,e=m.scan();return v=16===e||0!==m.getTokenError(),e}var w=[];function C(n,t,r){!v&&t<c&&r>s&&e.substring(t,r)!==n&&w.push({offset:t,length:r-t,content:n})}var k=y();if(17!==k){var A=m.getTokenOffset()+a;C(u(d,o),a,A)}for(;17!==k;){for(var S=m.getTokenOffset()+m.getTokenLength()+a,x=y(),O="";!g&&(12===x||13===x);){C(" ",S,m.getTokenOffset()+a),S=m.getTokenOffset()+m.getTokenLength()+a,O=12===x?b():"",x=y()}if(2===x)1!==k&&(h--,O=b());else if(4===x)3!==k&&(h--,O=b());else{switch(k){case 3:case 1:h++,O=b();break;case 5:case 12:O=b();break;case 13:O=g?b():" ";break;case 6:O=" ";break;case 10:if(6===x){O="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===x||13===x?O=" ":5!==x&&17!==x&&(v=!0);break;case 16:v=!0}!g||12!==x&&13!==x||(O=b())}C(O,S,m.getTokenOffset()+a),k=x}return w}function u(e,n){for(var t="",r=0;r<n;r++)t+=e;return t}function l(e,n){return-1!=="\r\n".indexOf(e.charAt(n))}function c(e,n,t){void 0===n&&(n=[]);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function i(e){return r.children.push(e),e}d(e,{onObjectBegin:function(e){r=i({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,n,t){(r=i({type:"property",offset:n,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:n,length:t,parent:r})},onObjectEnd:function(e,n){r.length=e+n-r.offset,r=r.parent,o(e+n)},onArrayBegin:function(e,n){r=i({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,n){r.length=e+n-r.offset,r=r.parent,o(e+n)},onLiteralValue:function(e,n,t){i({type:p(e),offset:n,length:t,parent:r,value:e}),o(n+t)},onSeparator:function(e,n,t){"property"===r.type&&(":"===e?r.colonOffset=n:","===e&&o(n))},onError:function(e,t,r){n.push({error:e,offset:t,length:r})}},t);var a=r.children[0];return a&&delete a.parent,a}function f(e,n){if(e){for(var t=e,r=0,o=n;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==t.type||!Array.isArray(t.children))return;for(var a=!1,s=0,u=t.children;s<u.length;s++){var l=u[s];if(Array.isArray(l.children)&&l.children[0].value===i){t=l.children[1],a=!0;break}}if(!a)return}else{var c=i;if("array"!==t.type||c<0||!Array.isArray(t.children)||c>=t.children.length)return;t=t.children[c]}}return t}}function d(e,n,t){var o=r(e,!1);function i(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength())}:function(){return!0}}function a(e){return e?function(n){return e(n,o.getTokenOffset(),o.getTokenLength())}:function(){return!0}}var s=i(n.onObjectBegin),u=a(n.onObjectProperty),l=i(n.onObjectEnd),c=i(n.onArrayBegin),f=i(n.onArrayEnd),d=a(n.onLiteralValue),p=a(n.onSeparator),g=i(n.onComment),h=a(n.onError),m=t&&t.disallowComments,v=t&&t.allowTrailingComma;function b(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:y(14);break;case 5:y(15);break;case 3:y(13);break;case 1:m||y(11);break;case 2:y(12);break;case 6:y(16)}switch(e){case 12:case 13:m?y(10):g();break;case 16:y(1);break;case 15:case 14:break;default:return e}}}function y(e,n,t){if(void 0===n&&(n=[]),void 0===t&&(t=[]),h(e),n.length+t.length>0)for(var r=o.getToken();17!==r;){if(-1!==n.indexOf(r)){b();break}if(-1!==t.indexOf(r))break;r=b()}}function w(e){var n=o.getTokenValue();return e?d(n):u(n),b(),!0}function C(){switch(o.getToken()){case 3:return function(){c(),b();for(var e=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(e||y(4,[],[]),p(","),b(),4===o.getToken()&&v)break}else e&&y(6,[],[]);C()||y(4,[],[4,5]),e=!0}return f(),4!==o.getToken()?y(8,[4],[]):b(),!0}();case 1:return function(){s(),b();for(var e=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(e||y(4,[],[]),p(","),b(),2===o.getToken()&&v)break}else e&&y(6,[],[]);(10!==o.getToken()?(y(3,[],[2,5]),0):(w(!1),6===o.getToken()?(p(":"),b(),C()||y(4,[],[2,5])):y(5,[],[2,5]),1))||y(4,[],[2,5]),e=!0}return l(),2!==o.getToken()?y(7,[2],[]):b(),!0}();case 10:return w(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(y(2),e=0)}catch(e){y(2)}d(e);break;case 7:d(null);break;case 8:d(!0);break;case 9:d(!1);break;default:return!1}return b(),!0}()}}return b(),17===o.getToken()||(C()?(17!==o.getToken()&&y(9,[],[]),!0):(y(4,[],[]),!1))}function p(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";default:return"null"}}function g(e,n,t,r,o){for(var i,a=n.slice(),s=c(e,[]),u=void 0,l=void 0;a.length>0&&(l=a.pop(),void 0===(u=f(s,a))&&void 0!==t);)"string"==typeof l?((i={})[l]=t,t=i):t=[t];if(u){if("object"===u.type&&"string"==typeof l&&Array.isArray(u.children)){var d=f(u,[l]);if(void 0!==d){if(void 0===t){if(!d.parent)throw new Error("Malformed AST");var p=u.children.indexOf(d.parent),g=void 0,m=d.parent.offset+d.parent.length;if(p>0)g=(k=u.children[p-1]).offset+k.length;else if(g=u.offset+1,u.children.length>1)m=u.children[1].offset;return h(e,{offset:g,length:m-g,content:""},r)}return h(e,{offset:d.offset,length:d.length,content:JSON.stringify(t)},r)}if(void 0===t)return[];var v=JSON.stringify(l)+": "+JSON.stringify(t),b=o?o(u.children.map(function(e){return e.children[0].value})):u.children.length,y=void 0;return h(e,y=b>0?{offset:(k=u.children[b-1]).offset+k.length,length:0,content:","+v}:0===u.children.length?{offset:u.offset+1,length:0,content:v}:{offset:u.offset+1,length:0,content:v+","},r)}if("array"===u.type&&"number"==typeof l&&Array.isArray(u.children)){if(-1===l){v=""+JSON.stringify(t),y=void 0;if(0===u.children.length)y={offset:u.offset+1,length:0,content:v};else y={offset:(k=u.children[u.children.length-1]).offset+k.length,length:0,content:","+v};return h(e,y,r)}if(void 0===t&&u.children.length>=0){var w=l,C=u.children[w];y=void 0;if(1===u.children.length)y={offset:u.offset+1,length:u.length-2,content:""};else if(u.children.length-1===w){var k,A=(k=u.children[w-1]).offset+k.length;y={offset:A,length:u.offset+u.length-2-A,content:""}}else y={offset:C.offset,length:u.children[w+1].offset-C.offset,content:""};return h(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof l?"index":"property")+" to parent of type "+u.type)}if(void 0===t)throw new Error("Can not delete in empty document");return h(e,{offset:s?s.offset:0,length:s?s.length:0,content:JSON.stringify(t)},r)}function h(e,n,t){var r=m(e,n),o=n.offset,i=n.offset+n.content.length;if(0===n.length||0===n.content.length){for(;o>0&&!l(r,o-1);)o--;for(;i<r.length&&!l(r,i);)i++}for(var a=s(r,{offset:o,length:i-o},t),u=a.length-1;u>=0;u--){var c=a[u];r=m(r,c),o=Math.min(o,c.offset),i=Math.max(i,c.offset+c.length),i+=c.content.length-c.length}return[{offset:o,length:e.length-(r.length-i)-o,content:r.substring(o,i)}]}function m(e,n){return e.substring(0,n.offset)+n.content+e.substring(n.offset+n.length)}t.r(n),t.d(n,"createScanner",function(){return v}),t.d(n,"getLocation",function(){return b}),t.d(n,"parse",function(){return y}),t.d(n,"parseTree",function(){return w}),t.d(n,"findNodeAtLocation",function(){return C}),t.d(n,"findNodeAtOffset",function(){return k}),t.d(n,"getNodePath",function(){return A}),t.d(n,"getNodeValue",function(){return S}),t.d(n,"visit",function(){return x}),t.d(n,"stripComments",function(){return O}),t.d(n,"format",function(){return T}),t.d(n,"modify",function(){return I}),t.d(n,"applyEdits",function(){return j});var v=r,b=function(e,n){var t=[],r=new Object,o=void 0,i={value:{},offset:0,length:0,type:"object",parent:void 0},a=!1;function s(e,n,t,r){i.value=e,i.offset=n,i.length=t,i.type=r,i.colonOffset=void 0,o=i}try{d(e,{onObjectBegin:function(e,i){if(n<=e)throw r;o=void 0,a=n>e,t.push("")},onObjectProperty:function(e,o,i){if(n<o)throw r;if(s(e,o,i,"property"),t[t.length-1]=e,n<=o+i)throw r},onObjectEnd:function(e,i){if(n<=e)throw r;o=void 0,t.pop()},onArrayBegin:function(e,i){if(n<=e)throw r;o=void 0,t.push(0)},onArrayEnd:function(e,i){if(n<=e)throw r;o=void 0,t.pop()},onLiteralValue:function(e,t,o){if(n<t)throw r;if(s(e,t,o,p(e)),n<=t+o)throw r},onSeparator:function(e,i,s){if(n<=i)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=i,a=!1,o=void 0;else if(","===e){var u=t[t.length-1];"number"==typeof u?t[t.length-1]=u+1:(a=!0,t[t.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:t,previousNode:o,isAtPropertyKey:a,matches:function(e){for(var n=0,r=0;n<e.length&&r<t.length;r++)if(e[n]===t[r]||"*"===e[n])n++;else if("**"!==e[n])return!1;return n===e.length}}},y=function(e,n,t){void 0===n&&(n=[]);var r=null,o=[],i=[];function a(e){Array.isArray(o)?o.push(e):r&&(o[r]=e)}return d(e,{onObjectBegin:function(){var e={};a(e),i.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=i.pop()},onArrayBegin:function(){var e=[];a(e),i.push(o),o=e,r=null},onArrayEnd:function(){o=i.pop()},onLiteralValue:a,onError:function(e,t,r){n.push({error:e,offset:t,length:r})}},t),o[0]},w=c,C=f,k=function e(n,t,r){if(void 0===r&&(r=!1),function(e,n,t){return void 0===t&&(t=!1),n>=e.offset&&n<e.offset+e.length||t&&n===e.offset+e.length}(n,t,r)){var o=n.children;if(Array.isArray(o))for(var i=0;i<o.length&&o[i].offset<=t;i++){var a=e(o[i],t,r);if(a)return a}return n}},A=function e(n){if(!n.parent||!n.parent.children)return[];var t=e(n.parent);if("property"===n.parent.type){var r=n.parent.children[0].value;t.push(r)}else if("array"===n.parent.type){var o=n.parent.children.indexOf(n);-1!==o&&t.push(o)}return t},S=function e(n){switch(n.type){case"array":return n.children.map(e);case"object":for(var t=Object.create(null),r=0,o=n.children;r<o.length;r++){var i=o[r],a=i.children[1];a&&(t[i.children[0].value]=e(a))}return t;case"null":case"string":case"number":case"boolean":return n.value;default:return}},x=d,O=function(e,n){var t,o,i=r(e),a=[],s=0;do{switch(o=i.getPosition(),t=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==n&&a.push(i.getTokenValue().replace(/[^\r\n]/g,n)),s=i.getPosition()}}while(17!==t);return a.join("")};function T(e,n,t){return s(e,n,t)}function I(e,n,t,r){return g(e,n,t,r.formattingOptions,r.getInsertionIndex)}function j(e,n){for(var t=n.length-1;t>=0;t--)e=m(e,n[t]);return e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t(1).loadMessageBundle(t(0).join(__dirname,"extension.ts")),i=t(2),a=t(3),s=t(0),u=t(6),l=i.window.createTextEditorDecorationType({color:"#777"});function c(e){return i.languages.registerCompletionItemProvider({language:"jsonc",pattern:e},{provideCompletionItems:function(e,n,t){var r=a.getLocation(e.getText(),e.offsetAt(n));if(!r.isAtPropertyKey&&r.previousNode&&"string"===r.previousNode.type){var s=e.lineAt(n.line).text.indexOf("$"),u=s>=0?new i.Position(n.line,s):n;return[{label:"workspaceFolder",detail:o(0,null)},{label:"workspaceFolderBasename",detail:o(1,null)},{label:"relativeFile",detail:o(2,null)},{label:"file",detail:o(3,null)},{label:"cwd",detail:o(4,null)},{label:"lineNumber",detail:o(5,null)},{label:"selectedText",detail:o(6,null)},{label:"fileDirname",detail:o(7,null)},{label:"fileExtname",detail:o(8,null)},{label:"fileBasename",detail:o(9,null)},{label:"fileBasenameNoExtension",detail:o(10,null)}].map(function(e){return{label:"${"+e.label+"}",range:new i.Range(u,n),detail:e.detail}})}return[]}})}function f(e,n){var t=e&&e.recommendations||[];if(Array.isArray(t)){var r=i.extensions.all.filter(function(e){return!(e.id.startsWith("vscode.")||"Microsoft.vscode-markdown"===e.id||t.indexOf(e.id)>-1)});if(r.length)return r.map(function(e){var t=new i.CompletionItem(e.id),r='"'+e.id+'"';return t.kind=i.CompletionItemKind.Value,t.insertText=r,t.range=n,t.filterText=r,t});var a=new i.CompletionItem(o(11,null));return a.insertText='"vscode.csharp"',a.kind=i.CompletionItemKind.Value,a.range=n,[a]}}function d(e){if(e&&"launch.json"===s.basename(e.document.fileName)){var n=[],t=!1,r=0;a.visit(e.document.getText(),{onObjectProperty:function(o,a,s){(t="version"===o||"type"===o||"request"===o||"compounds"===o||"configurations"===o&&0===r)&&n.push(new i.Range(e.document.positionAt(a),e.document.positionAt(a+s)))},onLiteralValue:function(r,o,a){t&&n.push(new i.Range(e.document.positionAt(o),e.document.positionAt(o+a)))},onArrayBegin:function(e,n){r++},onArrayEnd:function(e,n){r--}}),e.setDecorations(l,n)}}n.activate=function(e){var n;e.subscriptions.push(function(){var e=i.commands.getCommands(!0);return i.languages.registerCompletionItemProvider({pattern:"**/keybindings.json"},{provideCompletionItems:function(n,t,r){var o=a.getLocation(n.getText(),n.offsetAt(t));if("command"===o.path[1]){var s=n.getWordRangeAtPosition(t)||new i.Range(t,t);return e.then(function(e){return e.map(function(e){return function(e,n,t,r){var o=new i.CompletionItem(e);return o.kind=i.CompletionItemKind.Value,o.detail=t,o.insertText=r||e,o.range=n,o}(JSON.stringify(e),s)})})}}})}()),e.subscriptions.push(i.languages.registerCompletionItemProvider({language:"jsonc",pattern:"**/settings.json"},{provideCompletionItems:function(e,n,t){return new u.SettingsDocument(e).provideCompletionItems(n,t)}})),(n=e.subscriptions).push.apply(n,[i.languages.registerCompletionItemProvider({pattern:"**/extensions.json"},{provideCompletionItems:function(e,n,t){var r=a.getLocation(e.getText(),e.offsetAt(n)),o=e.getWordRangeAtPosition(n)||new i.Range(n,n);if("recommendations"===r.path[0]){var s=a.parse(e.getText());return f(s,o)}return[]}}),i.languages.registerCompletionItemProvider({pattern:"**/*.code-workspace"},{provideCompletionItems:function(e,n,t){var r=a.getLocation(e.getText(),e.offsetAt(n)),o=e.getWordRangeAtPosition(n)||new i.Range(n,n);if("extensions"===r.path[0]&&"recommendations"===r.path[1]){var s=a.parse(e.getText()).extensions;return f(s,o)}return[]}})]),e.subscriptions.push(c("**/launch.json")),e.subscriptions.push(c("**/tasks.json")),e.subscriptions.push(i.window.onDidChangeActiveTextEditor(function(e){return d(e)},null,e.subscriptions)),e.subscriptions.push(i.workspace.onDidChangeTextDocument(function(e){i.window.activeTextEditor&&e.document===i.window.activeTextEditor.document&&(r&&clearTimeout(r),r=setTimeout(function(){return d(i.window.activeTextEditor)},1e3))},null,e.subscriptions)),d(i.window.activeTextEditor),e.subscriptions.push(i.workspace.onWillSaveTextDocument(function(e){e.document.fileName.endsWith("/settings.json")&&function(e){var n=e.document,t=n.getText(),r=new i.WorkspaceEdit,o=-1;a.visit(t,{onArrayEnd:function(e,n){o=e+n},onLiteralValue:function(e,n,t){o=n+t},onObjectEnd:function(e,n){o=e+n},onError:function(e,t,i){if(6===e&&o>-1){var a=n.positionAt(o),s=n.getWordRangeAtPosition(a,/ *:/);s||r.insert(n.uri,a,",")}}}),e.waitUntil(i.workspace.applyEdit(r))}(e)}))},i.languages.registerDocumentSymbolProvider({pattern:"**/launch.json",language:"jsonc"},{provideDocumentSymbols:function(e,n){var t=[],r="",o="",s=0,u=0;return a.visit(e.getText(),{onObjectProperty:function(e,n,t){o=e},onLiteralValue:function(e,n,t){"name"===o&&(r=e)},onObjectBegin:function(e,n){2===++u&&(s=e)},onObjectEnd:function(n,o){r&&2===u&&t.push(new i.SymbolInformation(r,i.SymbolKind.Object,new i.Range(e.positionAt(s),e.positionAt(n)))),u--}}),t}})},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=t(3),i=t(1).loadMessageBundle(t(0).join(__dirname,"settingsDocumentHelper.ts")),a=function(){function e(e){this.document=e}return e.prototype.provideCompletionItems=function(e,n){var t=o.getLocation(this.document.getText(),this.document.offsetAt(e)),i=this.document.getWordRangeAtPosition(e)||new r.Range(e,e);return"window.title"===t.path[0]?this.provideWindowTitleCompletionItems(t,i):"files.associations"===t.path[0]?this.provideFilesAssociationsCompletionItems(t,i):"files.exclude"===t.path[0]||"search.exclude"===t.path[0]?this.provideExcludeCompletionItems(t,i):"files.defaultLanguage"===t.path[0]?this.provideLanguageCompletionItems(t,i):this.provideLanguageOverridesCompletionItems(t,e)},e.prototype.provideWindowTitleCompletionItems=function(e,n){var t=[];return t.push(this.newSimpleCompletionItem("${activeEditorShort}",n,i(0,null))),t.push(this.newSimpleCompletionItem("${activeEditorMedium}",n,i(1,null))),t.push(this.newSimpleCompletionItem("${activeEditorLong}",n,i(2,null))),t.push(this.newSimpleCompletionItem("${rootName}",n,i(3,null))),t.push(this.newSimpleCompletionItem("${rootPath}",n,i(4,null))),t.push(this.newSimpleCompletionItem("${folderName}",n,i(5,null))),t.push(this.newSimpleCompletionItem("${folderPath}",n,i(6,null))),t.push(this.newSimpleCompletionItem("${appName}",n,i(7,null))),t.push(this.newSimpleCompletionItem("${dirty}",n,i(8,null))),t.push(this.newSimpleCompletionItem("${separator}",n,i(9,null))),Promise.resolve(t)},e.prototype.provideFilesAssociationsCompletionItems=function(e,n){var t=[];if(2===e.path.length){if(e.isAtPropertyKey&&""!==e.path[1])return this.provideLanguageCompletionItems(e,n);t.push(this.newSnippetCompletionItem({label:i(10,null),documentation:i(11,null),snippet:e.isAtPropertyKey?'"*.${1:extension}": "${2:language}"':'{ "*.${1:extension}": "${2:language}" }',range:n})),t.push(this.newSnippetCompletionItem({label:i(12,null),documentation:i(13,null),snippet:e.isAtPropertyKey?'"/${1:path to file}/*.${2:extension}": "${3:language}"':'{ "/${1:path to file}/*.${2:extension}": "${3:language}" }',range:n}))}return Promise.resolve(t)},e.prototype.provideExcludeCompletionItems=function(e,n){var t=[];return 1===e.path.length?(t.push(this.newSnippetCompletionItem({label:i(14,null),documentation:i(15,null),snippet:e.isAtPropertyKey?'"**/*.${1:extension}": true':'{ "**/*.${1:extension}": true }',range:n})),t.push(this.newSnippetCompletionItem({label:i(16,null),documentation:i(17,null),snippet:e.isAtPropertyKey?'"**/*.{ext1,ext2,ext3}": true':'{ "**/*.{ext1,ext2,ext3}": true }',range:n})),t.push(this.newSnippetCompletionItem({label:i(18,null),documentation:i(19,null),snippet:e.isAtPropertyKey?'"**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" }':'{ "**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" } }',range:n})),t.push(this.newSnippetCompletionItem({label:i(20,null),documentation:i(21,null),snippet:e.isAtPropertyKey?'"${1:name}": true':'{ "${1:name}": true }',range:n})),t.push(this.newSnippetCompletionItem({label:i(22,null),documentation:i(23,null),snippet:e.isAtPropertyKey?'"{folder1,folder2,folder3}": true':'{ "{folder1,folder2,folder3}": true }',range:n})),t.push(this.newSnippetCompletionItem({label:i(24,null),documentation:i(25,null),snippet:e.isAtPropertyKey?'"**/${1:name}": true':'{ "**/${1:name}": true }',range:n}))):(t.push(this.newSimpleCompletionItem("false",n,i(26,null))),t.push(this.newSimpleCompletionItem("true",n,i(27,null))),t.push(this.newSnippetCompletionItem({label:i(28,null),documentation:i(29,null),snippet:'{ "when": "$(basename).${1:extension}" }',range:n}))),Promise.resolve(t)},e.prototype.provideLanguageCompletionItems=function(e,n,t){return void 0===t&&(t=function(e){return JSON.stringify(e)}),r.languages.getLanguages().then(function(e){for(var o=[],i=r.workspace.getConfiguration(),a=0,s=e;a<s.length;a++){var u=s[a],l=i.inspect("["+u+"]");if(!l||!l.defaultValue){var c=new r.CompletionItem(t(u));c.kind=r.CompletionItemKind.Property,c.range=n,o.push(c)}}return o})},e.prototype.provideLanguageOverridesCompletionItems=function(e,n){if(0===e.path.length){var t=this.document.getWordRangeAtPosition(n,/^\s*\[.*]?/)||new r.Range(n,n),o=this.document.getText(t);if(o&&o.trim().startsWith("["))return t=new r.Range(new r.Position(t.start.line,t.start.character+o.indexOf("[")),t.end),this.provideLanguageCompletionItems(e,t,function(e){return'"['+e+']"'});t=this.document.getWordRangeAtPosition(n)||new r.Range(n,n);var a='"[${1:language}]": {\n\t"$0"\n}';return(o=this.document.getText(t))&&o.startsWith('"')&&(t=new r.Range(new r.Position(t.start.line,t.start.character+1),t.end),a=a.substring(1)),Promise.resolve([this.newSnippetCompletionItem({label:i(30,null),documentation:i(31,null),snippet:a,range:t})])}if(1===e.path.length&&e.previousNode&&"string"==typeof e.previousNode.value&&e.previousNode.value.startsWith("[")){t=this.document.getWordRangeAtPosition(n)||new r.Range(n,n);return this.provideLanguageCompletionItems(e,t,function(e){return'"['+e+']"'})}return Promise.resolve([])},e.prototype.newSimpleCompletionItem=function(e,n,t,o){var i=new r.CompletionItem(e);return i.kind=r.CompletionItemKind.Value,i.detail=t,i.insertText=o||e,i.range=n,i},e.prototype.newSnippetCompletionItem=function(e){var n=new r.CompletionItem(e.label);return n.kind=r.CompletionItemKind.Value,n.documentation=e.documentation,n.insertText=new r.SnippetString(e.snippet),n.range=e.range,n},e}();n.SettingsDocument=a}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/dd1674d16603c8c95e8f421d7c1d8c926cf21322/extensions/configuration-editing/dist/extension.js.map