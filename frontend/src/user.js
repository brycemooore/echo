class User {

   constructor(user){
<<<<<<< HEAD
       this.id = user.id;
       this.username = user.username;
   }

   loggedIn(){
       if (localStorage.user_id == this.id) return true
=======
       this.id = user.id
       this.username = user.username
   }

   loggedIn(){
       if(localStorage.user_id == this.id) return true
>>>>>>> usertime
       else return false
   }

   store(){
       localStorage.user_id = this.id
       localStorage.username = this.username
   }

   logOut(){
       localStorage.clear()
<<<<<<< HEAD
   }

=======
       location.reload()
   }


>>>>>>> usertime
}