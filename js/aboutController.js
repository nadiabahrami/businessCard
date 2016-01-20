(function(module){


  aboutController.index = function(){
    ('.tab-content').hide();
    ('#about').fadeIn();
  };


  module.aboutController = aboutController;
})(window);
