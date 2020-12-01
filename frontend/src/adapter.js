class Adapter {
    static #posturl = "http://localhost:3000/posts"

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
        reqObj.headers = { "Content-Type": "application/json", 
                            "Accept": "application/json" };
        reqObj.body = JSON.stringify(post);


       return fetch(this.#posturl, reqObj)
            .then(res => res.json())
    }

}

