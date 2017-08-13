import "isomorphic-fetch";

class UsersService{

    constructor(){
        this.url = `/api/users`;
    }

    getAllUsers(){
        console.log("requested All Posts");
        return fetch(this.url).then(response => response.json());
    }

}

export default new UsersService();
