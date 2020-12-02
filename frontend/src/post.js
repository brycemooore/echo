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
       postDiv.classList.add('content');
       postDiv.dataset.id = this.id

       let dataDiv = document.createElement('div');
       dataDiv.classList.add("summary");

       let postUser = document.createElement("a")
       postUser.classList.add('user');
            postUser.append(this.user.username)

       let postContent = document.createElement("div")
            postContent.append(this.content)
            postContent.classList.add("extra");
            postContent.classList.add("text");

        let metaDiv = document.createElement('div')
        metaDiv.classList.add("meta");

        let icon = document.createElement('i');
        icon.classList.add("icon")
        icon.classList.add("like")
        icon.dataset.id = this.id;

       let postEchoes = document.createElement("a")
            postEchoes.append(this.echoes)
            postEchoes.classList.add("postLikes" + this.id)
            postEchoes.classList.add("like")

            postEchoes.appendChild(icon);



        // let postLike = document.createElement('button')
        //     postLike.dataset.id = this.id

            dataDiv.appendChild(postUser);
            postDiv.appendChild(dataDiv);
            metaDiv.appendChild(postEchoes)
            // metaDiv.appendChild(postLike);
            postDiv.appendChild(postContent);
            postDiv.appendChild(metaDiv);

        // postDiv.appendChild(postUser)
        // postDiv.appendChild(postContent)
        // postDiv.appendChild(postEchoes)
        // postDiv.appendChild(postLike)
        
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