module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["app/**/*.js"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "coverage",
    "databases.js",
    "server.js",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/tests-utils/test-env-setup.js"],
  setupFilesAfterEnv: ["<rootDir>/tests-utils/setupTests.js"],
};
