const Hapi = require('hapi');

const server = Hapi.Server({
  host: 'localhost',
  port: process.env.PORT || 3000,
});

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
