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
  var $newArticle = $('article.template').clone();
  $newArticle.find('#title').html(this.title);
  $newArticle.find('.date').html(this.releaseDate);
  $newArticle.find('.colab').html('<strong>Collaborators: </strong>'+this.collaborators);
  $newArticle.find('.url').html('<strong>Project URl: </strong>'+this.projectURL);
  $newArticle.find('.description').html('<strong>Project Description:</strong>'+this.description);
  $newArticle.append('<hr>');
  $newArticle.removeClass('template');
  return $newArticle;
};

projects.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
