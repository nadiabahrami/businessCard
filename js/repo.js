(function(module){
  var repos = {};

  repos.all = [];

  repos.request = function(callback){
    $.get({
      url:'https://api.github.com/users/nadiabahrami/repos'+ '?per_page=100&sort=updated',
      // type: 'GET',
      // headers:{'Authorization': 'token '+ token.githubToken}})
    })
    .done(function(data, message, xhr){
      repos.all = data;
      console.log(repos.all);
    })
    .done(callback);
    console.log('completed request');
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };


  module.repos = repos;

})(window);
