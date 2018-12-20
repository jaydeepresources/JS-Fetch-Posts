var posts = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
        .then(data => {
            posts = data;
            mapPosts()
        })
}

function mapPosts() {
    var postsArea = ''
    posts.forEach(post => {
        postsArea +=
            "<div class='card my-2'>" +
            "<div class='card-body'>" +
            "<h4 class='card-title'>" + post.title + "</h4>" +
            "<h6 class='card-subtitle mb-2 text-muted'>" + "Posted By User:" + post.id + "</h6>" +
            "<p class='card-text'>" + post.body + "</p>" +
            "</div>" +
            "</div>"
    });
    document.getElementById('postsArea').innerHTML = postsArea
}