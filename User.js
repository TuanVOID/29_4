"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getRole", {
        get: function () {
            return this.role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setRole", {
        set: function (role) {
            this.role = role;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return (" user : ".concat(this.name, " ").concat(this.email, " ").concat(this.role));
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return "Admin";
        }
        if (this.role === 2) {
            return "Normal User";
        }
    };
    return User;
}());
exports.User = User;
