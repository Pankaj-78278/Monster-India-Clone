import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let url=`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1a5dddf5&app_key=175268e3a1ef65ec57950e91d43570a8`;
async function getData(){
    let res=await fetch(url);
    let data=await res.json();
    // console.log(data);
    // appendData(data.results);

}
// getData();

let appendData= (data)=>{
    data.forEach(el => {
        // let contain=document.createElement("div");
        let divBox = document.createElement("div");
        divBox.setAttribute("class", "jobsDa_ta");
        
        let posted=document.createElement("div");

        let title= document.createElement("h3");
        title.innerText=el.title;

        let creat=document.createElement("p");
        creat.innerText=el.created

        let companyName=document.createElement("h4");
        companyName.innerText=el.company.display_name;

        let category=document.createElement("h4");
        category.innerText=el.category.label;

        let location=document.createElement("h5");
        location.innerText=el.location.area[1];

        let minSalary=document.createElement("p");
        minSalary.innerText=el.salary_max;

        let desc=document.createElement("p");
        desc.innerText=el.description;


        console.log(title,companyName,location,category,minSalary,creat);

        divBox.append(title,companyName,location,category,desc)

        posted.append(creat,minSalary)


        let container=document.getElementById("appending")
        container.append(divBox,posted);


    });
}

