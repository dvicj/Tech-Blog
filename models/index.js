const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, { //one to many
    foreignKey: 'user_id'
});

Post.belongsTo(User, { //one to one
    foreignKey: 'user_id',
});

User.belongsToMany(Post, { //many to many 
    foreignKey: 'user_id'
});
  
Post.belongsToMany(User, { //many to many 
    foreignKey: 'post_id'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
  

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Vote, Comment };