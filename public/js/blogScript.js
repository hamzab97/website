document.addEventListener("DOMContentLoaded", function () {
    renderPostButton("button");
    renderPosts();
});

function renderPostButton(id){
    var btn = document.getElementById(id);
    btn.className = "btn btn-outline-success my-2 my-sm-0";
    btn.innerHTML = "Submit";
    btn.addEventListener("click", function () {
        postText();
        postBlogPost();
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
    contentsSpan.innerHTML = blogJSON.post;
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

function postText() {
    const text = document.getElementById("new-status-text").value;

    const card = document.createElement("div");
    card.className = 'story card';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    const creatorSpan = document.createElement('a');
    //'a' tag allows you to make links
    creatorSpan.className = 'story-creator card-title';
    creatorSpan.innerHTML = "Hamza";
    cardBody.appendChild(creatorSpan);

    const contentsSpan = document.createElement('p');
    contentsSpan.className = 'story-content card-text';
    contentsSpan.innerHTML = text;
    cardBody.appendChild(contentsSpan);

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    card.appendChild(cardFooter);

    const commentsDiv = document.createElement('div');
    commentsDiv.className = 'story-comments';
    cardFooter.appendChild(commentsDiv);

    const dateandTime = document.createElement('p');
    var d = new Date();
    dateandTime.innerHTML = d.toDateString() + " " + d.toLocaleTimeString();
    cardFooter.appendChild(dateandTime);

    //post to db
    postBlogPost(text, dateandTime.innerHTML);

    document.getElementById("new-status-text").value = null;

    const storiesDiv = document.getElementById('stories');
    storiesDiv.prepend(card);
    return storiesDiv;
}

function postBlogPost(newpost, postdate){
    let data = {
        name: "Hamza",
        post: newpost,  //content to be sent to the server
        date: postdate
    };
    //call endpoint
    post('/api/post', data); //posted to the database
}

function renderPosts(){
    get('/api/posts', function (postsArray) {
        for (let i = 0; i < postsArray.length; i++){
            let currentpost = postsArray[i];
            renderpostText(currentpost);
        }
    });
}