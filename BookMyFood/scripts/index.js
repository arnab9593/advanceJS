
//https://www.themealdb.com/api/json/v1/1/search.php?s=chicken





//import code start
import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();
//import code end

//code to display username start
let displayUserName = sessionStorage.getItem("username") || null;
document.getElementById("showUserName").innerText = `Welcome ${displayUserName}`;
//code to display username end

async function getData() {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.meals);
    append(data.meals)
}
getData()

let append = (data) => {
    let container = document.getElementById("showFoods");
    data.forEach(ele => {
        let image = document.createElement("img");
        image.src = ele.strMealThumb;

        let name = document.createElement("h4");
        name.innerText = ele.strMeal

        let btn = document.createElement("button");
        btn.innerText = "Add to bucket"
        btn.addEventListener="click"

        let card = document.createElement("div");
        card.append(image, name, btn);
        container.append(card)
    })

}



// strMealThumb: strMeal