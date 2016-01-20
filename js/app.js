(function(module){

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

  Article.serverGrab = function (callback){
    console.log('serverGrab');
    $.ajax({
      url: '/data/projects.json',
      Type: 'GET',
      dataType: 'json',
      success: function(rawData, message, xhr){
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        if(callback) callback();
        localStorage.savedETag = JSON.stringify(xhr.getResponseHeader('ETag'));
      },
      error: function(){
        console.log('fuck');
      }
    });
  };

  Article.fetchAll = function(callback) {
    console.log('fetchall');
    if (localStorage.rawData) {
      console.log('first if');
      $.ajax({
        url: '/data/projects.json',
        Type: 'HEAD',
        success: function(data, message, xhr) {
          var getETag = xhr.getResponseHeader('ETag');
          if(getETag === JSON.parse(localStorage.savedETag)) {
            console.log('second if');
            Article.loadAll(JSON.parse(localStorage.rawData));
            console.log(localStorage.rawData);
            callback ? callback() : console.log('No callback');
          }else{
            console.log('2nd else');
            Article.serverGrab(callback);
          }
        }
      });
    }else{
      console.log('first else');
      Article.serverGrab(callback);
    };
  };

  module.Article = Article;

})(window);
