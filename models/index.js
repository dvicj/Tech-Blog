const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, { //one to many
    foreignKey: 'user_id'
});

Post.belongsTo(User, { //one to one
    foreignKey: 'user_id',
});

Comment.belongsTo(User, { //many to many 
    foreignKey: 'user_id'
});
  
Comment.belongsTo(Post, { //many to many 
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
  

module.exports = { User, Post, Comment };