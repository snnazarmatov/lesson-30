/* let user = {
    name: 'user',
    // sayHi: function () {
    //     alert('hello');
    // }
    sayHi () {
        alert('hello');
    },
    myName () {
        alert(`my name is ${this.name}`)
    }  
}; */

// TODO: read about obj assign
/* let admin = Object.assign({},user)
admin.name = 'admin';

console.log("user", user);
console.log("admin", admin);


user.myName();
admin.myName();
// admin.myName(); */

/* let admin = user;
user = null;

console.log(admin);

admin.myName(); */


/* let user = {name: 'user'};
let user2 = {name: 'user'};
let admin = {name: 'admin'};

function myName() {
    alert(`my name is ${this.name}`)
}

user.f = myName;
admin.f = myName;

user.f();
admin.f(); */


/* function User(name, age) { // 'test1
    // this = {}
    this.name = name;
    this.age = age;
    // return this
}

let user = new User('test1', 10) 
let user1 = new User('test2', 17);
let user2 = new User('test3', 20); 

console.log(user);
console.log(user1);
console.log(user2); */


function User(name, age) {
    this.name = name;
    this.age = age;

    this.renderObject = function() {
        let div = document.createElement('div');
        div.style.textAlign = 'center';
        let h3 = document.createElement('h3');
        h3.append(this.name);
        let p = document.createElement('p');
        p.append(this.age);

        div.append(h3);
        div.append(p);

        document.body.append(div);
    }
}

let data = [
    {
        name: 'test1',
        age: '17'
    },
    {
        name: 'test2',
        age: '22'
    },
    {
        name: 'test3',
        age: '12'
    }
]

let array = [];
let user;

for (let i = 0; i < data.length; i++) {
    user = new User(data[i].name, data[i].age);
    user.renderObject();
}

console.log(array);