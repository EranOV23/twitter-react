import "isomorphic-fetch";

class TweetsService{

    constructor(){
        this.url = `/api/tweets`;
    }

    getUserTweet(id){
        console.log(`requested User Tweets for userID ${id}`);
        return fetch(this.url + `/${id}`).then(response => response.json());
    }


}

export default new TweetsService();
