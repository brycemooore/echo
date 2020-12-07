document.addEventListener("DOMContentLoaded", init)


function init(){
    Page.randomizePost();
    UserController.init();
    PostController.init();
}

class Page{

    static showEveryThing(){
        let page = document.querySelector('.container');
        page.classList.remove('hide')
    }

    static hide(item){
        item.classList.add('hide');
    }

    static randomizePost(){
        let items = ["What's on your mind?", "How ya feelin?", "Tell a secret :)", "What are you grateful for?", "Go off", "*inserts rant here*"
        let caption = document.getElementById('post-caption');
        caption.innerText = items[Math.floor(Math.random() * items.length)]
    }
}
