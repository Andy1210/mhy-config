import path from 'path'

import { load, moduleHome } from '../'

require('../_utils/babelrc')(__dirname)

module.exports = load('jest', {
    setupTestFrameworkScriptFile: path.resolve(moduleHome, 'jest/setup.js'),
    roots: [path.resolve(process.cwd(), 'src')],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    modulePaths: [
        path.resolve(process.cwd(), 'src'),
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(moduleHome, '../../../../', './node_modules')
    ],
    transform: {
        '^.+\\.[jt]sx?$': require.resolve('./preprocess')
    },
    transformIgnorePatterns: [],
    bail: true,
    testRegex: '\\.?(test|tests|spec|integration)\\.[jt]sx?$',
    collectCoverage: false,
    verbose: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/../resources/jest-mocks/File.js',
        '\\.(s?css|less)$': 'identity-obj-proxy',
        '\\.(svgx)$': path.resolve(__dirname, 'mocks/react-null.js')
    },
    collectCoverageFrom: ['**/*.js']
})
