module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/tools/assetsTransformer.js',
    '^@mocks/(.*)$': '<rootDir>/__mocks__/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@configs/(.*)$': '<rootDir>/src/configs/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@layouts/(.*)$': '<rootDir>/src/components/layouts/$1',
    '^@fragments/(.*)$': '<rootDir>/src/components/fragments/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@actioncreator/(.*)$': '<rootDir>/src/actioncreator/$1',
  },
  setupFiles: [
    'raf/polyfill',
  ],
  collectCoverageFrom: [
    'src/components/**/*.js',
    'src/pages/**/*.js',
    // '!src/components/layouts/**/*.js',
    '!src/pages/index.js',
    // '!src/utils/**/*.js',
    'src/utils/**/*.js'
  ],
  testURL: 'http://localhost/'
};
