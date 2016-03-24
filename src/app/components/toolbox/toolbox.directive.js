export function ToolboxDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/toolbox/toolbox.html',
    controller: ToolboxController,
    controllerAs: 'toolbox',
    bindToController: true
  };

  return directive;
}

class ToolboxController {
  constructor ($scope, $document) {
    'ngInject';
   var tooltip = function(){
    angular.element('#toolbox button').tooltip({  //tooltip settings
      container: 'body'
    });
  };
  tooltip();
  angular.element('#toolbox').on('click','button',function(ev){
    ev.preventDefault();
    var a = angular.element(this).attr('class');
    if(a == 'close'){ //user clicks the dismiss button, should dismiss the tooltip as well as the toolbar
      angular.element('#toolbox button').tooltip("destroy");
      angular.element('#toolbox').animate({left: "-50px"}, "slow");
      var toolbox = $document.createElement('div');
      if ($document.body.lang == "zh-CN") {
        toolbox.innerHTML = '<span id="toggleToolbox" role="button">打开工具箱</span>';
      }else if ($document.body.lang == "en-US") {
        toolbox.innerHTML = '<span id="toggleToolbox" role="button">Open the Toolbox</span>';
      }
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
      angular.element(toolbox).children().css(toolboxStyle);
      angular.element(toolbox).children().mouseover(function(){
        angular.element(this).css("color","red");
        //$(this).css("text-decoration","none");
      }).mouseout(function(){
        angular.element(this).css("color","black");
      });
      $document.getElementsByTagName("header")[0].appendChild(toolbox);
      angular.element("#toggleToolbox").click(function(ev){
        ev.preventDefault();
        angular.element(this).parent().remove(); //remove the toolbox element
        angular.element('#toolbox').animate({left: "20px"},"normal");
        tooltip();
      });
    }
  });
  angular.element(window).load(angular.element('#toolbox').animate({left: "20px"},"normal")); //animate(styles, speed, easing);

  }
}
