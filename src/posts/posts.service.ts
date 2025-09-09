import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return 'All Posts is Here';
  }

  createPost(body: any) {
    return body;
  }

  getPost(id: string) {
    return `Post id: ${id}`;
  }

  updatePost(id: string, body: any) {
    return `Post ${id} is Updated: ${body}`;
  }

  deletePost(id: string) {
    return `Post ${id} is Deleted`;
  }
}
