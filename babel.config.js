module.exports = function (api) {
	api.cache(true)
	return {
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@Components': './src/components',
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
		],
		presets: ['babel-preset-expo'],
	}
}
