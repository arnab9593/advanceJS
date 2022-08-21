
let getData = async () => {
    let res = await fetch("https://tranquil-reef-65368.herokuapp.com/api/books");
    let data = await res.json();
    // console.log(data);
}

getData()


let addBooks = async () => {
    let image = document.getElementById("image").value;
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let price = +document.getElementById("price").value;

    let formData = {
        image: image,
        name: bookName,
        author: authorName,
        price: price,
        id: Date.now(),
    };

    let res = await fetch("https://tranquil-reef-65368.herokuapp.com/api/books", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let data = await res.json();
    getData();
    console.log(data);

}

document.getElementById("submit").addEventListener("click", addBooks);

let myFunction = () => {
    window.location = "showbooks.html"
}

document.getElementById("showAllbooks").addEventListener("click", myFunction);