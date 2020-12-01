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

        postDiv.appendChild(postUser)
        postDiv.appendChild(postContent)
        postDiv.appendChild(postEchoes)
        
        return postDiv
    }

     async getReplies() {
        let replies = [this]
        await Adapter.getReplies(this.id)
        .then(comments => comments.forEach(comment => replies.push(new Post(comment))))
        return replies
    }
}