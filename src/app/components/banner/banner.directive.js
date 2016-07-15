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
  constructor ($scope, $document, $window, $interval) {
    'ngInject';
    //var $jq = angular.element;
    //var count = $jq('.slider .list').length;
	//var slideWidth = $jq('.slider').width();
    //var sliderUlWidth = count * slideWidth;
    //var slides_title_array = [];
    //var index = 0;  //records the current index number of slide
    var count = $document.querySelectorAll('.slider .list').length;
    var slideWidth = $document.querySelectorAll('.slider').style.width;
    var sliderUlWidth = count * slideWidth;
    var slides_title_array = [];
    var index = 0;
    var init = function () {
            //$jq('.slider').css({ width: sliderUlWidth});
            //$jq('.slider .list:first-child').addClass('active'); //imperatively make the first node active
            //$jq.each($jq('.slider .list'), function(){   //makes black space empty
                //var paddingRight = slideWidth - $jq(this).width();
                //$jq(this).css({paddingRight: paddingRight});
            //});
            $document.querySelectorAll('.slider').style.width = sliderUlWidth;
            $window.addClass($document.querySelectorAll('.slider .list:first-child'), 'active');
            var list = $document.querySelectorAll('.slider .list');
            var sliderWidth = $document.querySelectorAll('.slider .list').length;
            for(var i=0;i<sliderWidth;i++){
                var paddingRight = slideWidth - list[i].style.width;
                list[i].style.paddingRight = paddingRight;
            }
    };
    init();
    
    $scope.scrollLeft = function(){
        $jq('.slider').animate({left: + slideWidth
                }, 800, function () {
                    index = index < 0 ? slides_title_array.length - 1 : index-1;
                    $jq('.slider .list:last-child').prependTo('.slider');
                    $jq('.slider').css('left', 0);
                    $jq('.banner_message_box .title').html(slides_title_array[index]);
                });
    };
    
    $scope.scrollRight = function(){
        $jq('.slider').animate({left: - slideWidth
                }, 800, function () {
                    index = (index+1) % slides_title_array.length;
                    $jq('.slider .list:first-child').appendTo('.slider');
                    $jq('.slider').css('left', 0);
                    $jq('.banner_message_box .title').html(slides_title_array[index]);
                });
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
