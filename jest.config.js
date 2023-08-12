module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|sass|scss|svg)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: ['./mocks/']
}
