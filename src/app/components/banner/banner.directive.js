export function BannerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/banner/banner.html',
    controller: BannerController,
    controllerAs: 'banner',
    bindToController: true
  };
  
  return directive;
}

class BannerController {
  constructor ($scope, $interval) {
    'ngInject';
    var $jq = angular.element;
    var count = $jq('.slider .list').length;
	var slideWidth = $jq('.slider').width();
    var sliderUlWidth = count * slideWidth;
    var slides_title_array = [];
    var index = 0;  //records the current index number of slide
    
    var init = function () {
            $jq('.slider').css({ width: sliderUlWidth});
            $jq('.slider .list:first-child').addClass('active'); //imperatively make the first node active
            $jq.each($jq('.slider .list'), function(){   //makes black space empty
                var paddingRight = slideWidth - $jq(this).width();
                $jq(this).css({paddingRight: paddingRight});
            });
            
    };
    init();
    
    var moveLeft = function () {
            $jq('.slider').animate({left: + slideWidth
                }, 800, function () {
                    index = index < 0 ? slides_title_array.length - 1 : index-1;
                    $jq('.slider .list:last-child').prependTo('.slider');
                    $jq('.slider').css('left', 0);
                    $jq('.banner_message_box .title').html(slides_title_array[index]);
                });
    };
    var moveRight = function () {  
            $jq('.slider').animate({left: - slideWidth
                }, 800, function () {
                    index = (index+1) % slides_title_array.length;
                    $jq('.slider .list:first-child').appendTo('.slider');
                    $jq('.slider').css('left', 0);
                    $jq('.banner_message_box .title').html(slides_title_array[index]);
                });
    };
    
    $scope.scrollLeft = function(){
        moveLeft();
    };
    
    $scope.scrollRight = function(){
        moveRight();
    };
    
    var setSlidesTitleArray = function (title_array) {
            slides_title_array = title_array;
    };
    var turnOnAutoplay = function (millisecs) {
            $interval(moveRight, millisecs); //periodically play the slides
    };
    
    setSlidesTitleArray(['无限&middot;未来','永恒的瞬间']);
    turnOnAutoplay(3500);

  }
}
