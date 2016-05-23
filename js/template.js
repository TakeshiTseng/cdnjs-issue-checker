var checkListTemplate = `
<h1>Profile of the lib</h1>
<ul>
<li>Git repository (required): <a href="{{repoUrl}}">{{repoUrl}}</a>
</li>
<li>Official website (optional, not the repository):<a href="{{homepage}}">{{homepage}}</a></li>
<li>NPM package url (optional):<a href="{{npmPackage}}">{{npmPackage}}</a></li>
<li>GitHub / Bitbucket popularity (required):

<ul>
<li id="cdnjs-checker-stars">Count of stars:</li>
<li id="cdnjs-checker-watchers">Count of watchers:</li>
<li id="cdnjs-checker-forks">Count of forks:</li>
</ul>
</li>
<li>NPM download stats (optional):

<ul>
<li>Downloads in the last day: <p id="cdnjs-checker-npm-dl-ld"></p></li>
<li>Downloads in the last week: <p id="cdnjs-checker-npm-dl-lw"></p></li>
<li>Downloads in the last month: <p id="cdnjs-checker-npm-dl-lm"></p></li>
</ul>
</li>
</ul>

<h1>Essential checklist</h1>

<ul class="contains-task-list">
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" disabled=""> I'm the author of this library

<ul class="contains-task-list">
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" disabled=""> I would like to add link to the page of this library on CDNJS on website / readme</li>
</ul>
</li>
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" checked="" disabled=""> This lib was not found on cdnjs repo</li>
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" checked="" disabled=""> No already exist / duplicated issue and PR</li>
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" checked="" disabled=""> The lib has notable popularity

<ul class="contains-task-list">
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" checked="" disabled=""> More than 100 [Stars / Watchers / Forks] on [GitHub / Bitbucket]</li>
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" disabled=""> More than 500 downloads stats per month on npm registry</li>
</ul>
</li>
<li class="task-list-item">
<input type="checkbox" class="task-list-item-checkbox" disabled=""> Project has public repository on famous online hosting platform (or been hosted on npm)</li>
</ul>
`
