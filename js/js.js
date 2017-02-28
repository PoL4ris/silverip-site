


app.controller('mainController', function ($scope, $location, $anchorScroll){

  $scope.skinChange = function (num){
    warpol('#body').removeClass('skin1');
    warpol('#body').removeClass('skin2');
    warpol('#body').removeClass('skin3');
    warpol('#body').removeClass('skin4');
    warpol('#body').removeClass('skin5');
    warpol('#body').removeClass('skin6');
    warpol('#body').removeClass('skin7');
    warpol('#body').removeClass('skin8');
    warpol('#body').removeClass('skin9');
    warpol('#body').addClass('skin' + num);
  }
  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
  };
})




warpol(window).scroll(function () {
  if (warpol(this).scrollTop() > 100) {
    warpol('.goToTop').fadeIn();
  } else {
    warpol('.goToTop').fadeOut();
  }
});
warpol('.goToTop').click(function () {
  warpol("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

