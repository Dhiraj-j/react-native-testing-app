const {transformer} = require('./metro.config');

module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-swiper|react-redux|react-native-linear-gradient|@react-navigation|@react-native|@react-native/assets|@react-native/js-polyfills)/)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.tsx',
    'react-native-responsive-fontsize':
      '<rootDir>/__mocks__/react-native-responsive-fontsize.tsx',
    'react-native-size-matters':
      '<rootDir>/__mocks__/react-native-size-matters.tsx',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/navigation/**/*',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
