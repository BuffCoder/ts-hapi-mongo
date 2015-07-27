'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './src/';
        this.output = './dest/';
        
        this.allJavaScript = [this.output + '**/*.js'];
        this.appTypeScript = this.source + '**/*.ts';
        this.allTypeScript = './**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = this.typings + '**/*.ts';
        this.appTypeScriptReferences = this.typings + 'tsd.d.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;