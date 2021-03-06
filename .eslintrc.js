module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    'no-console': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 1,
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': ['error', { js: 'never', json: 'ignorePackages', vue: 'always', scss: 'always' }],
    'import/newline-after-import': 1,
    'prefer-destructuring': ['error', { AssignmentExpression: { array: false } }],
    'no-multi-assign': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // force the use of unix linebreak-syle
    'linebreak-style': ['error', 'unix'],
    // limit the cyclomatic complexity to 10
    'complexity': ['error', { max: 10 }],
    // allow dangling after this and super
    'no-underscore-dangle': ['error', { allowAfterThis: true, allowAfterSuper: true }]
  }
}
