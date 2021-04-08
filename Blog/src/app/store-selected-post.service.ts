import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './model/Post';

@Injectable({
  providedIn: 'root'
})
export class StoreSelectedPostService {

  favoritePostListChange = new Subject<Post[]>();
  favoritePostList = [];

  constructor() { }

  addPostToFavoriteList(post: Post) {
    this.favoritePostList.push(post);
    this.favoritePostListChange.next(this.favoritePostList);
  }

  deletePostFromFavoriteList(id: number) {
    this.favoritePostList = this.favoritePostList.filter(item =>
      item.id !== id
    );
    this.favoritePostListChange.next(this.favoritePostList);

  }
}
