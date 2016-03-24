export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'header',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor () {
    'ngInject';
    
  }
}
