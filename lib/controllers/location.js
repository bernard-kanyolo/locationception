const Models = require('../models/');
const Boom = require('boom');

module.exports = {
  index: async (request, reply) => {
    try {
      return await Models.Location.findAll();
    } catch (err) {
      console.log(err);
    }
  },

  create: async (request, reply) => {
     try {
       let parent_id;
       if (request.payload.parent_id) {
         parent = await Models.Location.findById(request.payload.parent_id);

         if (!parent) {
           return Boom.badRequest('Non existent parent specified');
         }

         parent_id = parent.id;
       }

       const result = await Models.Location
        .create({
          name: request.payload.name,
          male_population: request.payload.male_population,
          female_population: request.payload.female_population,
          parent_id,
        });

       return reply.response(result).code(201);

     } catch (err) {
       console.log(err);
     }
  },

  update: async (request, reply) => {
    const values = {
      name: request.payload.name,
      male_population: request.payload.male_population,
      female_population: request.payload.female_population,
      parent_id: request.payload.parent_id,
    };

    const options = {
      where: {
        id: request.params.id
      }
    };

    try {
      const [affected] = await Models.Location.update(values, options);
      if (affected < 1) {
        return Boom.notFound('Location not found');
      }

      return await Models.Location.findOne(options);
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (request, reply) => {
    const options = {
      where: {
        id: request.params.id
      }
    };

    try {
      const deleted = await Models.Location.destroy(options);
      if (deleted < 1) {
        return Boom.notFound('Location not found');
      }

      return reply.response().code(204);
    } catch (err) {
      console.log(err);
    }
  }
};
