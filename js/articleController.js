(function(module){
  var articlesController = {};
  var count = 0;
  articlesController.index = function(){
    if(count ===0){
      Article.fetchAll(articleView.initIndexPage);
      $('.tab-content').hide();
      $('#articles').fadeIn();
      count ++;
    }else{
      $('.tab-content').hide();
      $('#articles').fadeIn();
    }
  };
  module.articlesController = articlesController;
})(window);
