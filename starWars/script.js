async function main() {
  let query = document.querySelector("#Search").value;
  let data = await getData(query);
  append(data.results);
  console.log(data);
}

async function getData(query) {
  let url = `https://swapi.dev/api/people/?search=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  return data;
  //console.log(data)
}


function append(data) {
    document.querySelector('#content').style.display = "block"
  data.forEach(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("h3");
    name.innerText = el.name;

    let DOB = document.createElement("p");
    DOB.innerText = el.birth_year;

    let male = document.createElement("p");
    male.innerText = el.gender;
   

    div.append(name, DOB,male);
    div.addEventListener("click", function () {
        details(el.name);
      });

    document.querySelector("#content").append(div);
    
  });
  

}

function details(query) {
    document.querySelector("#head").style.display = "none";
    document.querySelector("#content").style.display = "none";
    document.querySelector("#end").style.display = "block";
    async function getData(query) {
        let url = `https://swapi.dev/api/people/?search=${query}`;
        let res = await fetch(url);
        let data = await res.json();
        // return data;
        console.log(data)
        append(data.results)
      }
      getData(query)


      function append(data){
        console.log(data)
        console.log(data[0].name)
        document.querySelector("#end>h1").innerText = `${data[0].name}`
        document.querySelector("#firstBox #birth_year").innerText = `Birth Year: ${data[0].birth_year}`
        document.querySelector("#firstBox #Gender").innerText = `Gender: ${data[0].gender}`
        document.querySelector("#firstBox #Height").innerText = `Height: ${data[0].height}`
     
        document.querySelector("#secondBox #eye_color").innerText = `Eye Color: ${data[0].eye_color}`
        document.querySelector("#secondBox  #mass").innerText = `Mass: ${data[0].mass}`
        document.querySelector("#secondBox  #hair_color").innerText = `Hair Color: ${data[0].hair_color}`
     
      }


      document.querySelector("#goBack").addEventListener("click",goback)
}


function goback(){
  document.querySelector("#end").style.display = "none";
  document.querySelector("#head").style.display ="block";
  window.location.reload()
}




// debounce


let id;

  function debounce(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      func();
    }, delay);
  }


