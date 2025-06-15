document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();

    console.log("Name :",name)
    console.log("Email :",email)
    console.log("Password :",password)

    if (name === ""||email===""||password===""){
        alert("Please fill all the needed details");
        return;
    }
    if(!email.includes("@")||!email.includes(".")){
        alert("Email Not Valid");
        return;
    }
    if(password.length < 6){
        alert("Password has to have more than 6 characters")
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const isEmailUsed = users.some((user) =>user.email === email);

    if(isEmailUsed){
        alert('This email is already used');
        return;
    }
    users.push({
        name:name,
        email:email,
        password:password
    });
    localStorage.setItem("users",JSON.stringify(users));
    alert("User Registered Successfully");
    window.location.href = "login.html";


});
