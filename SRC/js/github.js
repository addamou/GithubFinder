(function(){
    let client_id = " Iv1.3835fc6096a76428";
    let client_secret = "51bd7f5fefa1332dfd3452152999e785964c3823";
    let count = 5;
    let sort = "created: asc";

    //==================== Input function ================================
    let search = document.getElementById('UserSearch').addEventListener("keyup", e => {
        let user = e.target.value;

        if (user.length > 0) {
          getUser(user).then(data => {
            console.log(data);

            if (data.message !== "Desole ce nom n'est disponible...") {
              showProfile(data.profile);
              showRepos(data.repos)};
          });
        }
      });
    //===================== API function ===========================A===H===S====
    let url = "https://api.github.com/users"
      async function getUser(user) {
        let profileResponse = await fetch(
          `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        );
        let reposResponse = await fetch(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        );
    
        let profile = await profileResponse.json();
        let repos = await reposResponse.json();
    
        return { profile, repos };
      }
//=========================== Affichage profile =================================
    let profile = document.getElementById('profile');
      function showProfile(user){
        profile.innerHTML = 
        `<div class="card z-depth-5 mb-3" style="max-width: 100rem;">
          <div class="card-header" style="background-color:#9e7610 ;"><h4 class="grey-text text-lighten-2"><i class="fa fa-user-o mx-1"> </i>${user.name}</h4></div>
          <div class="card-body">
            <div class="row">
            <div class="col-md-3">
              <img class="img-thumbnail avatar my-2" src="${user.avatar_url}">
              <a target="_blank" class="btn btn-block z-depth-5" href="${user.html_url}">Voir le Profile</a>
            </div>
            <div class="col-md-9">
             <div>
             <span class="badge badge-dark"><i class="fa fa-folder-o"></i> Repertoire: ${user.public_repos}</span>  
              <span class="badge badge-success"><i class="fa fa-eye"></i> Followers: ${user.followers}</span>
              <span class="badge badge-info"><i class="fa fa-bell-o"></i> Following: ${user.following}</span>
             </div>
              </hr>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item"><i class="fa fa-institution"></i> Company: ${user.company}</li>
                <li class="list-group-item"><i class="fa fa-globe"></i> Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                <li class="list-group-item"><i class="fa fa-map-marker"></i> Location: ${user.location}</li>
                <li class="list-group-item"><i class="fa fa-id-card-o"></i> Member Since: ${user.created_at}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card px-2" style="background-color:#9e7610 ;"><h4 class="grey-text text-lighten-2"><i class="fa fa-folder-open-o"> Mes Cinq derniers dépots Github</i></h4></div>
        `
      };
  function showRepos(repos) {
    let output = "";
    
    repos.forEach(repo => {
      output += `

      <div class="row">
        <div class="col s6">
          <a href="${repo.html_url}" target="_blank" class=" grey-text text-lighten-2">${repo.name}</a>
        </div>
        <div class="col s6">
          <span class="new badge red m-1">Forks: ${repo.watchers_count}</span>
          <span class="new badge blue m-1">Watch: ${repo.watchers_count}</span>
          <span class="new badge gren m-1">Star: ${repo.stargazers_count}</span>
        </div>
      </div>
      `;
    }); 
    document.getElementById("repos").innerHTML = output; 
  }

})();
//================= fin de mon code ===========================================================

/*<div class="input-field col s12">
  <select>
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <label>Materialize Select</label>
</div>


<div id="repos" class="card border-warning">
  <div class="card border card-body mb-2">
    <div class="row">
      <div class="col-md-6">
        <i class="fa fa-folder-open"></i>
      </div>
      <div class="col-md-6 float-right">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>

        <span class="badge badge-info">Watch: ${repo.watchers_count}</span>

        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
      </div>
    </div>
  </div>
</div>*/
$(document).ready(function () {
  $('.modal').modal();
})