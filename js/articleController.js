(function(module){
  var articlesController = {};

  articlesController.index = function(){
    Aritcle.createTable();
    Article.fetchAll(articleView.initIndexPage);
  };
  module.articlesController = articlesController;
})(window);
