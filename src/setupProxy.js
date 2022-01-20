const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/login',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/auth/logout',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  // schedule
  app.use(
    '/schedule/create',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/schedule/all',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/schedule/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/schedule/update/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/schedule/remove/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  // user
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/user/find/:id',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/user/create',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
  app.use(
    '/user/update',
    createProxyMiddleware({
      target: 'http://localhost:3001',
    }),
  );
};
