export function EventDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/event/event.html',
    controller: EventController,
    controllerAs: 'event',
    bindToController: true
  };

  return directive;
}

class EventController {
  constructor () {
    'ngInject';
  }
}
