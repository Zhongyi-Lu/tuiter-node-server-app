import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  topic: String,
  userName: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  liked: Boolean,
  likes: Number,
  replies: Number,
  retuits: Number,
  retuited: Boolean,
  dislikes: Number,
  disliked: Boolean,
}, {collection: 'tuits'});
export default schema;

