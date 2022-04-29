export class User {
    name:string;
    email:string;
    role:number;

    constructor(name:string, email:string, role: 1|2) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    get getName():string {
        return this.name;
    }
    get getEmail():string{
        return  this.email;
    }
    get getRole():number {
        return  this.role;
    }
    set setName(name:string) {
        this.name = name;
    }
    set setEmail(email:string) {
        this.email = email;
    }
    set setRole(role: 1|2) {
        this.role = role;
    }

    getInfo(){
        return (` user : ${this.name} ${this.email} ${this.role}`)
    }

    isAdmin(){
       if (this.role === 1) {
           return "Admin"
       }
       if (this.role === 2)  {
           return "Normal User"
       }
    }
}