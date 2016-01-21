(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').hide();
    $('#about').fadeIn();
    repos.request(repoView.index);
  };


  module.aboutController = aboutController;
})(window);
