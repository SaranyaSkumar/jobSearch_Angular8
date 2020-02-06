const users = require('../models/model/user')

module.exports = app => {

    app.post('/register', function (req, res) {
        let postData=req.body;
        users.create(postData).then(data=>{
            res.status(200).json({message: 'success', data: postData})
        }).catch((e)=>{
            res.status(400).json({message: 'error', data: e})
        })
    });
};