const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (!loggedInUser){
    alert("You need to log in first");
    window.location.href ="index.html";
}else{
    const h1  = document.querySelector("h1");
    h1.textContent = `Welcome to homepage, ${loggedInUser.name}`;
}

document.querySelector("button").addEventListener('click',() => {
    localStorage.removeItem("loggedInUser");
    window.location.href= "index.html";
});
