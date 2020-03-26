import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DividerComponent } from './divider/divider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ge-drag-and-drop-poc';
  component;

  constructor() {}
  components = [
    {
      title: 'Header',
      name: HeaderComponent,
    },
    {
      title: 'Footer',
      name: FooterComponent
    },
    {
      title: 'Button',
      name: ButtonComponent
    },
    {
      title: 'Textbox',
      name: TextboxComponent
    },
    {
      title: 'Divider',
      name: DividerComponent
    }
  ];

  renderedcomponents = [];

  drop(event: CdkDragDrop<{ title: string, name: Component }[]>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    
    } else {
      this.component = event.item.data.name;
      console.log(this.renderedcomponents)
      // transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
    console.log(event.previousContainer.id, "prev")
    console.log(event.container.id, "Con")
  }
}
