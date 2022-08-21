
let data = JSON.parse(localStorage.getItem("books"));
let arr = JSON.parse(localStorage.getItem("cart_items")) || [];

let showBooks = (ele) => {

    let container = document.getElementById("container");
    container.innerHTML = null;

    // let photo = document.createElement("img");
    // photo.src = ele.image;

    // let name = document.createElement("p");
    // name.innerText = ele.name;

    let photo = ele.image;
    let name = ele.name;

    let products = new bookObj(photo, name);
    arr.push(products)

    // let div = document.createElement("div");
    // div.append(photo,name);
    // container.append(div)

    // arr.push(photo, name)
    localStorage.setItem("cart_items", JSON.stringify(arr));



}
function bookObj(p, n) {
    this.price = p;
    this.name = n;
}
showBooks(data);
console.log(arr);