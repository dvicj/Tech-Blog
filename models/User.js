const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: { //how the user will be identified 
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        username: { //username
          type: DataTypes.STRING,
          allowNull: false
        },
        email: { //email, validate to make sure it follow email structure "email@email.com"
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: { //password, validate to make sure it has atleast 4 characters 
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
      },
  {
      hooks: {
        // set up beforeCreate lifecycle "hook" functionality, hash password 
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          // set up beforeUpdate lifecycle "hook" functionality, hash password 
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
      },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;