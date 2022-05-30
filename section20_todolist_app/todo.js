alert("Hey ya!")
let say = prompt("What would you like to do?");
const todos = ['Collect Chicken Egg', 'Clean Your Car'];
while (say !== 'quit' && say !== 'q') {
    if (say === 'new') {
        const say1 = prompt("What would you like to add?");
        todos.push(say1)
    }
    else if (say === 'list') {
        console.log("*******************************")
        for (let t of todos) {
            console.log(t);
        }
        console.log("*******************************")
    }
    else if (say === 'delete') {
        let say2 = prompt("What would you like to delete?");
        for (let t = 0; t < todos.length; t++) {
            if (todos[t] === say2) {
                todos.splice(t, 1);
            }

        }
    }
    say = prompt("What would you like to do?");

}
console.log("Quit the App")