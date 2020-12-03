class User {

   constructor(user){
       this.id = user.id
       this.username = user.username
   }

   loggedIn(){
       if(localStorage.user_id == this.id) return true
       else return false
   }

   store(){
       localStorage.user_id = this.id
       localStorage.username = this.username
   }

   logOut(){
       localStorage.clear()
       location.reload()
   }


}