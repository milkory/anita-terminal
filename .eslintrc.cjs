module.exports = {
  root: true,
  extends: ['eslint:recommended', '@nuxt/eslint-config'],
  rules: {
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
};
