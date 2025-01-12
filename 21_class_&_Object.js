//        <== class ==>
// Socho tumhare paas “Doll” ka ek blueprint hai.Is blueprint mein tum define karte ho ki doll ki aankhein kaise honi chahiye, uska rang kya hona chahiye, aur jab tum usse bhi hug karte ho toh wo kaise react karegi.

// <== Object ==>
// Ab tumne ek actual doll li, jiska rang pink hai, aur uski aankhein blue hain. Tumne ek specific doll kharida jo usi blueprint se bana hai.




class toy {
    constructor(car, bike, bus) {
        this.car = car;
        this.bike = bike;
        this.bus = bus;
    }

    touch() {
        console.log('Chal raha h ');
    }
}


const play= new toy("toyoto ", "Herohunda ", "bus")
console.log(play.car);
console.log(play.bike);
console.log(play.bus);

play.touch()



//    <==  constructor  ==>

class User {
    constructor(userName) {
        this.userName = userName;
    }
    logME() {
        console.log(` UserName is :- ${this.userName}`);
    }
}
class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        this.email = email;
        this.password = password;

    }

    addCourse() {
        console.log(`${this.userName} Add New course`);
    }
}
const student = new User("Coder")

const teachers = new Teacher("Nitesh ", "coder@gmail.com", 123455)
student.logME()


class signinUser {
    constructor(username) {
        this.username= username;
    }
//   static ka user krne pr ye sabke liye show nahi hoga ok na 
   static userId(){
        return Math.floor(Math.random() * 1000000)
    }
}

const enterUser=new signinUser("Nitesh")
console.log(enterUser.username);


