module.exports = {
    pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://www.googleapis.com'),
                    handler: 'networkFirst',
                    options: {
                        networkTimeoutSeconds: 30,
                        cacheName: 'books-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
}