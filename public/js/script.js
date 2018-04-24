document.addEventListener("DOMContentLoaded", function () {
    renderUserData(user);
});

function renderUserData(aUser) {
    document.getElementById("myname").innerHTML = aUser.name;
    document.getElementById("description").innerHTML = aUser.description + " from " + aUser.location;
}