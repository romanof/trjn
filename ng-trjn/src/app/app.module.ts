import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { ProfileService } from './common/profile.service';
import { PostService } from './common/post.service';

import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { SafeHtmlPipe } from './safe.html';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserPostsComponent,
    PostDetailComponent,
    ProfileDetailComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,

    // material design components.
    MatCardModule,
    MatListModule,
  ],
  providers: [
    ProfileService,
    PostService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
