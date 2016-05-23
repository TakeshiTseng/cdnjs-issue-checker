var prevLocation = '';
let issueBasedUrl = "https://api.github.com/repos/cdnjs/cdnjs/issues/";
let repoBaseUrl = "https://api.github.com/repos/";
let GitHubRepoRegex = /https?:\/\/github.com\/[-a-zA-Z0-9_]+\/[-a-zA-Z0-9_]+/gi
let npmRegex = /https?:\/\/www.npmjs.com\/package\/[-a-zA-Z0-9_]+/gi


var reloadPlugin = () => {
}

setInterval(() => {

  if(window.location.pathname !== prevLocation) {
    prevLocation = window.location.pathname;

    reloadPlugin();
  }
}, 1000);
