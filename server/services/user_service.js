const userRepository = require('../dal/user_repository')

const createUser = async(name,surname,email,password) => {
    try {
        const result = await userRepository.createUser(name,surname,email,password)
        return result
    } catch (error) {
        next(error)
    }
}

const readUser = async(id) => {
    try {
        const result = await userRepository.readUser(id)
        return result
    } catch (error) {
        next(error)
    }
}

const updateUser = async(name,surname,password) => {
    try {
        const result = await userRepository.updateUser(name,surname,password)
        return result
    } catch (error) {
        next(error)
    }
}

const deleteUser = async(id) => {
    try {
        const result = await userRepository.deleteUser(id)
        return result
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}

//Service Section 