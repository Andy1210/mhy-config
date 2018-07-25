import path from 'path'

import { load, moduleHome } from '../'

export default load('jest', {
	setupTestFrameworkScriptFile: path.resolve(moduleHome, 'config/jest/setup.js'),
	roots: [
		path.resolve(process.cwd(), 'src')
	],
	transform: {
		'^.+\\.jsx?$': require.resolve('./preprocess')
	},
	bail: true,
	testRegex: '\\.(test|spec|integration)\\.jsx?$',
	collectCoverage: false,
	verbose: true,
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/../resources/jest-mocks/File.js',
		'\\.(s?css|less)$': 'identity-obj-proxy'
	},
	collectCoverageFrom: [
		'**/*.js'
	]
})