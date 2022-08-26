
// "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&distancefromlocation=15"

// https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a1971909&app_key=96fa6f0af291a142d73cdc16a89d995c
let btn = document.getElementById('get_btn');
btn.addEventListener('click', mybtn);
async function mybtn() {
    let query = document.getElementById('query').value;
    let location_data = document.getElementById('location').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c6b2d7af43mshbdf7cd2e31a5658p19318cjsn91d8c38bc5a2',
            'X-RapidAPI-Host': 'job-search4.p.rapidapi.com'
        }
    };

    let res = await fetch(`https://job-search4.p.rapidapi.com/monster/search?query=${query}&state=${location_data}&page=1`, options);
    let data = await res.json();
    console.log("data: ", data);
    append_job_data(data.jobs);


}
let append_job_data = (data) => {
    let job_data = document.getElementById('jobs_data');
    data.forEach((el) => {
        let div = document.createElement('div');
        let innr_div = document.createElement('div');
        innr_div.setAttribute('class', 'inner_div');
        innr_div.innerHTML = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-share-nodes"></i>';
        let btn = document.createElement('button');
        btn.innerText = 'Apply';
        innr_div.append(btn);
        let description_div = document.createElement('div');
        description_div.className = 'description';
        let title = document.createElement('h3');
        title.innerText = el.title;
        let company = document.createElement('p');
        company.innerText = el.company_name;
        let country = document.createElement('p');
        country.innerText = el.country;
        let location = document.createElement('h4');
        location.innerHTML = el.location;
        location.style.color = '#5d4da8';
        let description = document.createElement('p');
        description.innerText = el.description;

        description_div.append(description);
        div.append(title, company, country, location, description_div, innr_div);
        job_data.append(div);

    });
};
