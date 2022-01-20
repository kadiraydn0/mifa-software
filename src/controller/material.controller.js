import express from "express";
import { createMaterial, findAndUpdate, findMaterial, findMaterialName } from "../service/material.service.js";


export async function createMaterialHandler(req, res) {
    try {
        let data = req.body
        let db_material = await findMaterialName(data.name)
        if (db_material) return res.status(409).send("This material already exists.")
        let material = await createMaterial({...data })
        res.send(material)
    } catch (e) {
        res.status(400).json({ success: false, error: e.message })
    }
}


export async function addMaterialHandler(req, res) {
    try {
        const _id = req.params.materialId
        const data = req.body.amount
        let material = await findMaterial(_id)
        let updateMaterial = await findAndUpdate(_id, data + material.amount)
        res.send(updateMaterial)
    } catch (e) {
        res.status(404).json({ success: false, error: e.message })
    }
}