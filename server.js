const Hapi = require('hapi');
const Config = require('./config');
const Models = require('./lib/models/');

const server = Hapi.Server({
  host: 'localhost',
  port: Config.port,
});

const start = async () => {
  try {
    await Models.sequelize.sync();
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
