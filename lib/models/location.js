module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
    name: DataTypes.STRING,
    male_population: DataTypes.INTEGER,
    female_population: DataTypes.INTEGER,
  });

  Location.hasMany(Location, { foreignKey: 'parent_id' });

  return Location;
};
