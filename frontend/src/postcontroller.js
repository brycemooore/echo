class PostController {
    static postsDiv = () => document.getElementById("post")
    static repliesDiv = () => document.getElementById('replies')

    static async init() {
        let postForm = document.getElementById('post-create')
        let replyForm = document.getElementById('replies-create')
        // let postsDiv =  document.getElementById("post")
        postForm.addEventListener("submit", PostController.addPost)
        replyForm.addEventListener("submit", PostController.addReply)
        let feed = await PostController.getPostsGeo()
        
        PostController.displayAllPosts(feed)
    }

    static async getPost(id) {
        let returnPost
        await Adapter.getPost(id)
        .then(post => returnPost = new Post(post))
        return returnPost
    }

    static displayReply(post){
        let location = PostController.repliesDiv()
        let div = document.createElement('div')
        let postDiv = post.createPostDiv()
        postDiv.addEventListener("click", PostController.displayRepliesOnClick)
        div.appendChild(postDiv);
        
         let postLike = postDiv.children[2].children[1]
        //  let postLike = postDiv.children[3]
         postLike.addEventListener('click', PostController.likePost)
        location.appendChild(div)
    }

    static displayPost(post, location) {
        // let postsDiv =  document.getElementById("post")
        let div = document.createElement('div')
        let postDiv = post.createPostDiv()
        postDiv.addEventListener("click", PostController.displayRepliesOnClick)
        div.appendChild(postDiv);
        
         let postLike = postDiv.children[2].children[1]
        //  let postLike = postDiv.children[3]
         postLike.addEventListener('click', PostController.likePost)
        location.prepend(div)
    }

    static async redisplayAllPosts() {
        let post = await PostController.getAllPosts()
        PostController.displayAllPosts(post)
    }

    static async likePost(event){
        let post = await PostController.getPost(event.target.dataset.id)
        post.echo()
        await Adapter.updatePost(post)
        
        PostController.displayReplies(await post.getReplies())
        // event.target.parentNode.children[2].innerText = post.likes
        document.querySelectorAll(".postLikes" + post.id).forEach(echoes => {echoes.innerText = post.echoes})
        
        // PostController.redisplayAllPosts()
        // PostController.redisplayAllReplies(post)
    }

    static async redisplayAllReplies(post){
        PostController.clearDiv(PostController.repliesDiv())
        let replies = await post.getReplies()
        PostController.displayReplies(replies)
    
    }

    static displayAllPosts(posts) {
        PostController.clearDiv(PostController.postsDiv())
        posts.forEach(post => PostController.displayPost(post, PostController.postsDiv()))
    }

    static async displayRepliesOnClick(event) {
        let reply = document.getElementById('replies-create')
        let post = await PostController.getPost(event.currentTarget.dataset.id)
        document.querySelector(".main-replies").classList.remove("hide")
        let replies = await post.getReplies()
        reply.dataset.id = replies[0].id
        PostController.displayReplies(replies)
    }

    static displayReplies(replies) {
        // let replyDiv = document.getElementById('replies')
        PostController.clearDiv(PostController.repliesDiv())
            replies.forEach(reply => PostController.displayReply(reply))
    }

    static async getAllPosts() {
        let allPosts = []
        await Adapter.getAllPosts()
        .then(posts => posts.forEach(post => allPosts.push(new Post(post))))
        return allPosts
    }

    static async getPostsGeo(){
        let allPosts = [];
        await Adapter.getPostsUserLocation(await UserController.getCurrentUser())
        .then(posts => posts.forEach(post => allPosts.push(new Post(post))));
        return allPosts;
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
        PostController.displayPost(post, PostController.postsDiv())
        event.target.reset()
    }

     static async addReply(event) {
        event.preventDefault()
        let post = await PostController.getPost(event.target.dataset.id)
        // console.log(event.target.postReply.value)
        await post.reply(event.target.postReply.value)

        let replies = await post.getReplies()
        PostController.displayReplies(replies)
        event.target.reset()
     }

}