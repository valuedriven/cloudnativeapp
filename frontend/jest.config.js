const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.js',
    'pages/**/*.js',
    'middleware/**/*.js',
    'utils/**/*.js',
    '!**/pages/_app.js',
    '!**/pages/api/hello.js',
  ],
};

module.exports = createJestConfig(customJestConfig);
