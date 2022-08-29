
// "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&distancefromlocation=15"

// https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a1971909&app_key=96fa6f0af291a142d73cdc16a89d995c

import left_side_bar from './components/fetch.js';
let x = document.getElementById('items');
x.innerHTML = left_side_bar();
// console.log("x: ", x);

import navbar from "../../components/navbar.js";
document.getElementById("aak_navbar").innerHTML = navbar();

import footter from '../../fottercomponents/fotter.js';
let aakh_bash = document.getElementById("aak_footter");
aakh_bash.innerHTML = footter();
console.log(aakh_bash);





let url = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1a5dddf5&app_key=175268e3a1ef65ec57950e91d43570a8`;
async function getData() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    append_Data(data.results);

}
getData();

let append_Data = (data) => {
    data.forEach(el => {
        // let contain=document.createElement("div");
        let divBox = document.createElement("div");
        divBox.setAttribute("class", "jobsDa_ta");

        let posted = document.createElement("div");

        let title = document.createElement("h3");
        title.innerText = el.title;

        let creat = document.createElement("p");
        creat.innerText = el.created;

        let companyName = document.createElement("h4");
        companyName.innerText = el.company.display_name;

        let category = document.createElement("h4");
        category.innerText = el.category.label;

        let location = document.createElement("h5");
        location.innerText = el.location.area[1];

        let minSalary = document.createElement("p");
        minSalary.innerText = el.salary_max;

        let desc = document.createElement("p");
        desc.innerText = el.description;


        console.log(title, companyName, location, category, minSalary, creat);

        divBox.append(title, companyName, location, category, desc);

        posted.append(creat, minSalary);


        let container = document.getElementById("jobs_data");
        container.append(divBox, posted);
    });
};

const myFunc = (element) => {
    console.log(element, 'received');
    if (element.querySelector('.subOption').style.display == "none")
        element.querySelector('.subOption').style.display = "block";

    else element.querySelector('.subOption').style.display = "none";

};

const slidDown = document.querySelectorAll('.outer');

slidDown.forEach(element => {
    element.addEventListener("click", () => myFunc(element));
});

