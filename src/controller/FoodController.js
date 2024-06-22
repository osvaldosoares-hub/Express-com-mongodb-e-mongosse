const FoodService = require('../services/FoodService');

const createFoods = async (req, res) => {
    try {
        
        const Food = await FoodService.createFood(req.body);
        res.status(201).json(Food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFoodUnique = async (req, res) => {
    try {
        const Food = await FoodService.getFoodById(req.params.id);
        if (!Food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(Food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const DeletFood = async (req,res) => {
    try {
        const Food = await FoodService.DeletFoodById(req.params.id);
        if (!Food.deletedCount) {
            return res.status(404);
        }
        res.status(201).json(Food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllFood = async (req,res) => {
    try {
        const foods = await FoodService.getFood();
        res.status(201).json(foods);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
};

const PutFood = async (req, res) => {
    try {
        const updatedFood = await FoodService.updateFood(req.params.id, req.body);
        if (!updatedFood) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.status(200).json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createFoods,
    getFoodUnique,
    DeletFood,
    getAllFood,
    PutFood
};