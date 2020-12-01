class Post {
    
    constructor(post){
        this.user = {
            "id": post.user.id, 
            "username": post.user.username
        } 
        this.id = post.id
        this.content = post.content
        this.echoes = post.echoes 
        this.created_at = post.created_at
    }

    echo(){
        this.echoes += 1
    }

    createPostDiv() {
       let postDiv = document.createElement("div")
       postDiv.dataset.id = this.id

       let postUser = document.createElement("h3")
            postUser.append(this.user.username)

       let postContent = document.createElement("p")
            postContent.append(this.content)

       let postEchoes = document.createElement("p")
            postEchoes.append(this.echoes)

        let postLike = document.createElement('button')
            postLike.dataset.id = this.id

        postDiv.appendChild(postUser)
        postDiv.appendChild(postContent)
        postDiv.appendChild(postEchoes)
        postDiv.appendChild(postLike)
        
        return postDiv
    }

     async getReplies() {
        let replies = [this]
        await Adapter.getReplies(this.id)
        .then(comments => comments.forEach(comment => replies.push(new Post(comment))))
        return replies
    }

    async reply(content) {
        let postObj = new Object()
        postObj.content = content
        postObj.user_id = localStorage.user_id
        postObj.parent_post_id = this.id

        let reply 
        await Adapter.addPost(postObj).then(serverPost => reply = new Post(serverPost))
        return reply
    }
}