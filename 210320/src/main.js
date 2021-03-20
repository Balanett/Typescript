"use strict";
// 1/1 To Do
var date = new Date();
var ToDo = /** @class */ (function () {
    function ToDo(name, priority, dueDate, isDone) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }
    ToDo.prototype.toString = function (name, priority, dueDate, isDone) {
        return ToDo;
    };
    return ToDo;
}());
var ToDo1 = new ToDo("make cofee", "low", "2021-03-20", true);
console.log(ToDo1);
