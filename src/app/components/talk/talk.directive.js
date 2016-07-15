export function TalkDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/talk/talk.html',
    controller: TalkController,
    controllerAs: 'talk',
    bindToController: true
  };

  return directive;
}

class TalkController {
  constructor ($scope) {
    'ngInject';
    let $jq = angular.element;
    let rand = Math.random();
    if(rand >= 0 && rand < 0.25){
        $jq("#talks").append('<link rel="stylesheet" href="app/components/talk/talk1_1.scss" />');
    }else if(rand >= 0.25 && rand < 0.5){
        $jq("#talks").append('<link rel="stylesheet" href="app/components/talk/talk1_2.scss" />');        
    }else if(rand >= 0.5 && rand < 0.75){
        $jq("#talks").append('<link rel="stylesheet" href="app/components/talk/talk1_3.scss" />');
    }else if(rand >= 0.75 && rand < 1){
        $jq("#talks").append('<link rel="stylesheet" href="app/components/talk/talk1_4.scss" />');
    }
  }
}
