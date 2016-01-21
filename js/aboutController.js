(function(module){
  var aboutController = {};

  aboutController.index = function(){
    console.log('about Controller');
    $('.tab-content').hide();
    $('#about').fadeIn();
    repos.request(repoView.index);
    console.log('post repo request');
  };


  module.aboutController = aboutController;
})(window);
