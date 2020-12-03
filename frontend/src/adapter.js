class Adapter {
    static #posturl = "http://localhost:3000/posts"
<<<<<<< HEAD
    static #userURL = "http://localhost:3000/users"
=======
    static #userURL =  "http://localhost:3000/users"
>>>>>>> usertime

    static getPost(postId) {
        return fetch(this.#posturl + "/" + postId)
        .then(res => res.json())
    }

    static getReplies(postId) {
        return fetch(this.#posturl + "/" + postId + "/replies")
        .then(res => res.json())
    }

    static getAllPosts() {
        return fetch(this.#posturl)
            .then(res => res.json())
    }

    static addPost(post) {
        let reqObj = new Object()
        reqObj.method = 'POST';
        reqObj.headers = {"Content-Type": "application/json", 
                            "Accept": "application/json"};
        reqObj.body = JSON.stringify(post);
        return fetch(this.#posturl, reqObj).then(res => res.json())
    }

    static updatePost(post){
        let reqObj = new Object()
        reqObj.method = 'PATCH';
        reqObj.headers = { "Content-Type": "application/json"}
        reqObj.body = JSON.stringify(post);


       return fetch(this.#posturl + "/" + post.id, reqObj)
            .then(res => res.json())
    }

<<<<<<< HEAD
    static getUser(userId){
        return fetch(this.#userURL + '/' + userId)
=======
    static getUser(userId) {
        return fetch(this.#userURL + "/" + userId)
        .then(res => res.json())
    }

    static addUser(user){
        let reqObj = new Object();
        reqObj.method = 'POST';
        reqObj.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        reqObj.body = JSON.stringify(user);

        return fetch(this.#userURL, reqObj)
>>>>>>> usertime
        .then(res => res.json());
    }

}

