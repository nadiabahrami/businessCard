page.base('');

page('/', index);
page('about', about);
page('*', notFound);

function index(){
  articlesController.index();
};

function about(){
  aboutController.index();
};

function notFound(){
  alert('404 Error the page does not exist');
};

page();
