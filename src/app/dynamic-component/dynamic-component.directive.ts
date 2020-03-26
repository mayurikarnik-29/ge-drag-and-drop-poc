import { Directive, TemplateRef, ViewContainerRef, Input, Component, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  @Input() set appDynamicComponent(component) {
    if (component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.viewContainer.createComponent(componentFactory);
      this.viewContainer.createEmbeddedView(this.templateRef);
      console.log(componentRef)
    } else {
      this.viewContainer.clear();
    }
  }

}
