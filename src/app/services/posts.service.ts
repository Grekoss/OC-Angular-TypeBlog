import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<any[]>();

  posts: Post[] = [];

  constructor() {
      this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  removePost(post: Post) {
    const postIndex = this.posts.findIndex(
        (postEl) => {
          if (postEl === post) {
            return true;
          }
        }
    );
    this.posts.splice(postIndex, 1);
    this.savePosts();
    this.emitPosts();
  }

  likePost(post: Post) {
    post.loveIts++;
    this.savePosts();
    this.emitPosts();
  }

  dontLikePost(post: Post) {
    post.loveIts--;
    this.savePosts();
    this.emitPosts();
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
      firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
      firebase.database().ref('/posts')
          .on('value', (data: DataSnapshot) => {
              this.posts = data.val() ? data.val() : [];
              this.emitPosts();
          });
  }

}
