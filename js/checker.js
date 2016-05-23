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

  if(issueId.search('[0-9]+') != -1){
  // call apiUrl and fetch issue imnformation
    fetch(apiUrl).then(resp => resp.text())
      .then(body => JSON.parse(body))
      .then(issue => {
        let issueBody = issue.body;
        let issueBodyLines = issueBody.split("\n");

        var libName, repoUrl, npmPackage, license, homepage;
        issueBodyLines.map(line => {
          if(line.search("Library name") != -1) {
            libName = line.replace("Library name:", "").replace(/\*+/, "");
            libName = libName.replace(/\*+/, "");
            libName = libName.trim();
          } else if(line.search("Git repository url") != -1) {
            let repoMatches = line.match(GitHubRepoRegex);
            if(repoMatches !== null && repoMatches.length !== 0) {
              repoUrl = repoMatches[0];
            } else {
              repoUrl = '';
            }
          } else if(line.search("npm package url") != -1) {
            let matches = line.match(npmRegex);
            if(matches !== null && matches.length !== 0) {
              npmPackage = matches[0];
            } else {
              npmPackage = '';
            }
          } else if(line.search("License") != -1) {
            license = line.replace("License(s):", "").replace(/\*+/g, "");
            license = license.replace(/\*+/g, "");
            license = license.trim();
          } else if(line.search("Official homepage") != -1) {
            homepage = line.replace("Official homepage:", "").replace(/\*+/g, "");
            homepage = homepage.replace(/\*+/g, "");
            homepage = homepage.trim();
          }
        });

        return {
          'libName': libName,
          'repoUrl': repoUrl,
          'npmPackage': npmPackage,
          'license': license,
          'homepage': homepage
        }
    })
    .then(info => {
      let commentBodyList = document.getElementsByClassName('comment-body markdown-body markdown-format js-comment-body');
      if(commentBodyList.length !== 0) {
        commentBody = commentBodyList[0];
        // checkListTemplate is from template.js
        var infoBody = Mustache.render(checkListTemplate, info);
        commentBody.insertAdjacentHTML('beforeEnd', infoBody);

        var pathnameArray = info.repoUrl.split('/');
        var repoName = pathnameArray[pathnameArray.length-1];
        var repoOwner = pathnameArray[pathnameArray.length-2];

        fetch(repoBaseUrl + repoOwner + "/" + repoName + "?access_token=" + accessToken)
          .then(resp => resp.text())
          .then(body => JSON.parse(body))
          .then(repoInfo => {
            var stargazers_count = repoInfo.stargazers_count;
            var watchers_count = repoInfo.watchers_count;
            var forks = repoInfo.forks;

            if(stargazers_count < 100) {
              document.getElementById('cdnjs-checker-stars').innerHTML = `Count of stars: <b class='cc-red'>${stargazers_count}</b>`;
            } else {
              document.getElementById('cdnjs-checker-stars').innerHTML = `Count of stars: <b class='cc-green'>${stargazers_count}</b>`;
            }

            if(watchers_count < 100) {
              document.getElementById('cdnjs-checker-watchers').innerHTML = `Count of watchers: <b class='cc-red'>${watchers_count}</b>`;
            } else {
              document.getElementById('cdnjs-checker-watchers').innerHTML = `Count of watchers: <b class='cc-green'>${watchers_count}</b>`;
            }

            if(forks < 100) {
              document.getElementById('cdnjs-checker-forks').innerHTML = `Count of forks: <b class='cc-red'>${forks}</b>`;
            } else {
              document.getElementById('cdnjs-checker-forks').innerHTML = `Count of forks: <b class='cc-green'>${forks}</b>`;
            }

          });
      }
    });
  }
}

setInterval(() => {

  if(window.location.pathname !== prevLocation) {
    prevLocation = window.location.pathname;

    reloadPlugin();
  }
}, 1000);
