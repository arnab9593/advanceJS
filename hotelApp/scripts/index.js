let loginLS = localStorage.getItem("login");
document.getElementById("query").addEventListener("input", enter)

if (!Boolean(loginLS)) {
    alert("Log In to continue!");
    window.location.href = "login.html"
}

let data;
async function enter() {
    let query = document.getElementById("query").value;
    data = await getData(query)
    append(data)
    console.log(data);
}

async function getData(query) {
    const url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    return data.hotels
}
function append(data) {
    let container = document.getElementById("hotels_list");
    container.innerHTML = null;

    data.forEach(element => {
        let images = document.createElement("img");
        images.src = element.Images.one;

        let h3Tag = document.createElement("h3")
        h3Tag.innerHTML = element.Title;

        let p1Tag = document.createElement("p");
        p1Tag.innerHTML = `Price per room: Rs. ${element.Price}`;

        let p2Tag = document.createElement("p");
        p2Tag.innerHTML = `AC: ${element.Ac}`;

        let p3Tag = document.createElement("p");
        p3Tag.innerHTML = `Rating: ${element.Rating}`;

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.style.padding = "10px 20px";
        btn.setAttribute("class", "book");
        btn.addEventListener("click", function () {
            bookNow(element)
        })

        let card = document.createElement("div");
        card.append(images, h3Tag, p1Tag, p2Tag, p3Tag, btn);
        card.setAttribute("id", "hotel")

        container.append(card)
    });
}

function bookNow(element) {
    localStorage.setItem("forBook",JSON.stringify(element))
    window.location.href = "checkout.html";
}

function sortLTH() {
    data.sort((a, b) => {
        return a.Price - b.Price
    });
    append(data)
}

function sortHTL() {
    data.sort((a, b) => {
        return b.Price - a.Price
    })
    append(data)
}

function filterAC() {
    let filtered = data.filter((el) => {
        return el.Ac == true
    })
    append(filtered)
}

function filterNonAC() {
    let filtered = data.filter((el) => {
        return el.Ac == false
    })
    append(filtered)
}

