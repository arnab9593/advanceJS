

//get or diaplay

let getData = async () => {
    let res = await fetch("http://127.0.0.1:3000/api/users");
    let data = await res.json();
    console.log(data);
    appendData(data)
}
getData()

let appendData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({ name, batch, course, age, mobile, evScore, id }) => {
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.innerText = `Name : ${name}`;
        h3.setAttribute("id", "userName");
        let p1 = document.createElement("p");
        p1.innerText = `Batch : ${batch}`;
        p1.setAttribute("id", "userBatch");
        let p2 = document.createElement("p");
        p2.innerText = `Course : ${course}`;
        p2.setAttribute("id", "userCourse");
        let p3 = document.createElement("p");
        p3.innerText = `Age : ${age}`;
        p3.setAttribute("id", "userAge");
        let p4 = document.createElement("p");
        p4.innerText = `Mobile : ${mobile}`;
        p4.setAttribute("id", "userMobile");
        let p5 = document.createElement("p");
        p5.innerText = `Score : ${evScore}`;
        p5.setAttribute("id", "userScore");
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove"
        removeBtn.onclick = () => {
            removeUser(id)
        }
        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update"
        updateBtn.onclick = () => {
            // updateUser(id)
            adduserDiv(id)
        }

        div.append(h3, p1, p2, p3, p4, p5, removeBtn, updateBtn);
        container.append(div)

    })
}

//add user

let addUser = async () => {
    let name = document.getElementById("name").value;
    let batch = document.getElementById("batch").value;
    let course = document.getElementById("selCourse").value;
    let age = document.getElementById("age").value;
    let number = document.getElementById("mob").value;
    let marks = document.getElementById("score").value;
    let formData = {
        name: name,
        batch: batch,
        course: course,
        age: age,
        mobile: number,
        evScore: marks,
        id: Date.now(),
    };
    let response = await fetch("http://127.0.0.1:3000/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }

    });
    let data = await response.json();
    console.log(data);
    getData();
}
document.getElementById("submit").addEventListener("click", addUser);

//remove user

let removeUser = async (id) => {
    let response = await fetch(`http://127.0.0.1:3000/api/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    let data = await response.json();
    // console.log(data);
    getData();
}

//update user 

let updateUser = async (id) => {
    document.getElementById("updatedUserForm").style.display = "block"
    let name = document.getElementById("up_name").value;
    let batch = document.getElementById("up_batch").value;
    let course = document.getElementById("up_selCourse").value;
    let age = document.getElementById("up_age").value;
    let number = document.getElementById("up_mob").value;
    let marks = document.getElementById("up_score").value;
    let formData = {
        name: name,
        batch: batch,
        course: course,
        age: age,
        mobile: number,
        evScore: marks
    };
    let response = await fetch(`http://127.0.0.1:3000/api/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }

    });
    let data = await response.json();
    console.log(data);
    getData();
}

let adduserDiv = (id) => {
    document.getElementById("updatedUserForm").style.display = "block";
    document.getElementById("up_submit").addEventListener("click", function () {
        updateUser(id)
    });
}

//sorting

let sortLH = async () => {
    let response = await fetch(`http://127.0.0.1:3000/api/users/?_sort=age&_order=asc`);
    let data = await response.json();
    // console.log(data);
    appendData(data)
}

let sortHL = async () => {
    let response = await fetch(`http://127.0.0.1:3000/api/users/?_sort=age&_order=desc`);
    let data = await response.json();
    // console.log(data);
    appendData(data)
}


//filtering

let showCourse = async () => {
    let value = document.getElementById("select_Course").value;
    console.log(value);
    let response = await fetch(`http://127.0.0.1:3000/api/users/?title=${value}`)
    let data = await response.json();
    let showOnlycourse = data.filter((ele) => {
        return ele.course = value;
    })
    appendData(showOnlycourse)
}


//paggination 

let pageNo = 1;
let item = 0;
let nextPage = async () => {
    pageNo++;
    // item = item + 5;
    let res = await fetch(`http://127.0.0.1:3000/api/users/?_page=${pageNo}&_limit=5`);
    let data = await res.json();
    console.log(data);
    let length = data.length;
    if (length == 0) {
        pageNo--;
        alert("No Data")
    }
    else {
        item = item + length;
        appendData(data)
    }
    console.log(item, length, "next");


}

let prevPage = async () => {
    pageNo--;
    let res = await fetch(`http://127.0.0.1:3000/api/users/?_page=${pageNo}&_limit=5`);
    let data = await res.json();
    console.log(data);
    let length = data.length;
    if (item == 0) {
        length = length - item;
        item = 5;
        appendData(data)
    }
    else {
        item = item - length;
        appendData(data)

    }
    console.log(item, length, "prev");

}