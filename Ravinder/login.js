



function login(){
    let data = JSON.parse(localStorage.getItem('info'));

    let username = document.getElementById('username').value;
    let Password = document.getElementById('password').value;

    if(username != data.name){
        alert('User not found')
    }else if(Password != data.password){
        alert('Wrong password')
    }else{
        alert('Login Successfully')
    }
}