import mongoose from "mongoose"

export const MaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    unit_type: { type: String, enum: ["kg", "lt", "count"], required: true },
    amount: { type: Number, required: true },
}, { timestamps: true });

const Material = mongoose.model("Material", MaterialSchema);
export default Material;