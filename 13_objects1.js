// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Amit",
    "full name": "Amit Singh", // can not be accessed by dot operator
    [mySym]: "mykey1",
    age: 18,
    location: "Prayagraj",
    email: "amit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// JsUser.email = "amit@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Amit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());