
//https://tranquil-reef-65368.herokuapp.com/api/books

let removebtn;
let updatebtn;
let addtocart;

let home = () => {
    window.location = "showbooks.html";
}
document.getElementById("home").addEventListener("click", home)

let myFunction = () => {
    window.location = "signup.html"
}
document.getElementById("signup").addEventListener("click", myFunction);

let loginFunction = () => {
    window.location = "login.html"
}

document.getElementById("login").addEventListener("click", loginFunction);

let cartFunction = () => {
    window.location = "cart.html"
}
document.getElementById("cart").addEventListener("click", cartFunction);

let logoutFunction = () => {
    sessionStorage.clear()
    location.reload()
}
document.getElementById("logout").addEventListener("click", logoutFunction);

let checkAdmin = sessionStorage.getItem("adminstatus")
console.log(checkAdmin);

let getData = async () => {
    let res = await fetch("https://tranquil-reef-65368.herokuapp.com/api/books");
    let data = await res.json();
    // console.log(data);
    displayData(data);
}

getData()

let displayData = (data) => {

    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({ image, name, author, price, id, status }) => {

        let card = document.createElement("div");
        let photo = document.createElement("img");
        photo.src = image;

        let bookname = document.createElement("h3");
        bookname.innerText = name;

        let authorname = document.createElement("h4");
        authorname.innerText = author;
        author

        let bookprice = document.createElement("p");
        bookprice.innerText = price;

        addtocart = document.createElement("button");
        addtocart.innerText = "Add to cart"
        addtocart.addEventListener("click", () => {
            addtoCartFunction(id)
        })

        removebtn = document.createElement("button");
        removebtn.innerText = "Remove"
        removebtn.onclick = () => {
            deleteBook(id)
        }
        if (!Boolean(checkAdmin)) {
            removebtn.style.display = "none"
        }

        updatebtn = document.createElement("button");
        updatebtn.innerText = "Update"
        updatebtn.onclick = () => {
            updateBookdetails(id)
        }
        if (!Boolean(checkAdmin)) {
            updatebtn.style.display = "none"
        }

        card.append(photo, bookname, authorname, bookprice, addtocart, removebtn, updatebtn);
        container.append(card)
    });

}


let deleteBook = async (id) => {

    let res = await fetch(`https://tranquil-reef-65368.herokuapp.com/api/books/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
    let data = await res.json()
    getData()
}

let updateBook = async (id) => {
    document.getElementById("updateForm").style.display = "block"
    let image = document.getElementById("update_image").value;
    let name = document.getElementById("update_bookName").value;
    let author = document.getElementById("update_authorName").value;
    let price = document.getElementById("update_price").value;

    let formData = {
        image: image,
        name: name,
        author: author,
        price: price,
    };
    let response = await fetch(`https://tranquil-reef-65368.herokuapp.com/api/books/${id}`, {
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
let updateBookdetails = (id) => {
    document.getElementById("updateForm").style.display = "block";
    document.getElementById("up_submit").addEventListener("click", function () {
        updateBook(id)
    });
}


// let booksArray = JSON.parse(localStorage.getItem("books")) || [];

let addtoCartFunction = async (id) => {

    let res = await fetch(`https://tranquil-reef-65368.herokuapp.com/api/books/${id}`);
    let data = await res.json();
    if (data.status == false) {
        data.status = true
    }
    let response = await fetch(`https://tranquil-reef-65368.herokuapp.com/api/books/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    let newdata = await response.json()
    // console.log(data);
    getData();
    console.log(newdata);
}


