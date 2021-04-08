import { Component, OnInit } from '@angular/core';
import { StoreSelectedPostService } from 'src/app/store-selected-post.service';

@Component({
  selector: 'app-favorite-post',
  templateUrl: './favorite-post.component.html',
  styleUrls: ['./favorite-post.component.scss']
})
export class FavoritePostComponent implements OnInit {

  constructor(private storeSelectedPostService: StoreSelectedPostService,) { }
  Posts = [];
  // showFiller = true;

  ngOnInit(): void {
    this.storeSelectedPostService.favoritePostListChange.subscribe(
      (posts) => this.Posts = posts
    );
  }

  onRemoveItem(id: number) {
    this.storeSelectedPostService.deletePostFromFavoriteList(id);
  }

}
