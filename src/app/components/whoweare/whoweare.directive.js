export function WhoweareDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/whoweare/whoweare.html',
    controller: WhoweareController,
    controllerAs: 'whoweare',
    bindToController: true
  };

  return directive;
}

class WhoweareController {
  constructor () {
    'ngInject';
  }
}
