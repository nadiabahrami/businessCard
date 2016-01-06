var jobs = [
  {
    title: 'MLBucket list',
    author: 'Nadiaawesome',
    collaborators: 'Paul Sheridan, Kate Zurlo_Cuva, Shelly Y',
    projectURL: 'http://nadiabahrami.github.io/bucketlist',
    releaseDate: '12-29-15',
    description: 'MLBucketlist is a web app that allows the user to route a map to any baseball stadiums that they would like to visit on a road trip.  It will produce a route and directions to each selected stadium.  It also allows storage of comments for each visit and store that information to local storage to act as a scrap book.'
  },
  {
    title: 'Salmon Cookie Shop ',
    author: 'Nadia2',
    collaborators: 'none',
    projectURL: 'http://nadiabahrami.github.io/cookie-stand',
    releaseDate: '12-13-15',
    description: 'This is an example of a websit for a buisness that is selling salmon based cookies.   It has an tool rendering sales numbers that is not attached to the public facing sight.   Please see the rep for that site under the folder "internal-docs".'
  }
];

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
  $newArticle.find('.colab').html('Collaborators: '+this.collaborators);
  $newArticle.find('.url').html('Project URl: '+this.projectURL);
  $newArticle.find('.description').html('Project Description: '+this.description);




  $newArticle.append('<hr>');
  $newArticle.removeClass('template');
  return $newArticle;
};

jobs.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.toHtml());
});
