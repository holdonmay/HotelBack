const Employee = require('../models/employee');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    console.log('Holi')
    try{
        const {user,password} = req.body;

        let employee = await Employee.findOne({user});

        if(!employee){
            return res.status(400).json({error: 'The employee does not exist'});
        }
        const passCorrect = await bycrypt.compare(password,employee.password);
        if(!passCorrect){
            return res.status(400).json({error: 'The password is incorrect'});
        }

        //Con esta función accedes al id del empleado
        const payLoad = {
            employee: {
                id: employee.id
            }
        }
        
        jwt.sign(payLoad, 'Receptionist',{},(error,token) => {
            if(error) throw error;
            res.json({token})
        })
      
    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

exports.create = async (req, res) => {
    const {user,password} = req.body
    try{
        let employee = await Employee.findOne({user});

        if(employee){
            return res.status(400).json({error: 'The employee already exists'});
        }

        employee = new Employee(req.body);
        const salt = await bycrypt.genSalt(10);
        employee.password = await bycrypt.hash(password,salt);

        await employee.save();
        res.json({msg:'The employee was created'})

    }catch(error){
        console.log(error)
        res.status(400).send(error);
    }
}

