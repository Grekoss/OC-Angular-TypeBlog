import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubject = new Subject<any[]>();

  private posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet. Accusamus adipisci aliquam asperiores cum error fugiat necessitatibus nihil quam.',
      loveIts: -1,
      createdAt: new Date(2018, 6, 23, 15, 3),
    },
    {
      title: 'Mon deuxième post',
      content: 'Error esse fugiat iste rem soluta tenetur veniam voluptatem! Eum, maxime, rem. Architecto excepturi iusto nemo quos.',
      loveIts: 0,
      createdAt: new Date(2017, 11, 25, 23, 30),
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea earum mollitia repellendus.',
      loveIts: 4,
      createdAt: new Date(2000, 8, 29, 10),
    },
    {
      title: 'Mon quatrième post',
      content: 'Lorem vide ;)',
      loveIts: 1,
      createdAt: new Date(),
    }
  ];

  constructor() { }

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
    this.emitPosts();
  }

  likePost(post: Post) {
    post.loveIts++;
    this.emitPosts();
  }

  dontLikePost(post: Post) {
    post.loveIts--;
    this.emitPosts();
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

}
