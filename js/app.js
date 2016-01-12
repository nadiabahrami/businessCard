function Article (opts){
  this.title = opts.title;
  this.author = opts.author;
  this.collaborators = opts.collaborators;
  this.projectURL = opts.projectURL;
  this.releaseDate = opts.releaseDate;
  this.description = opts.description;
};

Article.all= [];

Article.prototype.toHtml = function() {

  var appTemplate = $('#ourBuild').html();
  var compiledTemplate = Handlebars.compile(appTemplate);
  var html = compiledTemplate(this);
  $('#articles').append(html);
};

Article.loadAll = function(projects) {
  projects.forEach(function(ele) {
    Article.all.push(new Article(ele));
  });
};

Article.serverGrab = function (){
  $.ajax({
    url: '/data/projects.json',
    Type: 'GET',
    dataType: 'json',
    success: function(rawData, message, xhr){
      Article.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      articleView.initIndexPage();
      localStorage.savedETag = JSON.stringify(xhr.getResponseHeader('ETag'));
    },
    error: function(){
      console.log('fuck');
    }
  });
};

Article.fetchAll = function() {
  if (localStorage.rawData) {
    $.ajax({
      url: '/data/projects.json',
      Type: 'HEAD',
      success: function(data, message, xhr) {
        var getETag = xhr.getResponseHeader('ETag');
        if(getETag === JSON.parse(localStorage.savedETag)) {
          Article.loadAll(JSON.parse(localStorage.rawData));
          articleView.initIndexPage();
        }else{
          Article.serverGrab();
        }
      }
    });
  }else{
    Article.serverGrab();
  };
};
