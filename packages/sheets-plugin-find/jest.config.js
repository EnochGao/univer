/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    // preset: 'ts-jest',
    preset: 'jest-puppeteer',
    testEnvironment: 'jsdom',
    // testRegex: "./*\\e2e\\.test\\.js$",
    moduleFileExtensions: ['js', 'ts', 'tsx'],

    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        // '^.+\\.tsx?$': 'babel-jest', // https://github.com/kulshekhar/ts-jest/issues/937#issuecomment-455431207
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
        },
    },

    collectCoverage: true,
    coverageReporters: ['json', 'html'],
};
