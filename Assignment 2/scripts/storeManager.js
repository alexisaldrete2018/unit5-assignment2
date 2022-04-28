function saveUser(user){
    let stringuedUser = JSON.stringify(user);
    localStorage.setItem("user",stringuedUser);
}