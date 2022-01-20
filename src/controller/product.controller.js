import express from "express";
import { findAndUpdate, findMaterial } from "../service/material.service.js";
import { createProductSchema, findProductName, findProductSchema, findProductAndUpdate } from "../service/product.service.js";

export async function createProductSchemaHandler(req, res) {

    try {
        let data = req.body
        let db_product = await findProductName(data.name)
        if (db_product) return res.status(409).send("This product schema already exists.")
        let product = await createProductSchema({...data })
        res.send(product)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
}

export async function createProductHandler(req, res) {

    let schemaId = req.body.schemaId
    let quantity = req.body.quantity
    let productSchema = await findProductSchema(schemaId)

    let data = await Promise.all(productSchema.materials.map(async x => {
        let material = []
        let exists = await findMaterial(x.materialId)
        material.push(exists)
        return material
    }))

    await Promise.all(data.map(async x => {

        x.map(async y => {
            await findAndUpdate(y.id, y.amount - quantity)
        })
        await findProductAndUpdate(schemaId, productSchema.stock + quantity)
    }))

    let newProduct = await findProductSchema(schemaId)
    res.send(newProduct)
}