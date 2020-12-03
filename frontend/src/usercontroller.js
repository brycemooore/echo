class UserController{

    static async getUser(id){
        let returnUser;
        await Adapter.getUser(id)
        .then(user => returnUser = new User(user));
        return returnUser;
    }
    static async init(){
        let loginForm = document.querySelector('#login');
        loginForm.addEventListener('submit', UserController.addUser);
        if(window.localStorage.length != 0){
            let user = await UserController.getUser(localStorage.user_id);
            if(user.loggedIn()) {
                Page.hide(loginForm);
                Page.showEveryThing();
            }
        }
    }

    static async getUser(id){
        let returnUser;
        await Adapter.getUser(id).then(user => returnUser = new User(user))
        return returnUser;
    }

    static async addUser(event){
        event.preventDefault();
        let newUser;    
        console.log(event.target.userName.value);
        let user = new Object();
        user.username = event.target.userName.value;
        await Adapter.addUser(user).then(serverUser => newUser = new User(serverUser));
        newUser.store();
        location.reload()
    }

}