const users = require('../models/model/user')

module.exports = app => {

    app.post('/register', function (req, res) {
        let postData=req.body;
        console.log("postData", postData)
        users.create(postData).then(data=>{
            console.log("datadata",data)
            res.status(200).json({message: 'success', data: postData})
        }).catch((e)=>{
            res.status(400).json({message: 'error', data: e})
        })
    });
};