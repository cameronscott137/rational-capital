const mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('assets/css/app.css', 'public/css/', [
    tailwindcss,
])
.options({
    processCssUrls: false,
})
.purgeCss();

mix.js(
  [
    "assets/js/app.js",
  ],
  "public/js/app.min.js"
);
