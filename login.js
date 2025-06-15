document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    const password =document.getElementById("passwordInput").value.trim();

    if ( email === "" || password === ""){

        alert("Please enter both email and password")
        return;
    }

    const users= JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser =users.find (
        (user) =>user.email === email && user.password  === password
    );

    if(matchedUser){
        localStorage.setItem("loggedInUser",JSON.stringify(matchedUser));

        window.location.href= "home.html";
    }
    else{
        alert("Incorrect email or password. ");
    }

});
