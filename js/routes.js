page.base('');

page('/projects', index);
page('/about', about);
page('/', about);
page('*', notFound);

page();

function index(){
  articlesController.index();
};

function about(){
  aboutController.index();
};

function notFound(){
  alert('404 Error the page does not exist');
};
