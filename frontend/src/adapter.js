class Adapter {
    static #posturl = "http://localhost:3000/posts/"

    static getPost(postId) {
        return fetch(this.#posturl + postId)
        .then(res => res.json())
    }
}

