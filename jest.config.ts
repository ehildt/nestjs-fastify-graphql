'use strict';

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  verbose: true,
  reporters: ['default', 'jest-junit'],
  coverageReporters: ['clover', 'json', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  collectCoverageFrom: ['!**/dist/**', '!**/dtos/**', '!**/mocks/**', '!**/open-api/**', '!**/node_modules/**'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  coverageDirectory: '<rootDir>/src/coverage',
  setupFilesAfterEnv: ['jest-extended/all'],
  moduleDirectories: ['node_modules'],
};

module.exports = { ...config };
