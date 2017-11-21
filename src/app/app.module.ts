import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LabmonComponent } from './labmon/labmon.component';
import { TeamComponent } from './labmon/team/team.component';
import { LinksComponent } from './labmon/links/links.component';
import { VideosComponent } from './labmon/videos/videos.component';
import { HomeComponent } from './home/home.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'labmon/about',     component: LabmonComponent },
  { path: 'labmon/team',     component: TeamComponent },
  { path: 'labmon/links',     component: LinksComponent },
  { path: 'labmon/videos',     component: VideosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LabmonComponent,
    TeamComponent,
    LinksComponent,
    VideosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
