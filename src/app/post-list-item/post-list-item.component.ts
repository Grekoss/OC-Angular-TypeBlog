import { Component, OnInit, Input } from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onMore(post: Post) {
    this.postsService.likePost(post);
  }

  onLess(post: Post) {
    this.postsService.dontLikePost(post);
  }

  onRemove(post: Post) {
      this.postsService.removePost(post);
  }

}
