let userLS = JSON.parse(localStorage.getItem("user")) || [];
document.getElementById("sign_up").addEventListener("click", myfunction);

class SingUp {
    constructor(n, e, p) {
        this.Name = n
        this.Email = e
        this.Password = p
    }
}

function myfunction(event) {
    event.preventDefault(event);
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let obj = new SingUp(name, email, password);
    let isTrue = false;


    for (let i = 0; i < userLS.length; i++) {
        if (userLS[i].Email == obj.Email) {
            isTrue = true
        }
    }

    if (isTrue) {
        alert('Email is already exist, Please try another email Id');  
    }else{
        alert('Accoutn create succefully!')
        userLS.push(obj)
        localStorage.setItem("user", JSON.stringify(userLS))
        window.location.href = "login.html"
    }

}