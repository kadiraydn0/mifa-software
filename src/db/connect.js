import mongoose from "mongoose"

function connect() {
    return mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Database is successfuly connect.")
        })
        .catch((e) => {
            console.log("Mongo Connect Error", e)
        })
}

export default connect