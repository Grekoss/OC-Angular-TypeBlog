import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubcription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubcription = this.postsService.postsSubject.subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
    );
    this.postsService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubcription.unsubscribe();
  }

}
