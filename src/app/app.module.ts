import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeListComponent, JokeComponent } from './joke-list.component';
import { JokeFormComponent } from './joke-form.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectivelessComponent } from './directiveless.component';
import { NgforComponent } from './ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CardHolderDirective } from './card-holder.directive';
import { RolloverImageDirective } from './rollover-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    DirectiveComponent,
    DirectivelessComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
    CardHolderDirective,
    RolloverImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
