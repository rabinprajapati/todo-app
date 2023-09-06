const Model = require("./todo.model");

//doing crud operation on the database

//Create data in the database
const create = async (payload) => {
  return await Model.create(payload);
};

//Read data in the database
const readAllData = async () => {
  return await Model.find();
};
//Read one data in the database
const readOneData = async (id) => {
  return await Model.findById(id);
};
//Delete data in the database
const deleteData = async (id) => {
  return await Model.findByIdAndDelete(id);
};
//Edit data in the database
const editData = async (id, data) => {
  return await Model.findByIdAndUpdate({ _id: id }, data, { new: true });
};

module.exports = { create, readAllData, readOneData, deleteData, editData };
