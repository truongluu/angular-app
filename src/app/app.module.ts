import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

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
import { FormComponent } from './form/form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipeComponent } from './pipe/pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { DefaultPipe } from './default.pipe';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ReactiveModalFormComponent } from './reactive-modal-form/reactive-modal-form.component';
import { TemplateDriveFormsComponent } from './template-drive-forms/template-drive-forms.component';
import { DIComponent } from './di/di.component';
import { HttpComponentComponent } from './http-component/http-component.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogsComponent } from './blogs/blogs.component';
import { MooComponent } from './moo/moo.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistComponent } from './artist/artist.component';
import { AlwaysAuthGuard } from './always-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'blog/:id', component: BlogsComponent },
  { path: 'blog/moo', component: MooComponent },
  {
    path: 'artist/:artistId', component: ArtistComponent,
    canActivate: [AlwaysAuthGuard],
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {
        path: 'tracks', component: ArtistTrackListComponent
      }, 
      {
        path: 'albums', component: ArtistAlbumListComponent
      }
    ]
  },
  { path: '**', component: NotfoundComponent }
];

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
    RolloverImageDirective,
    FormComponent,
    RxjsComponent,
    PipeComponent,
    AsyncPipeComponent,
    DefaultPipe,
    ModalFormComponent,
    ReactiveModalFormComponent,
    TemplateDriveFormsComponent,
    DIComponent,
    HttpComponentComponent,
    RoutingComponent,
    HomeComponent,
    SearchComponent,
    NotfoundComponent,
    BlogsComponent,
    MooComponent,
    AppHeaderComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
