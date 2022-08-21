

let home = () => {
    window.location = "showbooks.html";
}
document.getElementById("home").addEventListener("click", home)

let myFunction = () => {
    window.location = "signup.html"
}
document.getElementById("signup").addEventListener("click", myFunction);

// let login = () => {
//     window.location = "login.html"
// }

// document.getElementById("login").addEventListener("click", login);

let cartFunction = () => {
    window.location = "cart.html"
}
document.getElementById("cart").addEventListener("click", cartFunction);

let logoutFunction = () => {
    sessionStorage.clear()
    location.reload()
}
document.getElementById("logout").addEventListener("click", logoutFunction);

let loginFunction = () => {

    console.log("hello");

    let login_data = {

        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    }

    let body1 = JSON.stringify(login_data);

    let login_api_link = 'https://masai-api-mocker.herokuapp.com/auth/login';

    fetch(login_api_link, {
        method: "POST",

        body: body1,

        // mode: 'no-cors',

        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);

            getMyProfile(response, login_data)
        })
        .catch((err) => {
            console.log(err);
        });
    // console.log(login_data.username);

}

//code to check a particular type of user

function getMyProfile({ token }, { username }) {

    console.log(token, username);

    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {

        // mode: 'no-cors',

        headers: {
            Authorization: `Bearer ${token}`,
        },

    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.username);
            if (res.username === 'aaa' && res.token == '47bce5c74f589f4867dbd57e9ca9f808') {
                alert("Admin Login");
                sessionStorage.setItem("adminstatus", true)
                window.location.href = "index.html"

            }
            else {
                alert("User Login");
                sessionStorage.setItem("normalUser", true)
                window.location.href = "showbooks.html"
                // sessionStorage.setItem("username", res.username)
            }
            console.log(res);
        })
        .catch((err) => {
            console.log(err.message);
        });

}

document.getElementById("login").addEventListener("click", loginFunction)