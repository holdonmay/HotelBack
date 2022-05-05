const Room = require('../models/room')

exports.create = async (req, res) => { 
    const {floor,number} = req.body;
    try{
        let room = await Room.findOne({floor,number})
        console.log('entro')
        
        if(room){
            return res.status(400).send({error: 'Room already exists'});
        }
        room = new Room(req.body);
        await room.save();
        res.json({msg:'The room was created'})

    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.update = async (req,res) => {
    const {floor,available,description} = req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        let room = await Room.findById(req.params.id);

        if(!room){
            return res.status(400).json({error: 'The room does not exists'});
        }
        const newRoom = {}
        newRoom.floor = floor;
        newRoom.available = available;
        newRoom.description = description;
        await Room.findOneAndUpdate({_id:req.params.id},newRoom,{new:true})
        res.json({msg: 'The room was updated'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
    
}

exports.delete = async (req,res) => {
    try{
        let room = await Room.findById(req.params.id);
        if(!room){
            return res.status(400).json({error: 'The room does not exists'});
        }
        await Room.findOneAndDelete({_id:req.params.id})
        res.json({msg:'The room was deleted'});
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.index = async (req,res) => {
    try{
        const rooms = await Room.find()
        res.json(rooms)
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}



