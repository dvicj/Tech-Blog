const { Post } = require('../models');

const postData = [
    {//1
        title: "Mayor of Portland is an energy hog!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 2
    },
    {//2
        title: "Why you should cut pasta out of your diet.",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 3
    },
    {//3
        title: "Everything you need for a 15 minute morning hike.",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 6

    },
    {//4
        title: "Women and Women First Grand Re-Opening!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 5
    },
    {//5
        title: "Cacao!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 4
    },
    {//6
        title: "MTV IS OVER!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 7
    },
    {//7
        title: "Come see my DJ set tonight?",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 1
    },
    {//8
        title: "Put a bird on it!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 8
    },
    {//9
        title: "We can pickle that!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 10
    },
    {//10
        title: "New B and B Opening in the Heart of Portland! Lots of doilies!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 9
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;