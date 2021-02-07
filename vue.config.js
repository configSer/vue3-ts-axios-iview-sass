module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
	outputDir: 'dist',
	assetsDir: 'static',
	indexPath: 'index.html',
	filenameHashing: false,
	lintOnSave: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
	integrity: true,
	
	devServer: {
		open: true,
		proxy: {
			'/api': {
				target: 'http://XXXXXXXXXXXXX.com',
				changeOrigin: true
			}
		}
	}
}
