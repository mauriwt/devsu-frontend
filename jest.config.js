module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/src/test.ts"
    ],
    transformIgnorePatterns: [
      "node_modules/(?!.*\\.mjs$)"
    ],
    moduleNameMapper: {
      "src/(.*)": "<rootDir>/src/$1"
    }
  };