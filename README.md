# Tech-Blog

Hello, and welcome to my README! This is for my Week 14 Challenge, which was to create a CMS-style Tech Blog. I learned a lot while doing this, and I am happy to be able to share my experience with you.

[a tech blog](https://enigmatic-fortress-14206.herokuapp.com/)

![finished html](https://github.com/dvicj/Tech-Blog/blob/main/public/images/xxx-a-tech-blog-xxx.png)


It was my job to ensure my Tech Blog had the following features and met these qualifications:

- folder structure must follow Model-View-Controller paradigm
  - Model: MySQL and Sequelize 
  - View: Handlebars.js
  - Controller: Express.js
- dotenv for environment variables
- brcypt to hash user's passwords 
- express-session and connect-session-sequelize to add user authentication
- deploy the application to Heroku 

I was to create this Tech Blog, and meet all of the requirements listed above, by using:

- Model-View-Controller(MVC) Paradigm
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Insomnia Core](https://insomnia.rest/download/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [MySQL 2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- JavaScript
- HTML 
- CSS

I completed this project as a way to further test creating servers and databases, as well as learning to use Handlebars.js and all of it's useful and interesting features. 

Features:

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Learning](#learning)
* [License](#license)

## Installation

The user must clone all filed from this repo. It is important that the location of the files is not changed. 


1. If the user would like to run the server locally: 

- The user must have [Node.js](https://nodejs.org/en/download/) installed on their computer. 

- Then, the user must enter "npm install". This will install all required dependencies, and allow the user to run the application locally. To run the server, user must enter "node server.js" or "npm start" to start the server. The server can then be opened on any browser on "localhost:3000". 

2. If the user would like to open the application on any web browser: 

- The app is also deployed on [Heroku](https://enigmatic-fortress-14206.herokuapp.com/), and can be accessed from anywhere. 

## Usage
Here are some user experience highlights from my page:

- navigation buttons for "homepage" and "login" when visiting the blog for the first time or not signed in.
- navigation buttons for "homepage", "dashboard", "create post" and "logout" when signed into the blog
- login with email and password 

![login](https://github.com/dvicj/Tech-Blog/blob/main/public/images/login.PNG)

- signup with username, email and password

![signup](https://github.com/dvicj/Tech-Blog/blob/main/public/images/sign%20up.PNG)

- when user clicks on existing blog post, they have the option to comment 

- personalized dashboard showing posts made by the user 

![dashboard](https://github.com/dvicj/Tech-Blog/blob/main/public/images/dashboard.png)

- user is able to create, edit and delete posts 

![create post](https://github.com/dvicj/Tech-Blog/blob/main/public/images/create%20post.png)
![edit post](https://github.com/dvicj/Tech-Blog/blob/main/public/images/edit%20post.png)

- when user is idle on the page for 10 minutes, they are automatically signed out

## Credits
These are some sources I used to help me along:

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/download/)
- [Insomnia Core](https://insomnia.rest/download/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [MySQL 2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-session](https://www.npmjs.com/package/express-session)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [JAWSDB](https://devcenter.heroku.com/articles/jawsdb#:~:text=JawsDB%20is%20an%20add%2Don,Facebook%2C%20Twitter%2C%20and%20Youtube.)
- [400 Bad Request Error](https://airbrake.io/blog/http-errors/400-bad-request)
- [Lorem Ipsum Generator](https://www.lipsum.com/)
- [Change cookie expiration in Express](https://stackoverflow.com/questions/14049294/change-cookie-expiration-in-express)
- [Google Fonts](https://fonts.google.com/specimen/Turret+Road?preview.text_type=custom#glyphs)

## Learning
Here are the highlights of what I learned and issues I had while writing this code.

- it was difficult to use the handlebars engine at first, but I ended up really enjoying using it and all of its capabilities 
- I felt a big sense of accomplishment in creating a login feature, as that felt like something from a "real" website 

## License
MIT License

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)

Copyright (c) 2021 Devin Jones

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
