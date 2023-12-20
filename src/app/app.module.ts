import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './store/posts/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts/posts.effects';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    PostsListComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postsReducer }),
    EffectsModule.forRoot([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
