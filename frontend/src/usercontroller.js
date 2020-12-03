class UserController{

    static async getUser(id){
        let returnUser;
        await Adapter.getUser(id)
        .then(user => returnUser = new User(user));
        return returnUser;
    }
}