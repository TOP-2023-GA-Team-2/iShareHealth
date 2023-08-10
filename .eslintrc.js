// Original:

// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

// New:

module.exports = {
	'env': {
		'es2021': true,
		'node': true,
		'jest': true,
	},
	'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		// 'project': './tsconfig.json',
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'plugins': [
		'react',
		'react-hooks',
		'react-native',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			2,
			{SwitchCase: 1}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}

