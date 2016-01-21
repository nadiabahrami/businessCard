(function(module){

  var repoView = {};

  var domRender = function(){
    $('#about').find('ul').empty();
    $('#about').show().siblings().hide();
    ('domRender function');
  };

  var render = function(repo) {
    return '<li>'+ repo.name+': '+ repo.url +'</li>';
  };

  repoView.index = function(repo){
    domRender();
    $('#about ul').append(
      repos.with('has_downloads').map(render));
  };

  module.repoView = repoView;
})(window);
