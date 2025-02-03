const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://196.188.120.5:39443",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    })
  );
};
