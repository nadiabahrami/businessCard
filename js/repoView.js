(function(module){

  var repoView = {};

  var domRender = function(){
    $('#about').find('ul').empty();
    $('#about').show().siblings().hide();
    console.log
    ('domRender function');
  };

  var render = function(repo) {
    console.log(repo.name);
    console.log(repo.url);
    return '<li>'+ repo.name+': '+ repo.url +'</li>';
  };

  repoView.index = function(repo){
    domRender();
    console.log('repoView');
    $('#about ul').append(
      repos.with('has_downloads').map(render));
  };

  module.repoView = repoView;
})(window);
