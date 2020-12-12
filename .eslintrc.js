module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
		"node": true,
		"jest": true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		'indent': [
			'error',
			'tab',
			2
		],
		'eqeqeq' : 'error',
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
		],
		'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
		],
		'no-console': 0
	}
}
