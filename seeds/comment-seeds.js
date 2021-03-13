const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "It was just the printer! Don't worry, its in the river now."
    },
    {
        user_id: 2,
        post_id: 7,
        comment_text: "Um, I kindd of have a thing tonight, or I totally would!"
    },
    {
        user_id: 3,
        post_id: 10,
        comment_text: "Thanks for your visit Mr. Mayor! Hope you liked the dolls and soap cookies."
    },
    {
        user_id: 4,
        post_id: 8,
        comment_text: "I love birds! I'm going to have to get a present for Lance!"
    },
    {
        user_id: 5,
        post_id: 9,
        comment_text: "Pickling is a product of the patriarchy."
    },
    {
        user_id: 6,
        post_id: 9,
        comment_text: "Candace, you love pickled beets."
    },
    {
        user_id: 7,
        post_id: 6,
        comment_text: "IT'S OVER."
    },
    {
        user_id: 8,
        post_id: 5,
        comment_text: "I use this all the time!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;