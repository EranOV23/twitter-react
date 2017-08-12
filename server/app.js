let express = require("express");
let bodyParser = require('body-parser');
let util = require('util');
let toBeSent = [];

let error = function (err, response, body) {
  console.log('ERROR [%s]', util.inspect(err));
};
let success = function (data) {
    console.log('DATA [%s]', util.inspect(data));
};

let Twitter = require('twitter-node-client').Twitter;

process.env.twitterConsumerKey = "p4nOxNz6eNI36hDL4qo3UcYQI";
process.env.twitterConsumerSecret = "dudfJbzML0X1NVP32uPD85ZA7jmmlpG6sFTPLeye7Tv2jSwI2n";
process.env.twitterAccessToken = "3103629918-mWGh2eawFxyrSeVbf7nURNkocgjWUmbQVRE3IW4";
process.env.twitterAccessTokenSecret = "U9XHvWrayn2L6LrC3Cal5wVHhOpmoliTvtYSGgUjjSq2Z";

let twitter = new Twitter();

// works!
// twitter.getUserTimeline({ screen_name: 'google', count: '2'}, error, success);
// twitter.getMentionsTimeline({ count: '2' }, error, success);
// twitter.getHomeTimeline({ count: '2' }, error, success);
//twitter.getReTweetsOfMe({ count: '2'}, error, success);
//twitter.getTweet({ id: '1111111111'}, error, success);
//twitter.getSearch({ 'q': '#javascript', 'count': 2 }, error, success);
//twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);
//twitter.getCustomApiCall('/statuses/lookup.json',{ id: '412312323'}, error, success)
// twitter.getUser({ screen_name: 'ihenvyr' }, error, success);

let app = express();
app.use(bodyParser.urlencoded({extended: true}));


var usersIds = require('../data/usersIds')
var usersList = require('../data/usersList')


app.route("/api/users")
    .get((req, res) => {
        console.log('Requested node server');
        //
        // let usersIds = [];
        // twitter.getFollowersIds({ user_id: "12345" },
        //     error,
        //     function(data){
        //         usersIds = JSON.parse(data).ids.slice(0,99);
        //         console.log(usersIds.map((user)=>user.toString() ));
        //
        //         res.json(toBeSent);
        //     });

        //
        // console.log(usersIds.usersIds);
        let staticIds = usersIds.usersIds;
        // let staticIds = ["5353062","832982844133761024","719232054781734912","794076795419013120","791719247424651264"]
        //
        // Promise.all(staticIds.map((id)=>{
        //     return twitter.getUser({ user_id: id },
        //         error,
        //         (data)=> {
        //             console.log(data);
        //             data = JSON.parse(data);
        //             return toBeSent.push(data);
        //         })
        // })).then(()=> res.json(toBeSent));


        let staticUsers = usersList.users
        res.json(staticUsers);

    });

app.route("/api/tweets/:id")
    .get((req, res) => {
        console.log('Requested tweets from twitter server');

        let tweets = [];
        let {id} = req.params;
        console.log(id);
        twitter.getSearch({ 'q': id, count: '50'},
            error,
            (data)=>{
                return res.json(JSON.parse(data))
            });

    });

app.listen(9090);
