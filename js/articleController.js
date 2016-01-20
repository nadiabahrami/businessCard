(function(module){
  var articlesController = {};

  articlesController.index = function(){
    Article.fetchAll(articleView.initIndexPage);
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };
  module.articlesController = articlesController;
})(window);
