let express = require("express");
let bodyParser = require('body-parser');
let util = require('util');

let error = function (err, response, body) {
  console.log('ERROR [%s]', util.inspect(err));
};

let Twitter = require('twitter-node-client').Twitter;

process.env.twitterConsumerKey = "p4nOxNz6eNI36hDL4qo3UcYQI";
process.env.twitterConsumerSecret = "dudfJbzML0X1NVP32uPD85ZA7jmmlpG6sFTPLeye7Tv2jSwI2n";
process.env.twitterAccessToken = "3103629918-mWGh2eawFxyrSeVbf7nURNkocgjWUmbQVRE3IW4";
process.env.twitterAccessTokenSecret = "U9XHvWrayn2L6LrC3Cal5wVHhOpmoliTvtYSGgUjjSq2Z";

let twitter = new Twitter();

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

let usersList = require('../data/usersList');
app.route("/api/users")
    .get((req, res) => {
        console.log('Requested node server');

        let staticUsers = usersList.users;
        res.json(staticUsers);

    });

app.route("/api/tweets/:id/:count")
    .get((req, res) => {
        console.log('Requested tweets from twitter server');

        let tweets = [];
        let {id} = req.params;
        let {count} = req.params;
        console.log(count);
        twitter.getSearch({ 'q': id, count: count},
            error,
            (data)=>{
                return res.json(JSON.parse(data))
            });
    });


app.route("/api/searchusers")
    .get((req, res) => {
        console.log('Requested tweets from twitter server');

        twitter.getUser({ screen_name: "dani", count: 10},
            error,
            (data)=>{
                return res.json(JSON.parse(data))
            });

    });

app.listen(9090);


// let toBeSent = [];
// let usersIds = require('../data/usersIds');
// function generateUsers() {
// let staticIds = usersIds.usersIds;
// Promise.all(staticIds.map((id)=>{
//     return twitter.getUser({ user_id: id },
//         error,
//         (data)=> {
//             console.log(data);
//             data = JSON.parse(data);
//             return toBeSent.push(data);
//         })
// })).then(()=> res.json(toBeSent));
// }
