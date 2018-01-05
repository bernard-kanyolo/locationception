const Location = require('./controllers/location');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: Location.index,
    config: {
      description: 'Gets all the locations available'
    }
  },
  {
    method: 'POST',
    path: '/location',
    handler: Location.create,
    config: {
      description: 'Adds a new location'
    }
  },
  {
    method: 'PUT',
    path: '/location/{id}',
    handler: Location.update,
    config: {
      description: 'Updates a location'
    }
  },
  {
    method: 'DELETE',
    path: '/location/{id}',
    handler: Location.delete,
    config: {
      description: 'Deletes a location'
    }
  },
];
