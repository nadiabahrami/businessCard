var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.menuToggle = function(){
  $('#menu').on('click', function(event){
    event.preventDefault();
    $('nav').slideToggle();
  });
};

articleView.initIndexPage = function() {
  Article.all.forEach(function(a){
    $('#articles').append(a.toHtml());
  });

  articleView.handleMainNav();
};

$(document).ready( function() {
  articleView.handleMainNav();
  articleView.menuToggle();
});
