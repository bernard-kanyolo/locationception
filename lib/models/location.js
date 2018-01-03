module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    Name: DataTypes.STRING,
    MalePopulation: DataTypes.INTEGER,
    FemalePopulation: DataTypes.INTEGER,
  });

  Location.hasMany(Location);

  return Location;
};
