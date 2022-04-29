var Instructor = /** @class */ (function () {
    function Instructor(_a) {
        var name = _a.name, _b = _a.role, role = _b === void 0 ? "assistant" : _b;
        this.role = role;
        this.name = name;
    }
    Instructor.helloWorld = function () {
        console.log('hi there');
    };
    Instructor.canTeach = function (instructor) {
        return (instructor.role === "classroom");
    };
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    return Instructor;
}());
var juniorInstructor = new Instructor({ name: "Briant" });
var seniorInstructor = new Instructor({ name: "Alice", role: "classroom" });
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log("".concat(juniorInstructor.name, " can teach ").concat(Instructor.canTeach(juniorInstructor)));
console.log("".concat(seniorInstructor.name, " can teach ").concat(Instructor.canTeach(seniorInstructor)));
