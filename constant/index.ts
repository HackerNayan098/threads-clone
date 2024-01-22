export interface User {
  _id: String;
  name: String;
  email: String;
  username: String;
  phone: String;
  thread: Post[];
}

export interface Post {
  postCaption: String;
  postImage: String;
  author: User;
  authorId: String;
}

export interface Comment {
  _id: String;
  commentText: String;
  author: User;
  authorId: String;
  thread: Post;
  threadId: String;
}
