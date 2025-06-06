
const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

//exports.create = (accessoryData) => console.log(accessoryData);

exports.create = (accessoryData) => Accessory.create(accessoryData);