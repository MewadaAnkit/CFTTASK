const Category  = require('../models/Category.model')
const Service = require('../models/Service.model');
const CreateCategory = async(req,res)=>{
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const FindallCategory = async(req,res)=>{
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const FindandUpdate = async(req,res)=>{
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const Delete = async(req,res)=>{
    try {
        const services = await Service.find({ categoryId: req.params.categoryId });
        if (services.length > 0) {
            return res.status(400).json({ message: 'Cannot delete category with services' });
        }
        
        const category = await Category.findByIdAndDelete(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = {CreateCategory , FindallCategory , FindandUpdate , Delete}