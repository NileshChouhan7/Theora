const Category = require('../models/category.model')
const AppError = require('../utils/app.error.util')

const getAllCategories = async () => {
    const categories = await Category
        .find()
        .catch(err=>{
            console.log(err)
            throw AppError.database(err.message)
        })
    console.log(categories)
    return categories
}

const createCategory = async (newCategory) => {
    const category = new Category(newCategory)
    const response = await category
        .save()
        .catch(err => {
            console.log(err)
            throw AppError.database(err.message)
        })
    console.log('category created succesfully -',response)
    return response
}

module.exports = {
    getAllCategories,
    createCategory
}