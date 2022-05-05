const Service = require('../models/service');

exports.create = async (req, res) => {
    const {name} = req.body;

    try{
        let service = await Service.findOne({name})
        if(service){
            return res.status(400).send({error:'The service already exists'})
        }
        service = new Service(req.body);
        await service.save();
        res.json({msg:'The service was created'})
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.update = async (req,res) => {
    const {name,description,price} = req.body;
    try{
        let service = await Service.findById(req.params.id);
        if(!service){
            return res.status(400).json({error: 'The service does not exists'});
        }
        const newService = {}
        newService.name = name;
        newService.description = description;
        newService.price = price;
        await Service.findByIdAndUpdate({_id:req.params.id},newService,{new:true})
        res.json({msg: 'The service was updated'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.delete = async (req,res) => {
    try{
        let service = await Service.findById(req.params.id);
        if(!service){
            return res.status(400).json({error: 'The service does not exists'});
        }
        await Service.findByIdAndDelete({_id:req.params.id})
        res.json({msg:'The service was deleted'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.index = async (req,res) => {
    try{
        const services = await Service.find()
        res.json(services)
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}