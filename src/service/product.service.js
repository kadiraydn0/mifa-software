import Product from "../model/product.model.js";


export function createProductSchema(input) {
    return Product.create(input)
}


export function findProductName(data) {
    return Product.findOne({ name: data })
}


export function findProductSchema(id) {
    return Product.findOne({ _id: id })
}


export function findProductAndUpdate(id, input) {
    return Product.findOneAndUpdate({ _id: id }, { stock: input })
}