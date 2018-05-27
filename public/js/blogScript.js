const user = {
    name: "Hamza Bana"
};
document.addEventListener("DOMContentLoaded", function () {
    renderPostButton("submitButton");
    console.log("page loaded");
    renderNavBar(user);
    renderStories();
});

function renderPostButton(id){
    var btn = document.getElementById(id);
    btn.type = "submit";
    btn.addEventListener("click", function () {
        alert("Only registered users can write blog posts");
        document.getElementById("new-status-text").value = null;
    });
}

function renderpostText(blogJSON){
    const card = document.createElement("div");
    card.className = 'story card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    const creatorSpan = document.createElement('a');
    //'a' tag allows you to make links
    creatorSpan.className = 'story-creator card-title';
    creatorSpan.innerHTML = blogJSON.name;
    cardBody.appendChild(creatorSpan);

    const contentsSpan = document.createElement('p');
    contentsSpan.className = 'story-content card-text';
    contentsSpan.innerHTML = blogJSON.story;
    cardBody.appendChild(contentsSpan);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    card.appendChild(cardFooter);

    const commentsDiv = document.createElement('div');
    commentsDiv.className = 'story-comments';
    cardFooter.appendChild(commentsDiv);

    const dateandTime = document.createElement('p');
    dateandTime.innerHTML = blogJSON.date;
    cardFooter.appendChild(dateandTime);

    const storiesDiv = document.getElementById('stories');
    storiesDiv.prepend(card);
    return storiesDiv;
}

// function postText() {
//     const text = document.getElementById("new-status-text").value;
//
//     if (text == null || text == ""){
//         return;
//     }
//
//     const card = document.createElement("div");
//     card.className = 'story card';
//
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
//     card.appendChild(cardBody);
//
//     const creatorSpan = document.createElement('p');
//     //'a' tag allows you to make links
//     creatorSpan.className = 'story-creator card-title';
//     creatorSpan.innerHTML = "Hamza";
//     cardBody.appendChild(creatorSpan);
//
//     const contentsSpan = document.createElement('p');
//     contentsSpan.className = 'story-content card-text';
//     contentsSpan.innerHTML = text;
//     cardBody.appendChild(contentsSpan);
//
//     const cardFooter = document.createElement('div');
//     cardFooter.className = 'card-footer';
//     card.appendChild(cardFooter);
//
//     const commentsDiv = document.createElement('div');
//     commentsDiv.className = 'story-comments';
//     cardFooter.appendChild(commentsDiv);
//
//     const dateandTime = document.createElement('p');
//     var d = new Date();
//     dateandTime.innerHTML = d.toDateString() + " " + d.toLocaleTimeString();
//     cardFooter.appendChild(dateandTime);
//
//     document.getElementById("new-status-text").value = null;
//
//     const storiesDiv = document.getElementById('stories');
//     storiesDiv.prepend(card);
//     return storiesDiv;
// }

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
    // navUL.appendChild(newNavBarItem("Login", "login.html"));
}

function renderStories(){
    const url = '/db/post';
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            for (let i = 0; i < myJson.length; i ++){
                renderpostText(myJson[i]);
            }
        });
    // get ('/db/post', function(storiesArr){
    //     for (let i = 0; i < storiesArr.length; i ++){
    //         renderpostText(storiesArr[i]);
    //     }
    // });
}