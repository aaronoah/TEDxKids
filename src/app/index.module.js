
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ToolboxDirective } from '../app/components/toolbox/toolbox.directive';
import { BannerDirective } from '../app/components/banner/banner.directive';
import { EventDirective } from '../app/components/event/event.directive';
import { TalkDirective } from '../app/components/talk/talk.directive';
import { JoinDirective } from '../app/components/join/join.directive';
import { SponsorDirective } from '../app/components/sponsor/sponsor.directive';
import { ContactDirective } from '../app/components/contact/contact.directive';
import { WhoweareDirective } from '../app/components/whoweare/whoweare.directive';

angular.module('tedxNg', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'duScroll'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('headerNavbar', NavbarDirective)
  .directive('toolbox', ToolboxDirective)
  .directive('banner', BannerDirective)
  .directive('talk', TalkDirective)
  .directive('event', EventDirective)
  .directive('join', JoinDirective)
  .directive('sponsor', SponsorDirective)
  .directive('contact', ContactDirective)
  .directive('whoweare', WhoweareDirective);
