(function(module){
  var repos = {};

  repos.all = [];

  repos.request = function(callback){
    $.get('/github/users/nadiabahrami/repos'+ '?per_page=100'+'&sort=updated', function(data){
      repos.all = data;
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };


  module.repos = repos;

})(window);
