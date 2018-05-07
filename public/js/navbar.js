var description = ["Software Developer", "Toronto, Canada"];

const user = {
    name: "Hamza Bana",
    description: description[0],
    location: description[1]
};

document.addEventListener("DOMContentLoaded", function () {
    renderNavBar(user);
});

function newNavBarItem (text, url){
    var a = document.createElement("a");
    a.innerText = text;
    a.href = url;
    a.className = "nav-link";
    return a;
}

function renderNavBar(aUser){
    var navUL = document.getElementById("navbarSupportedContent");
    navUL.appendChild(newNavBarItem(aUser.name, "index.html"));
    navUL.appendChild(newNavBarItem("Skills", "skills.html"));
    navUL.appendChild(newNavBarItem("Portfolio", "pageUnderConstruction.html"));
    // navUL.appendChild(newNavBarItem("Shopify Challenge", "shopifyChallenge.html"));
}