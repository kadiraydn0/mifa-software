import Material from "../model/material.model.js"

export function createMaterial(input) {
    return Material.create(input)
}


export function findMaterial(id) {
    return Material.findOne({ _id: id })
}


export function findMaterialName(data) {
    return Material.findOne({ name: data })
}


export function findAllMaterial() {
    return Material.find()
}


export function findAndUpdate(id, input) {
    return Material.findOneAndUpdate({ _id: id }, {
        amount: input
    }, {
        new: true
    })
}