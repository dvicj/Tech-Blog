const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, { //one to many 
    foreignKey: 'user_id'
});

Post.belongsTo(User, { //one to one 
    foreignKey: 'user_id',
});

Comment.belongsTo(User, { //many to one 
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, { //one to one 
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, { //one to many 
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {//one to many 
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};