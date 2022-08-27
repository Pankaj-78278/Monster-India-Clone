import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

    async function mybtn() {
        // let query = document.getElementById('query').value;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'faf3ac47e7msh44c7eec04caec84p117e4ajsnc7151bee7075',
                'X-RapidAPI-Host': 'job-search4.p.rapidapi.com'
            }
        };
    
        let res = await fetch(`https://job-search4.p.rapidapi.com/monster/search?query=software&state=CA&page=1`, options);
        let data = await res.json();
        console.log("data: ", data);
        appendData(data.jobs);
    
    
    }
    mybtn();
    
    let appendData= (data)=>{
        data.forEach(el => {
            
            let div=document.createElement("div");
            
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
    
            div.append(title,companyName,location,category,desc)
    
            posted.append(creat,minSalary)
    
            // let container=document.
    
    
        });
    }
    