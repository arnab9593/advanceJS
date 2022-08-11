//import code start
import { navBar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navBar();
//import code end

let submit_btn = document.getElementById("submit");

submit_btn.onclick = (event) => {
    login(event);

}

class CheckLogin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

async function login(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let login_data = new CheckLogin(username, password)
    // console.log(login_data);

    let body1 = JSON.stringify(login_data);
    let loginurl = "https://masai-api-mocker.herokuapp.com/auth/login";
    let res = await fetch(loginurl, {
        method: "POST",
        body: body1,
        // mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        }

    });

    let data = await res.json();
    alert("User Login");
    window.location.href = "index.html"
    sessionStorage.setItem("username", login_data.username)
    console.log(login_data.username);
    console.log(data);
}



































































    // let login_api_link = 'https://masai-api-mocker.herokuapp.com/auth/login';

    // let res = await fetch(login_api_link, {
    //     method: "POST",

    //     body: body1,

    //     // mode: 'no-cors',

    //     headers: {
    //         'Content-Type': 'application/json',
    //     },

    // })

    // let data = await res.json()
    // // console.log(login_data.username);

    // console.log(data);
    // }


    // class CheckLogin {
    //     constructor(username, password) {
    //         this.username = username;
    //         this.password = password;
    //     }
    // }

    // let login = async (event) => {
    //     event.preventDefault();

    //     let username = document.getElementById("username").value;
    //     let password = document.getElementById("password").value;

    //     let loginData = new CheckLogin(username, password)
    //     console.log(loginData);

    //     // let loginData = {
    //     //     username: document.getElementById("username").value,
    //     //     password: document.getElementById("password").value,
    //     // }

    //     let body1 = JSON.stringify(loginData);
