'use strict';
module.exports = (sequelize, DataTypes) => {
  const mapcustomeradress = sequelize.define('mapcustomeradress', {
    custId: DataTypes.INTEGER,
  
    addressType : DataTypes.STRING,
    Hno:DataTypes.INTEGER,
    street: DataTypes.STRING,
    locality:DataTypes.STRING,
    area: DataTypes.STRING,
    district: DataTypes.STRING,
    state : DataTypes.STRING,
    pincode :DataTypes.INTEGER,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  mapcustomeradress.associate = function(models) {
    // associations can be defined here
      models.mapcustomeradress.hasMany(models.Address, { foreignKey: 'mapId' });
  };
  return mapcustomeradress;
};