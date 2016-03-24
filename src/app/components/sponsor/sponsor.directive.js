export function SponsorDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/sponsor/sponsor.html',
    controller: SponsorController,
    controllerAs: 'sponsor',
    bindToController: true
  };

  return directive;
}

class SponsorController {
  constructor () {
    'ngInject';
  }
}
