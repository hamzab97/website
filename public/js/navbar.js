var description = ["Software Developer", "Toronto, Canada"];

const user = {
    name: "Hamza Bana",
    description: description[0],
    location: description[1]
};

document.addEventListener("DOMContentLoaded", function () {
    renderNavBar(user);
})

function newNavBarItem (text, url){
    //create new <a> element with text inside it and direct it to url, return the element
    //create li element to add item to list
    // const li = document.createElement("li");
    // li.className = "nav-item active"; //define class name for element

    //create <a> element
    var a = document.createElement("a");
    a.innerText = text;
    a.href = url;
    a.className = "nav-link";

    // li.appendChild(a);
    // alert("hoiluulluuuuuu");
    return a;
}

function renderNavBar(aUser){
    var navUL = document.getElementById("navbarSupportedContent");
    navUL.appendChild(newNavBarItem(aUser.name, "index.html"));
    navUL.appendChild(newNavBarItem("Blog", "blog.html"));
    navUL.appendChild(newNavBarItem("Shopify Challenge", "shopifyChallenge.html"));
}