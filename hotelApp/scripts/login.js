let userLS = JSON.parse(localStorage.getItem("user")) || [];

document.getElementById("log_in").addEventListener("click",myFunction);
function myFunction(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let e = false;
    let p = false

    console.log(userLS)
    for(let i = 0;i<userLS.length;i++){
        if(userLS[i].Email==email){
            e = true
            if(userLS[i].Password==password){
                p = true
            }
        }
    }

    if(e==true&&p==true){
        alert("Login successful!")
        localStorage.setItem("login",true)
        window.location.href = "index.html"
    }else if(e==true){
        alert("Wrong credentials" )
    }else{
        alert("User doesn't exist, Sign Up")
        window.location.href = "signup.html"
    }

}
