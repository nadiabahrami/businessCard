var articleView = {};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

$(document).ready( function() {
  articleView.handleMainNav();
});