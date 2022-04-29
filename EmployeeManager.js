"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employ_1 = require("./Employ");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.Employees = [];
    }
    Object.defineProperty(EmployeeManager.prototype, "getAll", {
        get: function () {
            return this.Employees;
        },
        enumerable: false,
        configurable: true
    });
    EmployeeManager.prototype.delEmploy = function (a) {
        for (var i = 0; i < this.Employees.length; i++) {
            if (this.Employees[i] === a) {
                this.Employees.splice(i, 1);
            }
        }
    };
    Object.defineProperty(EmployeeManager.prototype, "add", {
        set: function (a) {
            this.Employees.push(a);
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeManager;
}());
var a = new Employ_1.Employee("Tuan", "Manh", "1986,04,08", "Ha noi", " IT");
var b = new Employ_1.Employee("huy", "tran", "1990,1,1", "ha noi", "that nghiep");
var c = new Employ_1.Employee("duy", "ngo", "2000,1,1", "ha noi", "that nghiep");
var d = new Employ_1.Employee("abc", "tran", "1990,1,1", "ha noi", "that nghiep");
var EmployManager = new EmployeeManager();
EmployManager.add = a;
EmployManager.add = b;
EmployManager.add = c;
EmployManager.add = d;
// console.log(EmployManager.getAll);
EmployManager.delEmploy(a);
console.log(EmployManager.getAll);
// console.log(a)
// console.log(b)
