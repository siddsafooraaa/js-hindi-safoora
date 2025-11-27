const mySym=Symbol("key")
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
JsUser.email = "hitesh@chatgpt.com"
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);
JsUser.greeting=function(){
    console.log("helllo")
}
JsUser.greeting2=function(){
    console.log(`hello,${this.name}`)
}
JsUser.greeting();
JsUser.greeting2();
