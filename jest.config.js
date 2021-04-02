module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper: {
    '^.+/(.*\\.svg)\\?inline$': '<rootDir>/src/assets/icons/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
