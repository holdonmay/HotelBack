const Category = require('../models/category');
const {validationResult} = require('express-validator');

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name} = req.body;
    try{
        let category = await Category.findOne({name})
        console.log(Category)

        if(category){
        return res.status(400).send({error: 'Category already exists'});
    }

        category = new Category(req.body);
        await category.save();
        res.json({msg:'The category was created'})

    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
    
}

exports.update = async (req,res) => {
    const {name,price} = req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        let category = await Category.findById(req.params.id);

        if(!category){
            return res.status(400).json({error: 'The category does not exists'});
        }
        const newCategory = {}
        newCategory.name = name;
        newCategory.price = price;
        await Category.findOneAndUpdate({_id:req.params.id},newCategory,{new:true})
        res.json({msg: 'The category was updated'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
    
}

exports.delete = async (req,res) => {
    try{
        let category = await Category.findById(req.params.id);
        if(!category){
            return res.status(400).json({error: 'The category does not exists'});
        }
        await Category.findOneAndDelete({_id:req.params.id})
        res.json({msg:'The category was deleted'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.index = async (req,res) => {
    try{
        const categories = await Category.find()
        res.json(categories)
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}
