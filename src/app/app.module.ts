import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderComponent } from './header/header.component';
import { DynamicComponentDirective } from './dynamic-component/dynamic-component.directive';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { TextboxComponent } from './textbox/textbox.component';

import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DynamicComponentDirective,
    FooterComponent,
    ButtonComponent,
    DividerComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent, FooterComponent, ButtonComponent, DividerComponent, TextboxComponent],
})
export class AppModule { }
