
let arr = [{ id: 1, name: "john", age: "18", profession: "developer" },
{ id: 2, name: "jack", age: "20", profession: "developer" },
{ id: 3, name: "karen", age: "19", profession: "admin" }];


const profession = document.getElementById("profession1");
profession.addEventListener("click", func1);

function func1() {
    const menu = document.getElementById("menu");
    menu.style.display = "block";
}


function hide1() {
    const menu = document.getElementById("menu");
    menu.style.display = "none";

    const ele = document.getElementById("developer");
    let ele1 = document.querySelector("#profession1 > .text");
    ele1.innerText = ele.innerText;


}
function hide2() {
    const menu = document.getElementById("menu");
    menu.style.display = "none";

    const ele = document.getElementById("admin");
    let ele1 = document.querySelector("#profession1 > .text");
    ele1.innerText = ele.innerText;


}

var updatedId = 4;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function smallizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
function addUser() {

    const members = document.getElementById("members");

    let newName = capitalizeFirstLetter(document.getElementById("new-name").value.trim());
    let newProfession = capitalizeFirstLetter(document.getElementById("new-profession").value.trim());
    let newAge = document.getElementById("new-age").value.trim();
    if (newName && newProfession && newAge) {
        document.getElementById("new-name").value = "";
        document.getElementById("new-profession").value = "";
        document.getElementById("new-age").value = "";

        let divIndividual = document.createElement("div");
        divIndividual.className = "individual";
        divIndividual.id = updatedId;

        let div1 = document.createElement("div");
        div1.id = "id";
        div1.innerText = updatedId;

        divIndividual.appendChild(div1);

        let div2 = document.createElement("div");
        div2.id = "name";
        div2.innerText = "Name : ";
        let span1 = document.createElement("span");
        span1.innerText = newName;
        div2.appendChild(span1);

        divIndividual.appendChild(div2);

        let div3 = document.createElement("div");
        div3.id = "profession";
        div3.innerText = "Profession : ";
        let span2 = document.createElement("span");
        span2.innerText = newProfession;
        div3.appendChild(span2);
        divIndividual.appendChild(div3);


        let div4 = document.createElement("div");
        div4.id = "age";
        div4.innerText = "Age : ";
        let spanAge = document.createElement("span");
        spanAge.innerText = newAge;
        div4.appendChild(spanAge);
        divIndividual.appendChild(div4);
        members.appendChild(divIndividual);


        let obj = {
            id: updatedId,
            name: smallizeFirstLetter(newName),
            age: newAge,
            profession: smallizeFirstLetter(newProfession)
        }
        arr.push(obj);
        updatedId++;
    }
    console.log(arr);
}

function filterEle() {
    let ele = document.querySelector("#profession1 > .text");
    let str = ele.innerHTML;
    if(str == "Profession") {
        let pop = document.getElementById("pop-up");
        pop.style.display = "block";
    }
    else {
        arr.filter(function(ele){
            console.log(ele.profession);
            if (ele.profession != smallizeFirstLetter(str)) {
                let remEle = document.getElementById(ele.id);
                remEle.remove();
            }
        });
    }

}

function popUp(){
    let pop = document.getElementById("pop-up");
        pop.style.display = "none";
}
