const UserTable = require("../modelSchema/user_table");

const createUser = async(name,surname,email,password) => {
    const data = {
        name,
        surname,
        email,
        password
    };
    const addedUser = new UserTable(data);
    try {
        const result = await addedUser.save() 
        return result
    } catch (error) {
        next(error)
    }
};

const readUser = async(id) => {
    try {
        const result = await UserTable.findById() 
        return result
    } catch (error) {
        next(error)
    }
};

const updateUser = async(id,name,surname,password) => {
    try {
        const result = await UserTable.findByIdAndUpdate(id, {name,surname,password}) 
        return result
    } catch (error) {
        next(error)
    }
};

const deleteUser = async(id) => {
    try {
        const result = await UserTable.findByIdAndRemove(id) 
        return result
    } catch (error) {
        next(error)
    }
};

module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
};
