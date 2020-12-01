class PostController {
    static postsDiv = () => document.getElementById("post")

    static async init() {
        let postForm = document.getElementById('post-create')
        // let postsDiv =  document.getElementById("post")
        postForm.addEventListener("submit", PostController.addPost)
        let feed = await PostController.getAllPosts()
        feed.forEach(post => PostController.displayPost(post, PostController.postsDiv()))
    }

    static async getPost(id) {
        let returnPost
        await Adapter.getPost(id)
        .then(post => returnPost = new Post(post))
        return returnPost
    }

    static displayPost(post, location) {
        // let postsDiv =  document.getElementById("post")
        let postDiv = post.createPostDiv()
         postDiv.addEventListener("click", PostController.displayRepliesOnClick)
        location.appendChild(postDiv)
    }

    static async displayRepliesOnClick(event) {
        
        let post = await PostController.getPost(event.currentTarget.dataset.id)
        let replies = await post.getReplies()
        PostController.displayReplies(replies)
    }

    static displayReplies(replies) {
        let replyDiv = document.getElementById('replies')
        PostController.clearDiv(replyDiv)
            replies.forEach(reply => PostController.displayPost(reply,replyDiv))
    }

    static async getAllPosts() {
        let allPosts = []
        await Adapter.getAllPosts()
        .then(posts => posts.forEach(post => allPosts.push(new Post(post))))
        return allPosts
    }

    static clearDiv(location) {
        while (location.firstChild){
            location.removeChild(location.firstChild)
        }
    }

    static async addPost(event){
        event.preventDefault()
        let Obj = new Object()
        Obj.content = event.target.postContent.value
        Obj.user_id = localStorage.user_id
        let post 
        await Adapter.addPost(Obj).then(serverPost => post = new Post(serverPost))
        // console.log(post)
        PostController.displayPost(post, PostController.postsDiv())
    }

}