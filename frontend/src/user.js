class User {

    constructor(user){
       this.id = user.id;
       this.username = user.username;
       this.lat = user.lat;
       this.lng = user.lng;
       
   }

   loggedIn(){
       if (localStorage.user_id == this.id) return true
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

//    async getLocation(){
//        let key = "655243cc5fbe2c7977fc84707856ccbe4c44b4bdbcf320fabedf8b14"
//        await fetch("https://api.ipdata.co?api-key=" + key)
//        .then(res => res.json())
//        .then(data => this.saveLocation(data))
//    }

   saveLocation(location){
       this.lat = location.latitude
       this.lng = location.longitude
   }

   logLocation(){
       console.log("lat " + this.lat)
       console.log("long " + this.long)
   }


}