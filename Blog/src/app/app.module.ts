import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UpdatePostComponent } from './components/edit/update-post/update-post.component';
import { DeletePostComponent } from './components/edit/delete-post/delete-post.component';
import { NewPostComponent } from './components/edit/new-post/new-post.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Materials } from './materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritePostComponent } from './components/favorite-post/favorite-post.component';
import { PostDetailComponent } from './components/post-list/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UpdatePostComponent,
    DeletePostComponent,
    NewPostComponent,
    FavoritePostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Materials,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
