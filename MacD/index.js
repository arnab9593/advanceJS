let obj = {}
let checkboxes = document.getElementsByName("checkbox");
for (key of checkboxes) {
    key.addEventListener("click", function () {
        if (this.checked == true) {
            obj[this.value] = "1";
        }
        else {
            delete obj[this.value];
        }
    })
}

document.querySelector("#button").addEventListener("click", order);

async function order() {
    const selected_food = await process();

    append(selected_food)

}

async function process() {
    let time = Math.random() * 5 * 1000;
    document.querySelector("#time").innerHTML = `Your order will be ready in ${Math.floor(time / 1000)} seconds`;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(obj)
        }, time)
    })
}

function append(key) {
    document.getElementById("image").innerHTML = null;
    for (key in obj) {
        let orderid = Math.floor(Math.random()*100);
        document.querySelector("#time").innerHTML = "Your order is ready now"
        document.querySelector("#orderId").innerHTML = `Order Id ${orderid}`
        if (key == "sandwich") {
            let image = document.createElement("img");
            image.src = "https://media.istockphoto.com/photos/crispy-chicken-burger-picture-id539243164?k=20&m=539243164&s=612x612&w=0&h=_F6b3xG4BdTFjXaiE2-Z72qm0dsloQ7bSFLBHKh9iWU=";
            document.getElementById("image").append(image);

        }
        if (key == "apple") {
            let image = document.createElement("img");
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKrpu2CwmTZD_qL_NnL2RGuIvkh-ZEFgaLQ&usqp=CAU";
            document.getElementById("image").append(image)
        }
        if (key == "egg") {
            let image = document.createElement("img");
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKBAGUGdesGgD5MO50vMPAJtN8dyQ8kgHAw&usqp=CAU";
            document.getElementById("image").append(image)
        }
        if (key == "chicken") {
            let image = document.createElement("img");
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA85vfGetIv_qAM1rehl8iOsGsylgNPz8peA&usqp=CAU";
            document.getElementById("image").append(image)
        }
        if (key == "fish") {
            let image = document.createElement("img");
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApxkrfX5cwg-kwLD2RCz8wQNapNpt8yVdOA&usqp=CAU";
            document.getElementById("image").append(image)
        }
    }
}