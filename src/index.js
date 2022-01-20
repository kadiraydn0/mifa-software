import express from "express"
import dotenv from "dotenv"
import connect from "./db/connect.js";

dotenv.config()
const app = express()
const router = express.Router()

const port = process.env.PORT
const host = process.env.HOST


router.get("/", (req, res) => res.send("SA"))


app.use(express.json());
app.use("/", router)

app.listen(port, host, () => {
    connect()
    console.log(`Server listening at http://${host}:${port}`)
})