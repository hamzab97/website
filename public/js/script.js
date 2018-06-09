document.addEventListener("DOMContentLoaded", function () {
    renderUserData(user);
    // renderParticles();
});

function renderUserData(aUser) {
    document.getElementById("myname").innerHTML = aUser.name;
    document.getElementById("description").innerHTML = aUser.description + " from " + aUser.location;
}
//
// function renderParticles(){
//     particlesJS.load('particles-js', 'particles.json',function(){
//         console.log('callback - particles.js config loaded');
//     });
// }
