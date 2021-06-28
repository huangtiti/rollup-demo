const resolve = require('resolve');

module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": resolve.sync('jest-css-modules'),
    "\\.svg": "<rootDir>/js_transition.d.ts",
  },
  transform: {
    '^.+\.(ts|html|tsx)$': 'ts-jest',
    '^.+\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ["/node_modules/(?!lodash-es)"],
  testMatch: ['<rootDir>/src/__tests__/*.ts?(x)'],
};