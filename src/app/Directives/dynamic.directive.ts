import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDynamic]',
  exportAs: 'dynamicdirective'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
