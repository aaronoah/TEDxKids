export function ContactDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/contact/contact.html',
    controller: ContactController,
    controllerAs: 'contact',
    bindToController: true
  };

  return directive;
}

class ContactController {
  constructor () {
    'ngInject';
  }
}
