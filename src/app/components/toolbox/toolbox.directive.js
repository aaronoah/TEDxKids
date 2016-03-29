export function ToolboxDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/toolbox/toolbox.html',
    scope: {},
    controller: ToolboxController,
    controllerAs: 'toolbox',
    bindToController: true
  };

  return directive;
}

class ToolboxController {
  constructor ($scope) {
    'ngInject';
    var $jq = angular.element;
    
    var tooltip = function(){
        $jq('#toolbox button').tooltip({  //tooltip settings
            container: 'body'
        });
    };
    tooltip();
    $jq(window).load($jq('#toolbox').animate({left: "20px"},"normal")); //animate(styles, speed, easing);
    
    var toggleToolbox = function () {
        var toolboxStyle = {
            "position":"fixed",
            "left":"0",
            "top":"250px",
            "background":"white",
            "border-top-right-radius":"10px",
            "border-bottom-right-radius":"10px",
            "float":"left",
            "width":"25px",
            "padding":"10px 5px"
        };
        
        $jq("header-navbar").append('<div><span id="toggleToolbox" role="button">打开工具箱</span></div>');
        
        $jq("#toggleToolbox")
        .css(toolboxStyle)
        .mouseover(function(){
            $jq(this).css("color","red");
        }).mouseout(function(){
            $jq(this).css("color","black");
        }).click(function(ev){
            ev.preventDefault();
            $jq(this).parent().remove(); //remove the toolbox element
            $jq('#toolbox').animate({left: "20px"},"normal");
            tooltip();
        });
    }
    
    $scope.dismiss = function () {  
      $jq('#toolbox button').tooltip("destroy");
      $jq('#toolbox').animate({left: "-50px"}, "slow");
      toggleToolbox();
    };
  
  }
}
