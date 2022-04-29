import {Employee} from "./Employ";
class EmployeeManager {
    Employees = [];

    constructor() {
    }

    get getAll() {
        return this.Employees;
    }

    delEmploy(a:Employee){
        for (let i = 0; i < this.Employees.length; i++) {
            if (this.Employees[i] === a) {
                this.Employees.splice(i,1)
            }
        }
    }

    set add(a:Employee){
        this.Employees.push(a);
    }

}

let a = new Employee("Tuan", "Manh","1986,04,08","Ha noi"," IT")
let b = new Employee("huy","tran","1990,1,1","ha noi", "that nghiep")
let c = new Employee("duy","ngo","2000,1,1","ha noi", "that nghiep")
let d = new Employee("abc","tran","1990,1,1","ha noi", "that nghiep")

let EmployManager = new EmployeeManager();
EmployManager.add = a;
EmployManager.add = b;
EmployManager.add = c;
EmployManager.add = d;
// console.log(EmployManager.getAll);

EmployManager.delEmploy(a)
console.log(EmployManager.getAll)


// console.log(a)
// console.log(b)
