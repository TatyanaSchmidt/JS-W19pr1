class Employee{
    constructor (firstName, surname, rate, days){
        this.firstName = firstName;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary(){
        return this.rate*this.days;
    }
}

let employee1 = new Employee ("Skopin", "Alex",500,10);
console.log(employee1.firstName);
console.log(employee1.surname);
console.log(employee1.rate);
console.log(employee1.days);
console.log(employee1.getSalary());