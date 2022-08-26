

function details(){
    let data = {
        resume:document.getElementById('resume').value,
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        mobile:document.getElementById('mobile').value,
        location:document.getElementById('location').value,
        experience:document.getElementById('experience').value,
        skills:document.getElementById('skill').value,
        industry:document.getElementById('industry').value,
        department:document.getElementById('function').value,
    }
    if(data.resume == '' || data.name == '' || data.email == '' || data.password == '' || data.mobile == '' || data.location == '' || data.experience == 'Select Experience' || data.skills == '' || data.industry == 'Industry' || data.department == 'Function'){
         alert('Please fill the full information')
    }else if(data.password.length < 6){
        alert('Password should be minimum 6 characters')
        
    }else{
        alert('Registered Successfully')
        localStorage.setItem("info",JSON.stringify(data))
        window.location.href="login.html"
    }
    
    
}


