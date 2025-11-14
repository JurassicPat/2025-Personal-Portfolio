// postcss.config.cjs
const purgecssModule = require('@fullhuman/postcss-purgecss');
const purgecss = purgecssModule.default || purgecssModule;

module.exports = {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      safelist: [
        /^bg-/,
        /^text-/,
        /^d-/,
        /^align-/,
        /^min-vh-/,
        /^hero-/,
        'active',
        'show',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
