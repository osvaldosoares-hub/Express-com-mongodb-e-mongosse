const FoodModel = require('../models/FoodModel');

const createFood = async (FoodData) => {
   const Food = new FoodModel(FoodData);
   await Food.save();
   return Food;
};
                           
const getFoodById = async (id) => {
   return await FoodModel.findOne({ _id:id });
};
const getFood = async () => {
    return await FoodModel.find({});
 };

const DeletFoodById = async (id) => {
   return await FoodModel.deleteOne({_id: id})
};

const updateFood = async (id, foodData) => {
   return await FoodModel.findByIdAndUpdate(id, foodData);
};
module.exports = {
    createFood,
    getFoodById,
    getFood,
    DeletFoodById,
    updateFood
};