export interface User {
  _id: String;
  name: String;
  email: String;
  username: String;
  password: String;
  thread: [];
}

export interface Post {
  postCaption: String;
  postImage: String;
  authorId: String;
}

export interface Comment {
  commentText: String;
  authorId: String;
  threadId: String;
}
