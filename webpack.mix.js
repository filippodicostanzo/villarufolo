let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/style.scss', 'public/css')
    .copy('resources/assets/js/sufee','public/js/sufee')
    .copy('resources/assets/css/sufee','public/css/sufee')
    .copy('resources/assets/images', 'public/images')
    .copy('resources/assets/fonts','public/fonts');

