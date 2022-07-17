let forBookLS = JSON.parse(localStorage.getItem("forBook")) || [];
display(forBookLS)

function display(data) {
    let container = document.getElementById("hotel_details");

    let mainDiv = document.createElement("div");
    let divBox1 = document.createElement("div");
    let divBox2 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = data.Images.one
    divBox1.append(img1)

    let img2 = document.createElement("img");
    img2.src = data.Images.two
    divBox2.append(img2);

    mainDiv.append(divBox1, divBox2)

    let h1Tag = document.createElement("h1");
    h1Tag.innerText = data.Title

    let pTag = document.createElement("p");
    pTag.innerText = `Amount:- ${data.Price}`;
    container.append(mainDiv, h1Tag, pTag)
}

document.getElementById("book").addEventListener("click", myDis);

class BookData {
    constructor(name, num, cin, cout) {
        this.Name = name,
            this.Number = num,
            this.CheckIn = cin;
        this.CheckOut - cout
    }
}

function myDis() {
    let name = document.getElementById("user_name").value;
    let num = document.getElementById("user_number").value;
    let cin = document.getElementById("check_in").value;
    let cout = document.getElementById("check_out").value;
    if (name ==""||num==""||cin==""||cout=="") {
        alert("Please Fill all Details")
    } else {
        let book = new BookData(name, num, cin, cout);

        setTimeout(()=>{
            alert(`${name} Booking Successfully!`)
            localStorage.setItem("forBook", JSON.stringify(book))
        },5000)
    }

}