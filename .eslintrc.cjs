module.exports = {
  root: true,
  extends: ['eslint:recommended', '@nuxt/eslint-config'],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
};
