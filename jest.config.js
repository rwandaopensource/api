module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|json)',
  ],
  "coverageReporters": [
    "lcov",
    "json",
    "text",
    "html"
  ],
  rootDir: './',
  testMatch: [
    '<rootDir>/src/**/**/*.(spec|test).ts',
  ],
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  }
};
