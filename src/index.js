import express from "express"
import dotenv from "dotenv"
import connect from "./db/connect.js";
import { addMaterialHandler, createMaterialHandler, getAllMaterialHandler } from "./controller/material.controller.js";
import { createProductHandler, createProductSchemaHandler } from "./controller/product.controller.js";
import cors from "cors"

dotenv.config()
const app = express()
const router = express.Router()

const port = process.env.PORT
const host = process.env.HOST


// Material
router.post("/create/material", createMaterialHandler)
router.put("/add/material", addMaterialHandler)
router.get("/get/material", getAllMaterialHandler)


// Product
router.post("/create/productSchema", createProductSchemaHandler)
router.post("/create/product", createProductHandler)




app.use(express.json());
app.use(cors())
app.use("/", router)

app.listen(port, host, () => {
    connect()
    console.log(`Server listening at http://${host}:${port}`)
})