var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.menuHide = function(){
  // if($(document).width()<640){
    // $('nav').hide();
    $('#menu').on('click', function(event){
      event.preventDefault();
      $('nav').slideToggle();
    });
  // }
};

$(document).ready( function() {
  articleView.handleMainNav();
  articleView.menuHide();
});

// $(window).resize(function() {
//   if ($(document).width()>640){
//     $('nav').show();
//   }
// });
