(function(module){
  var repos = {};

  repos.all = [];

  repos.request = function(callback){
    $.ajax({
      url:'https://api.github.com/users/nadiabahrami/repos'+ '?per_page=100&sort=updated',
      type: 'GET',
      headers:{'Authorization': 'token '+ token.githubToken}})
    .done(function(data, message, xhr){
      repos.all = data;
    })
    .done(callback);
  };

  module.repos = repos;

})(window);
