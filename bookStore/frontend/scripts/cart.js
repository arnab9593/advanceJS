
// let data = JSON.parse(localStorage.getItem("books"));
// let arr = JSON.parse(localStorage.getItem("cart_items")) || [];

// let showBooks = (ele) => {

//     let container = document.getElementById("container");
//     container.innerHTML = null;

//     // let photo = document.createElement("img");
//     // photo.src = ele.image;

//     // let name = document.createElement("p");
//     // name.innerText = ele.name;

//     let photo = ele.image;
//     let name = ele.name;

//     let products = new bookObj(photo, name);
//     arr.push(products)

//     // let div = document.createElement("div");
//     // div.append(photo,name);
//     // container.append(div)

//     // arr.push(photo, name)
//     localStorage.setItem("cart_items", JSON.stringify(arr));



// }
// function bookObj(p, n) {
//     this.price = p;
//     this.name = n;
// }
// showBooks(data);
// console.log(arr);

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


let getData = async () => {
    let res = await fetch("https://tranquil-reef-65368.herokuapp.com/api/books?status=true");
    let data = await res.json();
    console.log(data);
    displayData(data);
}

getData();

let cartTotal = 0;
let displayData = (data) => {

    let container = document.getElementById("container");
    container.innerHTML = null;
    cartTotal = 0;
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

        let removebtn = document.createElement("button");
        removebtn.innerText = "Remove";
        removebtn.addEventListener("click", function () {
            removeFunction(id)
        });

        cartTotal += price;

        card.append(photo, bookname, authorname, bookprice, removebtn);
        container.append(card)
        document.getElementById("cartTotalAmount").innerHTML = "Total price = Rs. " + cartTotal;
    });

}

let removeFunction = async (id) => {

    let res = await fetch(`https://tranquil-reef-65368.herokuapp.com/api/books/${id}`);
    let data = await res.json();
    if (data.status == true) {
        data.status = false
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
    location.reload()
    getData();
    console.log(newdata);
}