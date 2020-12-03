document.addEventListener("DOMContentLoaded", init)


function init(){
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
}
