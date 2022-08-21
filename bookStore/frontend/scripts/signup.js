

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

let signupFunction = () => {
    let signup_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("mail").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
    };

    signup_data = JSON.stringify(signup_data)

    let signup_api_link = 'https://masai-api-mocker.herokuapp.com/auth/register';

    fetch(signup_api_link, {
        method: "POST",
        body: signup_data,

        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

    console.log(signup_data);


}

document.getElementById("signup").addEventListener("click", signupFunction)
