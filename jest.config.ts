
export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  }
}
