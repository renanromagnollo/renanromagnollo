const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/**/index.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'test',
    'coverage'
  ],
  moduleNameMapper: {
    '@/test/(.*)$': '<rootDir>/test/$1',
    '@/(.*)$': '<rootDir>/src/$1'
  },
}

module.exports = createJestConfig(customJestConfig)