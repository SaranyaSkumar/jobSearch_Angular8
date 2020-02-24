const users = require('../models/model/user')

module.exports = app => {

    app.post('/register', function (req, res) {
        let postData=req.body;
        console.log("postData", postData)
        users.create(postData).then(data=>{
            console.log("datadata",data)
            if(data){
                res.status(200).json({message: 'success', data: postData})
            }else {
                es.status(400).json({message: 'error', data: 'user creation failed'})
            }
        }).catch((e)=>{
            res.status(400).json({message: 'error', data: e})
        })
    });
};