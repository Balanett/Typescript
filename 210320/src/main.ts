// 1/1 To Do

const date: Date = new Date()

interface IToDo {
    name: string;
    priority: "low" | "medium" | "high";
    dueDate: any;
    isDone: boolean;
}
class ToDo implements IToDo {
    name: string;
    priority: "low" | "medium" | "high";
    dueDate: any;
    isDone: boolean;

    constructor(name: string, priority: "low" | "medium" | "high", dueDate: any, isDone: boolean) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isDone = isDone
    }

    toString (name: string, priority: "low" | "medium" | "high", dueDate: Date, isDone: boolean):object {
        return ToDo;
    }
}


let ToDo1 = new ToDo("make cofee", "low", "2021-03-20", true );
console.log(ToDo1)
