var articles = [];

function Article (opts){
  this.title = opts.title;
  this.author = opts.author;
  this.collaborators = opts.collaborators;
  this.projectURL = opts.projectURL;
  this.releaseDate = opts.releaseDate;
  this.description = opts.description;
};

Article.prototype.toHtml = function() {
  var appTemplate = $('#ourBuild').html();
  var compiledTemplate = Handlebars.compile(appTemplate);
  var html = compiledTemplate(this);
  $('#articles').append(html);

};

projects.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
