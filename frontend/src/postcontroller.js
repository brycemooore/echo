class PostController {
    
    static async init() {
        let currentPost = await PostController.getPost(2)
        PostController.displayPost(currentPost)
    }

    static async getPost(id) {
        let returnPost
        await Adapter.getPost(id)
        .then(post => returnPost = new Post(post))
        return returnPost
    }

    static displayPost(post) {
        document.getElementById("post").appendChild(post.createPostDiv())
    }
}