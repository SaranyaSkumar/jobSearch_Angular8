
var request = require("request");


module.exports = app => {

    app.get('/search', function (req, res) {
        let postData = req.query;
        console.log("postData", postData)
        var options = { method: 'GET',
            url: 'https://nut-case.s3.amazonaws.com/jobs.json',
            json: true, //little convenience flag to set the requisite JSON headers
        };

        var filter = {
            title: postData.title?postData.title:'',
            location: postData.location?postData.location:'',
            experience: postData.experience?postData.experience:'',
            skills: postData.skills?postData.skills:''
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            body= body.data;
            console.log(body.length);
            body= body.filter(function(item) {
                for (var key in filter) {
                    if (item[key] === undefined || !item[key].toLowerCase().includes(filter[key].toLowerCase()))
                        return false;
                }
                return true;
            });
            console.log(body.length);
            res.header("Access-Control-Allow-Origin", "*");
            if(postData && !postData.count){
                body= body.slice(0, 20);
                res.json(body);
            }else {
                body= body.slice(0, postData.count);
                res.json(body);
            }
        });
    });

};
