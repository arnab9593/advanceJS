
//import code start
import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();
//import code end

let datafromLS = JSON.parse(localStorage.getItem("myFood"));

console.log(datafromLS);
let showBucketFood = (datafromLS) => {

    let appendFood = document.getElementById("showFoods");
    appendFood.innerHTML = null;

    datafromLS.forEach(function (ele, index) {
        let image = document.createElement("img");
        image.src = ele.strMealThumb;

        let name = document.createElement("h4");
        name.innerText = ele.strMeal

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove"
        removeBtn.addEventListener("click", function () {
            removeItem(index)
        })

        let div = document.createElement("div");
        div.append(image, name, removeBtn);
        appendFood.append(div)
    });

}
showBucketFood(datafromLS);

let removeItem = (index) => {
    datafromLS.splice(index, 1)
    localStorage.setItem("myFood", JSON.stringify(datafromLS));
    // window.location.reload()
    showBucketFood(datafromLS);
}



let checkOut_btn = document.getElementById("checkout");
checkOut_btn.onclick = () => {
    checkOut()
}

class OrderFood {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

let checkOut = () => {

    let displayUserName = sessionStorage.getItem("username");
    if (!Boolean(displayUserName)) {
        alert("Login to continue");
        window.location.href = "../login.html"
    }

    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;

    if (name == "" || address == "") {
        alert("Fill all the details")
        name = document.getElementById("name").value = null;
        address = document.getElementById("address").value = null;
    }
    else {
        let purchase = new OrderFood(name, address);
        alert(`${name} order placed`);
        name = document.getElementById("name").value = null;
        address = document.getElementById("address").value = null;
    }

}

