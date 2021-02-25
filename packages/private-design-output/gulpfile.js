const Fiber = require('fibers');
const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
// const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rollup = require('@rollup/stream');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const cjs = require('@rollup/plugin-commonjs');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

// Set SCSS compiler to Dart Sass (`sass`)
sass.compiler = require('sass');

// SCSS include paths
const scssPaths = [
  'node_modules',
  'node_modules/@uqds'
];

// Build and export SCSS
function compileSCSS() {
  return src('./src/scss/**/*.scss')
    .pipe(sass({
      fiber: Fiber,
      includePaths: scssPaths,
      outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

// Export resources
/*
function exportFontFiles() {
  return src([])
  .pipe(dest('./dist/fonts'));
}
*/

function exportImages() {
  return src([
    './node_modules/@uqds/blockquote/src/images/**'
  ])
  .pipe(dest('./dist/images'));
}

function exportExample() {
  return src('./src/example.html')
  .pipe(dest('./dist'));
}

// Bundle Javascript modules
/**
 * TODO: Babel presets/targets need setting if clients have browser support
 * issues
 */
function bundleJS() {
  return rollup({
    input: './src/js/main.js',
    output: {
      format: 'iife',
      name: 'uq'
    },
    plugins: [ nodeResolve(), cjs() ]
  })
  .pipe(source('uqds.js'))
  .pipe(buffer())
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(dest('./dist/js'))
  .pipe(rename('uqds.min.js'))
  .pipe(uglify())
  .pipe(dest('./dist/js'));
}

exports.compileSCSS = compileSCSS;
//exports.exportFontFiles = exportFontFiles;
exports.exportImages = exportImages;
exports.exportExample = exportExample;
exports.bundleJS = bundleJS;
exports.default = parallel(compileSCSS, exportImages, exportExample, bundleJS);
