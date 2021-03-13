const { User } = require('../models');

const userData = [
    {
        username: "fred_armisen", //user id 1
        email: "fred@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "carrie_brownstein", //user id 2
        email: "carrie_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "peter.peterlini", //user id 3
        email: "pp@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "nina", //user id 4
        email: "nina@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "candace_devereaux", //user id 5
        email: "candy@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "toni_rose", //user id 6
        email: "trose@gmail.com",
        password: "p@ssword6"
    },
    {
        username: "spyke", //user id 7
        email: "spyke@gmail.com",
        password: "p@ssword7"
    },
    {
        username: "lisa_eversman", //user id 8
        email: "lisa@gmail.com",
        password: "p@ssword8"
    },
    {
        username: "mr.mayor", //user id 9
        email: "pmayor@gmail.com",
        password: "p@ssword9"
    },
    {
        username: "bryce.shivers", //user id 10
        email: "bshivs@gmail.com",
        password: "p@ssword10"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;