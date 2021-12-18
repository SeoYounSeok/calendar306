const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/login',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
  app.use(
    '/auth/logout',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
  // schedule
  app.use(
    '/create',
    createProxyMiddleware({
      target: 'http://localhost:5000',
    }),
  );
  app.use(
    '/all',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
  app.use(
    ':id',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
  app.use(
    '/update/:id',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
  app.use(
    '/remove/:id',
    createProxyMiddleware({
      target: 'http://localhost:8000',
    }),
  );
};
