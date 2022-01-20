import mongoose from "mongoose"

export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    materials: { type: Array, required: true },
    stock: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
export default Product;