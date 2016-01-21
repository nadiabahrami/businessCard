(function(module){

  var repoView = {};

  var domRender = function(){
    $('#about').find('ul').empty();
    $('#about').show().siblings().hide();
  };

  repoView.index = function(repo){
    domRender();
    $('about ul').append('<li>'+ repo.name+': '+ repo.url +'</li>');
  };

  module.repoView = repoView;
})(window);
