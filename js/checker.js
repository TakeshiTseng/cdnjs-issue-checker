var prevLocation = '';
let issueBasedUrl = "https://api.github.com/repos/cdnjs/cdnjs/issues/";
let repoBaseUrl = "https://api.github.com/repos/";
let GitHubRepoRegex = /https?:\/\/github.com\/[-a-zA-Z0-9_]+\/[-a-zA-Z0-9_]+/gi
let npmRegex = /https?:\/\/www.npmjs.com\/package\/[-a-zA-Z0-9_]+/gi


var reloadPlugin = () => {
  // Fetch issue id from url
  var pathnameArray = document.location.pathname.split('/');
  let issueId = pathnameArray[pathnameArray.length-1];

  // API url
  let apiUrl = issueBasedUrl + issueId + "?access_token=" + accessToken;

}

setInterval(() => {

  if(window.location.pathname !== prevLocation) {
    prevLocation = window.location.pathname;

    reloadPlugin();
  }
}, 1000);
