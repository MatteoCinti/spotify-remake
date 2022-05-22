const nextJest = require('next/jest');
const tsconfig = require('./tsconfig.json');
// eslint-disable-next-line
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

/**
 * check in case of bugs running tests with next
 *
 */
// eslint-disable-next-line
const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  /**
   * Required for custom @imports
   * setup in ts.
   */
  moduleNameMapper,

  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  setupFilesAfterEnv: ['<rootDir>/__test__/config/importJestDOM.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;
