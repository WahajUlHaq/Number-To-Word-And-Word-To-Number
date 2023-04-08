const User = require('../../model/user/index')

exports.helloWorld = async (req, res) => {    

    const user = new User(req.body)

    try { 
        await user.save()
        res.status(201).send("User Saved Successfully") 

    } catch (e) {
        res.status(400).send(e)
    }
}