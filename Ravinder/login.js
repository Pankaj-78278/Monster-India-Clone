import footter from "../fottercomponents/fotter.js";
document.getElementById("footte").innerHTML=footter();


import textData from "../footer.js";
console.log(textData);


const appendData = ()=>{
    const container = document.getElementById('about');

    textData.forEach(element => {
        const div = document.createElement('div');
        div.classList.add("my-class");

        const h2 = document.createElement('h2');
        h2.innerText=element.heading;

        div.append(h2); 
        let data = element.subTexts; 
        console.log(data);

        data.forEach(element => {

            const p = document.createElement('p');
            p.innerText = element.text;
            
            const anchor = document.createElement('a');
            anchor.href = element.link;
             
            anchor.append(p);
            div.append(anchor);
            container.append(div)
        });
});

};
  
appendData();

document.getElementById("logined").addEventListener("click",login);

function login(){
    let data = JSON.parse(localStorage.getItem('info')) || [];

    let username = document.getElementById('username').value;
    let Password = document.getElementById('password').value;


    if (Password==="" && username===""){
        alert("Please fill up Details")
        
    }
    
    else if(username != data.name && username!=="" && Password != data.password && Password!==""){
        alert('Incorrect Details')
        
    }else if(username===data.name && Password!==data.password && Password!==""){
        alert('Wrong password')

    }else if(username!==data.name && Password===data.password && username!=="" ){
        alert('User not found')
    }else if(username!=="" && Password===""){
        alert("Enter Your Password")
    }else if(username=="" && Password!==""){
        alert("Enter Your Username")
    }else if(data===[] ){
        alert("Please Signup up First ");
        window.location.href = './register.html';
    }
    
    else{
        alert('Login Successfully')
        window.location.href = '../monsterIndia/index.html'
    }
}