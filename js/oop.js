class Student {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    // phương thức
    showInfo(){
        console.log(`Tên là: ${this.name} , tuổi là ${this.age}`);
    }
}
// tạo lớp đôi tượng
const student = new Student("Ha", 19);
console.log(student.name);
console.log(student.age);

student.showInfo();

// extends
class Mother{
    constructor(_name){
        this.name = _name;
    }
    colorEyes(){
        console.log("red");
    }
}
class Me extends Mother{
    colorSkin(){
        console.log("blue");
    }
}
const me = new Me("Ha");
console.log(me.name);
me.colorEyes();
me.colorSkin();

// kế thừa và ghi chồng lên code mẹ
class Person{
    constructor(_name){
        this.name = _name;
    }
    getName(){
        return this.name;
    }
}
class Monkey extends Person{
    getName(){
        return "Hello " + this.name;
    }
}
const monkey = new Monkey("Pango");
console.log(monkey.getName())

// super
class People {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    getInfo(){
        console.log(`Ten: ${this.name} - tuổi là ${this.age}`);
    }
}

class Banana extends People{
    constructor(_name, _age, _eat){
        // this.name = _name;
        // this.age = _age;
        super(_name, _age); // để thừa hưởng lại các giá trị ở code mẹ
        this.eat = _eat
    }
    getInfo(){
        super.getInfo();
        console.log(`Ăn: ${this.eat}`);
    }
}

const banana = new Banana("Pango", 3 , "chuối");
banana.getInfo();