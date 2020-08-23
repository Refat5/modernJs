//object literals 

let user ={
    name:'refat',
    age:23,
    email:'refat34@gmail.com',
    child:['kobir','iyasin'],
//array function
    login:function(){
        console.log('thee user login');
    },
    logout:function(){
        console.log('the user is logOut');
    },
//regular function
    logChild() {

        // console.log(this.child);

        console.log('my child name is:');
        this.child.forEach(name =>{
            console.log(name);

        })

        console.log(this);
    }
};


// console.log(user);
// user.age=43;
// console.log(user.age);

// user['name']='shefat';
// console.log(user['name']);


// console.log(user['child']);

// console.log(typeof user);

//object mathod 

// user.login();
// user.logout();


user.logChild();
console.log(this);