import left_side_bar from "../PAnkajRai/components/append&fetch.js";
document.getElementById("items").innerHTML = left_side_bar();

import navbar from "../../components/navbar.js";
document.getElementById("corona_navbar").innerHTML = navbar();

import footter from "../../fottercomponents/fotter.js";
document.getElementById("pankaj_footer").innerHTML = footter();
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '68d18bddd5mshe233c41731fe65fp1efedcjsne72a9f4fe05f'
        ,
        'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    body: '{"search_terms":"manager","location":"121006","page":"1"}'
};
async function get_linkedin_data() {
    let res = await fetch('https://linkedin-jobs-search.p.rapidapi.com/', options);
    let data = await res.json();
    console.log("data: ", data);
    append_linkedin_Data(data);
}



get_linkedin_data();
let append_linkedin_Data = (data) => {

    data.forEach(el => {

        let linkedin_job_data = document.createElement("div");


        let title = document.createElement("h3");
        title.innerText = el.job_title;

        let location = document.createElement("p");
        location.innerText = el.job_location;

        let company_cleaned = document.createElement("h4");
        company_cleaned.innerText = el.linkedin_company_url_cleaned;

        let company_name = document.createElement("h4");
        company_name.innerText = el.company_name;

        let posted_date = document.createElement("h5");
        posted_date.innerText = el.posted_date;

        let normal_company_name = document.createElement("h4");
        normal_company_name.innerText = el.normalized_company_name;

        let append_posted_date = document.createElement("div");
        append_posted_date.setAttribute("id", "postedDate");



        linkedin_job_data.append(title, location, company_name, company_cleaned, normal_company_name);
        append_posted_date.append(posted_date);
        let linkedin_job_datas = document.getElementById("linkedin_job_data");
        linkedin_job_datas.append(linkedin_job_data, append_posted_date);
    });
};
