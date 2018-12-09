export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '8080',
    endpoints: {
      current: '/adder/current',
      addNum: '/adder/:num'
    }
  }
};
