// @ts-ignore
const postcssImport = require('postcss-import');
const postcssNormalize = require('postcss-normalize');
const fontsConfig = require('./globalConfig.js').fonts;

module.exports = {
  // syntax: 'postcss-scss',
  plugins: [
    require('postcss-font-magician')(fontsConfig),
    postcssImport({
      plugins: [
        postcssNormalize(),
        require('postcss-preset-env'),
        require('stylelint'),
        require('postcss-sorting'),
        require('postcss-browser-reporter'),
      ],
    }),
    require('postcss-color-alpha'),
    /* require('postcss-easysprites')({
      imagePath: './src/assets/img',
      spritePath: './dist/assets/img/sprites',
    }), */
    // require("postcss-advanced-variables"),
    require('postcss-url'),
    require('postcss-easy-z'),
    require('postcss-easing-gradients'),
    require('postcss-aspect-ratio'),
    require('postcss-fluidvars')({namespace: 'fv'}),
    require('postcss-responsive-images'),
    require('postcss-utilities'),
    require('postcss-focus'),
    require('postcss-pxtorem')({replace: false}), // rem as fallback
    require('postcss-color-rgba-fallback'),
    require('postcss-flexbugs-fixes'),
    require('postcss-fontstack-auto'),
    require('postcss-presence-transition'),
    require('postcss-will-change-transition'),
    require('postcss-will-change'),
    require('postcss-calc'),
    require('autoprefixer'),
    require('postcss-browser-reporter'),
  ],
};
