const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    const fistName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fistName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us4.api.mailchimp.com/3.0/lists/0f9057326e"
    const options = {
        method: "post",
        auth: "lalo1898jr:07588204ba50042d87d13742e9772f65-us4"
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
})

app.listen(3000, function(){
    console.log("Server runnig on port 3000");
});

//API-KEY 07588204ba50042d87d13742e9772f65-us4
//LIST-id 0f9057326e