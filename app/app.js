// Angular App JS
var app = angular.module('atpoc', []);

app.factory('Book',function($http){
  
  function Page(data){
    this.pageNum = data.pageNum;
    this.tocTitle = data.tocTitle;
    this.tocType = data.tocType;
    this.tocID = data.tocID;
    this.parentID = data.parentID;
    this.jobNum = data.jobNum;
    this.jobNumDot = data.jobNumDot;
    this.cola = data.cola;
    this.colb = data.colb;
    this.colc = data.colc;
    this.cold = data.cold;
    this.cole = data.cole;
    this.page_type = data.page_type;
    this.page_title = data.page_title;
    this.pageid = data.pageid;
    this.swipeleft = data.swipeleft;
    this.swiperight = data.swiperight;
    this.swipedown = data.swipedown;
    this.swipeup = data.swipeup;
    this.sortorder = data.sortorder;
    this.dlu = data.dlu;
    this.datepublished = data.datepublished;
    this.publishedby = data.publishedby;
    this.publish2ios = data.publish2ios;
    this.showPosttest = data.Posttest;
    this.showPretest = data.showPretest;
    this.bookid = data.bookid;
    this.portBack = data.portBack;
    this.landBack = data.landBack;
    this.testjobnum = data.testjobnum;
    this.funderText = data.funderText;
    this.layout = data.layout;
  }
  
  function Book(data){
    //this.bookName = data.bookName;
    this.page = data.pages.map(function(page){return new Page(page);});
    // select the first page by default
    this.currentPage = this.page[0];
  }
  
  function _getBook(){
    return $http.get('/json/ms.json').then(function(res){
      return new Book(res.data);
    })
  }
  
  return {
    getBook: _getBook
  }
  
  
})


app.controller('MainCtrl', function($scope,Book) {
  //$scope.name = 'World';
  Book.getBook().then(function(book){
  $scope.book = book; 
  
  })
});
