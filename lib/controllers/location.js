const Models = require('../models/');

module.exports = {
  index: async (request, reply) => {
    const result = await Models.Location
     .findAll();

    return result;
  },
  create: async (request, reply) => {
     try {
       let parent_id;
       if (request.payload.parent_id) {
         parent = await Models.Location.findById(request.payload.parent_id);

         if (parent) {
           console.log('parent: ', parent);
           parent_id = parent.id;
         }
       }

       const result = await Models.Location
        .create({
          Name: request.payload.name,
          MalePopulation: request.payload.male_population,
          FemalePopulation: request.payload.female_population,
          LocationId: parent_id,
        });

        return result;
     } catch (err) {
       console.log(err);
     }
  },
};
