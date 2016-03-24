export function JoinDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/join/join.html',
    controller: JoinController,
    controllerAs: 'join',
    bindToController: true
  };

  return directive;
}

class JoinController {
  constructor () {
    'ngInject';
  }
}
