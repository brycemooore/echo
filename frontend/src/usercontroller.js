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
        let user = new Object(); 
        let key = "655243cc5fbe2c7977fc84707856ccbe4c44b4bdbcf320fabedf8b14"
       await fetch("https://api.ipdata.co?api-key=" + key)
       .then(res => res.json())
       .then(data => {
           user.lat = data.latitude
           user.lng = data.longitude
       })
        user.username = event.target.userName.value;
        await Adapter.addUser(user).then(serverUser => newUser = new User(serverUser));
        console.log(newUser);
        newUser.store();
        location.reload()
    }

}