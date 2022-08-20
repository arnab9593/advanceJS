//crud = create, read, update, delete
//get data form db.json(read)
//https://obscure-beach-89818.herokuapp.com/api/todo

//read

let getData = async () => {
    let response = await fetch("https://obscure-beach-89818.herokuapp.com/api/todo");
    let data = await response.json();
    console.log(data);
    displayData(data)
}
getData()

let displayData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({ title, id, status }) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = title;
        let p = document.createElement("p");
        p.innerText = status;
        let toggle_btn = document.createElement("button");
        toggle_btn.innerText = "Pending";
        toggle_btn.onclick = () => {
            toggleTodo(id)
        }
        let remove_btn = document.createElement("button");
        remove_btn.innerText = "Remove";
        remove_btn.onclick = () => {
            deleteTodo(id)
        }
        let update_btn = document.createElement("button");
        update_btn.innerText = "Update";
        update_btn.onclick = () => {
            updateTodo(id)
        }
        if (status == true) {
            toggle_btn.innerText = "Completed";
            p.innerText = "Task Completed"
            div.style.backgroundColor = "green"
        }
        else {
            // toggle_btn.innerText = "Completed";
            p.innerText = "Task Pending"
            div.style.backgroundColor = "red"
        }
        div.append(h3, p, toggle_btn, remove_btn, update_btn);
        container.append(div)
    })
}

//create code

let addTodo = async () => {
    let addTask = document.getElementById("todo").value;
    let Formdata = {
        title: addTask,
        status: false,
        id: Date.now(),
    };
    let response = await fetch("https://obscure-beach-89818.herokuapp.com/api/todo", {
        method: "POST",
        body: JSON.stringify(Formdata),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let data = await response.json()
    // console.log(data);
    getData();
}
document.getElementById("add_todo").addEventListener("click", addTodo)

// toggle task code

let toggleTodo = async (id) => {
    let todo = await fetch(`https://obscure-beach-89818.herokuapp.com/api/todo/${id}`);
    todo = await todo.json();
    let todoStatus = { status: !todo.status };
    let response = await fetch(`https://obscure-beach-89818.herokuapp.com/api/todo/${id}`, {
        method: "PATCH",
        body: JSON.stringify(todoStatus),
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json()
    // console.log(data);
    getData();

}

//remove task

let deleteTodo = async (id) => {
    let response = await fetch(`https://obscure-beach-89818.herokuapp.com/api/todo/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json()
    console.log(data);
    getData();
}

//completed task

let completedTask = async () => {
    let = response = await fetch("https://obscure-beach-89818.herokuapp.com/api/todo");
    let data = await response.json();
    let taskDone = data.filter((ele) => {
        return ele.status == true;
    })
    displayData(taskDone);
}
let addTocomplTask = document.getElementById("completedTask");
addTocomplTask.addEventListener("click", completedTask);

let showAllTask = document.getElementById("allTask");
showAllTask.addEventListener("click", getData);

//update task

let updateTodo = async (id) => {
    let updateTodoname = prompt("Enter the updated task name");
    if (updateTodoname !== "") {
        let todoData = {
            title: updateTodoname,
        }
        let response = await fetch(`https://obscure-beach-89818.herokuapp.com/api/todo/${id}`, {
            method: "PATCH",
            body: JSON.stringify(todoData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();
        getData();
        console.log(data);
    }

}

let filter = async () => {
    let value = document.getElementById("change").value;
    let res = await fetch(`https://obscure-beach-89818.herokuapp.com/api/todo?status=${value}`)
    
    res = await res.json();
    console.log(res);
    displayData(res)
} 