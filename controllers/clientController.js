const Client = require('../models/client');

exports.create = async (req, res) => { 
    const {email} = req.body;
    try{
        let client = await Client.findOne({email})
        console.log(client)
        
        if(client){
            return res.status(400).send({error: 'Client already exists'});
        }
        
        client = new Client(req.body);
        await client.save();
        res.json({msg:'The client was created'})

    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.update = async (req,res) => {
    const {name,lastName,city,country,phone,email} = req.body
    try{
        let client = await Client.findById(req.params.id);

        if(!client){
            return res.status(400).json({error: 'The room does not exists'});
        }
        const newClient = {}
        newClient.name = name;
        newClient.lastName = lastName;
        newClient.city = city;
        newClient.country = country;
        newClient.phone = phone;
        newClient.email = email;
        await Client.findOneAndUpdate({_id:req.params.id},newCategory,{new:true})
        res.json({msg: 'The client was updated'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
    
}

exports.delete = async (req,res) => {
    try{
        let client = await Client.findById(req.params.id);
        if(!client){
            return res.status(400).json({error: 'The client does not exists'});
        }
        await Client.findOneAndDelete({_id:req.params.id})
        res.json({msg:'The client was deleted'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.index = async (req,res) => {
    try{
        const clients = await Client.find()
        res.json(clients)
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}
