import mongoose from "mongoose"

function connect() {
    return mongoose
        .connect(process.env.DB_URI)
        .then(() => {
            console.log("Database is successfuly connect.")
        })
        .catch((e) => {
            console.log("Mongo Connect Error", e)
        })
}

export default connect