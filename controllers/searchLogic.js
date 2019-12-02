
var request = require("request");


module.exports = app => {

    app.get('/search', function (req, res) {
        let postData = req.query;
        console.log("postData", postData);
        let offset= Number(postData.offset);
        let count= Number(postData.count)+offset;
        var options = { method: 'GET',
            url: 'https://nut-case.s3.amazonaws.com/jobs.json',
            json: true, //little convenience flag to set the requisite JSON headers
        };

        var filter = {
            title: postData.title?postData.title:'',
            location: postData.location?postData.location:'',
            companyname: postData.company?postData.company:'',
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
            let result={
                length: body.length
            };
            res.header("Access-Control-Allow-Origin", "*");
            if(postData && !postData.count){
                body= body.slice(0, 10);
                result.data= body;
                res.json(result);
            }else {
                console.log("offset", offset, count)
                body= body.slice(offset, count);
                console.log("aftr", body.length);
                result.data= body;
                res.json(result);
            }
        });
    });

};
