const express = require('express');
const router = express.Router();
const FoodController = require('../controller/FoodController');

router.get('/api/foods', FoodController.getAllFood);
router.get('/api/foods/:id', FoodController.getFoodUnique);
router.post('/api/foods', FoodController.createFoods);
router.put('/api/foods/:id', FoodController.PutFood);
router.delete('/api/foods/:id', FoodController.DeletFood);


module.exports = router;