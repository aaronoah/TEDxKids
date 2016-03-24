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
  constructor () {
    'ngInject';
  }
}
