module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  publicRuntimeConfig: {
    DEV_URL: process.env.DEV_URL,
    PROD_URL: process.env.PROD_URL,
  }
}
