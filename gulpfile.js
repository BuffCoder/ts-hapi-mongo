'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    Config = require('./gulpfile.config');

var config = new Config();

/**
 * Update our general tsd.d.ts with references to all TypeScript files
 */
gulp.task('generate-ts-refs', function () {
    // Check if tsd.d.ts exists
    fs.stat(config.appTypeScriptReferences, function(err, stat) {
        if(err) {
            // Create tsd.d.ts file
            var stream = fs.createWriteStream(config.appTypeScriptReferences);
            stream.once('open', function(fd) {
                stream.write("//{\n");
                stream.write("//}");
                stream.end();
                addReferences();
            });
        } else {
            addReferences();
        }
    });
    
    function addReferences(){
        var target = gulp.src(config.appTypeScriptReferences);
        var sources = gulp.src([config.allTypeScript, '!./typings/tsd.d.ts'], {read: false});
        return target.pipe(inject(sources, {
            starttag: '//{',
            endtag: '//}',
            transform: function (filepath) {
                return '/// <reference path="..' + filepath + '" />';
            }
         })).pipe(gulp.dest(config.typings));
    }
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('ts-lint', function () {
    return gulp
        .src(config.appTypeScript)
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                  //path to typescript files
                         config.libraryTypeScriptDefinitions];  //reference to typescript definition files

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc({
                           target: 'ES5',
                           declarationFiles: false,
                           noExternalResolve: true
                       }));
                       
    tsResult.dts.pipe(gulp.dest(config.output));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean', function (cb) {
  var typeScriptGenFiles = [config.output];

  // delete the files
  del(typeScriptGenFiles, cb);
});

/**
 * Start our node server
 */
gulp.task('develop', function () {
    nodemon({ script: 'dest/app/server.js'
            , ext: 'js'
            , env: { 'NODE_ENV': 'development' }
           })
        .on('restart', function () {
            console.log('restarted!')
    });
});

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript, '!./typings/tsd.d.ts'], ['ts-lint', 'compile-ts', 'generate-ts-refs']);
});

gulp.task('debug', ['ts-lint', 'compile-ts', 'generate-ts-refs', 'watch']);

gulp.task('default', ['ts-lint', 'compile-ts', 'generate-ts-refs', 'watch', 'develop']);