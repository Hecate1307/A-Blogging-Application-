import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataStorageService } from 'src/app/data-storage.service';
import { Post } from 'src/app/model/Post';
import { StoreSelectedPostService } from 'src/app/store-selected-post.service';
import { DeletePostComponent } from '../edit/delete-post/delete-post.component';
import { NewPostComponent } from '../edit/new-post/new-post.component';
import { UpdatePostComponent } from '../edit/update-post/update-post.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private dataService: DataStorageService,
    private matDialog: MatDialog,
    private storeSelectedPostService: StoreSelectedPostService,
  ) { }

  postData = [];
  currentId = -1;
  currentTitle = null;
  currentContent = null;
  likePost = new Set();

  openDialogNew() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30vw';
    dialogConfig.height = '50vh';


    this.matDialog.open(NewPostComponent, dialogConfig);
  }

  onDelete(post) {
    this.currentId = post.id;
    this.openDialogDelete();
  }

  openDialogDelete() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30vw';
    dialogConfig.height = '30vh';
    dialogConfig.data = this.currentId;

    this.matDialog.open(DeletePostComponent, dialogConfig);
  }

  onUpdate(post) {
    this.currentId = post.id;
    this.currentTitle = post.title;
    this.currentContent = post.body;
    this.openDialogUpdate();
  }

  openDialogUpdate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30vw';
    dialogConfig.height = '50vh';
    dialogConfig.data = { id: this.currentId, title: this.currentTitle, content: this.currentContent };
    this.matDialog.open(UpdatePostComponent, dialogConfig);
  }


  likeIt(post: Post) {
    if (this.likePost.has(post.id)) {
      this.likePost.delete(post.id);
      this.storeSelectedPostService.deletePostFromFavoriteList(post.id);
    } else {
      this.likePost.add(post.id);
      this.storeSelectedPostService.addPostToFavoriteList(post);
    }
  }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(data => {
      console.log(data);
      this.postData = data;
    });
    this.dataService.ShowedPostAdded.subscribe(state => {
      this.postData.unshift(state);
    });
    this.dataService.ShowedPostDeleted.subscribe(id => {
      this.postData = this.postData.filter(postEle =>
        postEle.id !== this.currentId);
    });

    this.dataService.ShowedPostUpdated.subscribe(data => {
      for (let postEle of this.postData) {
        if (postEle.id === data.id) {
          postEle.title = data.title;
          postEle.body = data.body;
          break;
        }
      }
    });

    this.storeSelectedPostService.favoritePostListChange.subscribe(posts => {
      this.likePost = new Set(posts.map(post => post.id));
    });

  }

}
